import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, MessageSquare, CheckCircle, Loader2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";

const AIChatbot = () => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dietPlan, setDietPlan] = useState<string | null>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: "",
    dietaryPreferences: "",
    healthConditions: "",
    mealsPerDay: "",
  });

  const totalSteps = 5;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGeneratePlan = async () => {
    setIsGenerating(true);
    toast({
      title: "Generating Your Diet Plan",
      description: "Our AI is analyzing your data. This may take a moment...",
    });

    try {
      const { data, error } = await supabase.functions.invoke("generate-diet-plan", {
        body: { formData },
      });

      if (error) throw error;

      if (data?.error) {
        toast({ title: "Error", description: data.error, variant: "destructive" });
      } else {
        setDietPlan(data.plan);
        setStep(totalSteps + 1); // move to results view
      }
    } catch (e: any) {
      console.error(e);
      toast({ title: "Error", description: "Failed to generate diet plan. Please try again.", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleGeneratePlan();
    }
  };

  const handleBack = () => {
    if (step === totalSteps + 1) {
      setStep(totalSteps);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.name && formData.age && formData.gender;
      case 2: return formData.height && formData.weight;
      case 3: return formData.activityLevel;
      case 4: return formData.goal && formData.mealsPerDay;
      case 5: return formData.dietaryPreferences;
      default: return false;
    }
  };

  const handleStartOver = () => {
    setStep(1);
    setDietPlan(null);
    setFormData({ name: "", age: "", gender: "", height: "", weight: "", activityLevel: "", goal: "", dietaryPreferences: "", healthConditions: "", mealsPerDay: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">NutriAI</span>
          </Link>
          <Link to="/auth">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered <span className="text-gradient">Diet Plan Creator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {dietPlan ? "Your personalized diet plan is ready!" : "Answer a few questions and get your personalized diet plan in minutes"}
            </p>
          </div>

          {/* Show results */}
          {step === totalSteps + 1 && dietPlan ? (
            <div>
              <Card className="p-8 mb-6">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{dietPlan}</ReactMarkdown>
                </div>
              </Card>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={handleStartOver}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Start Over
                </Button>
                <Button onClick={() => {
                  const blob = new Blob([dietPlan], { type: "text/markdown" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${formData.name}-diet-plan.md`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}>
                  <Download className="w-4 h-4 mr-2" /> Download Plan
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
                  <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <Card className="p-8">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Let's start with the basics</h2>
                    <div className="space-y-2">
                      <Label htmlFor="name">What's your name?</Label>
                      <Input id="name" placeholder="Enter your name" value={formData.name} onChange={(e) => updateFormData("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">How old are you?</Label>
                      <Input id="age" type="number" placeholder="Enter your age" value={formData.age} onChange={(e) => updateFormData("age", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>What's your gender?</Label>
                      <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="male" id="male" /><Label htmlFor="male">Male</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="female" id="female" /><Label htmlFor="female">Female</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="other" id="other" /><Label htmlFor="other">Other</Label></div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Your physical stats</h2>
                    <div className="space-y-2">
                      <Label htmlFor="height">What's your height? (in cm)</Label>
                      <Input id="height" type="number" placeholder="e.g., 170" value={formData.height} onChange={(e) => updateFormData("height", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">What's your current weight? (in kg)</Label>
                      <Input id="weight" type="number" placeholder="e.g., 70" value={formData.weight} onChange={(e) => updateFormData("weight", e.target.value)} />
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">How active are you?</h2>
                    <RadioGroup value={formData.activityLevel} onValueChange={(value) => updateFormData("activityLevel", value)}>
                      {[
                        { value: "sedentary", label: "Sedentary", desc: "Little or no exercise" },
                        { value: "light", label: "Lightly Active", desc: "Exercise 1-3 days/week" },
                        { value: "moderate", label: "Moderately Active", desc: "Exercise 3-5 days/week" },
                        { value: "very", label: "Very Active", desc: "Exercise 6-7 days/week" },
                        { value: "extra", label: "Extra Active", desc: "Very hard exercise & physical job" },
                      ].map((item) => (
                        <Card key={item.value} className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === item.value ? "border-primary" : ""}`}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={item.value} id={item.value} />
                            <Label htmlFor={item.value} className="cursor-pointer flex-1">
                              <div className="font-semibold">{item.label}</div>
                              <div className="text-sm text-muted-foreground">{item.desc}</div>
                            </Label>
                          </div>
                        </Card>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">What's your goal?</h2>
                    <div className="space-y-2">
                      <Label>Primary Goal</Label>
                      <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData("goal", value)}>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="lose" id="lose" /><Label htmlFor="lose">Lose Weight</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="maintain" id="maintain" /><Label htmlFor="maintain">Maintain Weight</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="gain" id="gain" /><Label htmlFor="gain">Gain Weight/Muscle</Label></div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>How many meals do you prefer per day?</Label>
                      <RadioGroup value={formData.mealsPerDay} onValueChange={(value) => updateFormData("mealsPerDay", value)}>
                        {["2", "3", "4", "5"].map((n) => (
                          <div key={n} className="flex items-center space-x-2">
                            <RadioGroupItem value={n} id={`${n}meals`} />
                            <Label htmlFor={`${n}meals`}>{n === "5" ? "5+ meals" : `${n} meals`}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 5 */}
                {step === 5 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Final details</h2>
                    <div className="space-y-2">
                      <Label htmlFor="dietary">Any dietary preferences or restrictions?</Label>
                      <Textarea id="dietary" placeholder="e.g., Vegetarian, Vegan, Keto, No dairy, etc." value={formData.dietaryPreferences} onChange={(e) => updateFormData("dietaryPreferences", e.target.value)} rows={4} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="health">Any health conditions we should know about? (Optional)</Label>
                      <Textarea id="health" placeholder="e.g., Diabetes, High blood pressure, Allergies, etc." value={formData.healthConditions} onChange={(e) => updateFormData("healthConditions", e.target.value)} rows={4} />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button onClick={handleNext} disabled={!isStepValid() || isGenerating}>
                    {isGenerating ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
                    ) : step === totalSteps ? (
                      <><CheckCircle className="w-4 h-4 mr-2" /> Generate Plan</>
                    ) : (
                      <>Next <ArrowRight className="w-4 h-4 ml-2" /></>
                    )}
                  </Button>
                </div>
              </Card>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
