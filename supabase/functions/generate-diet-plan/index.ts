import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const { name, age, gender, height, weight, activityLevel, goal, dietaryPreferences, healthConditions, mealsPerDay } = formData;

    const activityMap: Record<string, string> = {
      sedentary: "Sedentary (little or no exercise)",
      light: "Lightly active (exercise 1-3 days/week)",
      moderate: "Moderately active (exercise 3-5 days/week)",
      very: "Very active (exercise 6-7 days/week)",
      extra: "Extra active (very hard exercise & physical job)",
    };

    const goalMap: Record<string, string> = {
      lose: "Lose weight",
      maintain: "Maintain weight",
      gain: "Gain weight/muscle",
    };

    const prompt = `You are an expert nutritionist and dietitian AI. Create a detailed, personalized daily meal plan for the following person:

Name: ${name}
Age: ${age}
Gender: ${gender}
Height: ${height} cm
Weight: ${weight} kg
Activity Level: ${activityMap[activityLevel] || activityLevel}
Goal: ${goalMap[goal] || goal}
Meals per day: ${mealsPerDay}
Dietary Preferences/Restrictions: ${dietaryPreferences || "None"}
Health Conditions: ${healthConditions || "None"}

Please provide:
1. **Calculated Daily Calorie Target** based on their BMR and activity level
2. **Macro Breakdown** (protein, carbs, fats in grams)
3. **Complete Meal Plan** for ${mealsPerDay} meals with:
   - Meal name and time suggestion
   - Specific foods with portions
   - Calories and macros per meal
4. **Hydration Recommendation**
5. **Important Tips** specific to their goal

Format the response in clean markdown with headers, bullet points, and bold text for key values.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are an expert nutritionist. Provide detailed, science-based meal plans. Always use markdown formatting." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Failed to generate diet plan" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const plan = data.choices?.[0]?.message?.content || "Unable to generate plan.";

    return new Response(JSON.stringify({ plan }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
