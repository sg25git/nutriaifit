import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, ArrowLeft, Calendar, ChefHat, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const MealPlanning = () => {
  const { toast } = useToast();
  const [showPlan, setShowPlan] = useState(false);
  const [formData, setFormData] = useState({
    mealType: "",
    cuisine: "",
    calories: "",
    dietaryRestrictions: ""
  });

  const handleGeneratePlan = () => {
    if (!formData.mealType || !formData.cuisine || !formData.calories) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setShowPlan(true);
  };

  const demoMealPlan = {
    title: `${formData.cuisine?.charAt(0).toUpperCase()}${formData.cuisine?.slice(1)} ${formData.mealType?.charAt(0).toUpperCase()}${formData.mealType?.slice(1)} Plan`,
    targetCalories: formData.calories || "500",
    meals: [
      { name: "Grilled Chicken Salad", calories: 350, protein: "30g", carbs: "15g", fat: "18g", time: "15 min", ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Olive oil", "Lemon"] },
      { name: "Quinoa & Veggie Bowl", calories: 420, protein: "14g", carbs: "55g", fat: "16g", time: "20 min", ingredients: ["Quinoa", "Bell peppers", "Chickpeas", "Avocado", "Tahini dressing"] },
      { name: "Salmon with Steamed Broccoli", calories: 480, protein: "35g", carbs: "12g", fat: "32g", time: "25 min", ingredients: ["Salmon fillet", "Broccoli", "Brown rice", "Soy sauce", "Ginger"] },
      { name: "Greek Yogurt Parfait", calories: 280, protein: "18g", carbs: "35g", fat: "8g", time: "5 min", ingredients: ["Greek yogurt", "Granola", "Mixed berries", "Honey", "Chia seeds"] },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <Activity className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">NutriAI</span>
          </Link>
          <Link to="/auth">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">AI Meal Planning</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate personalized meal plans tailored to your goals and preferences
            </p>
          </div>

          {/* Interactive Meal Plan Generator */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Generate Your Meal Plan</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="mealType">Meal Type *</Label>
                <Select value={formData.mealType} onValueChange={(value) => setFormData({...formData, mealType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                    <SelectItem value="full-day">Full Day Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cuisine">Cuisine Preference *</Label>
                <Select value={formData.cuisine} onValueChange={(value) => setFormData({...formData, cuisine: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="american">American</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calories">Target Calories *</Label>
                <Input
                  id="calories"
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.calories}
                  onChange={(e) => setFormData({...formData, calories: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="restrictions">Dietary Restrictions</Label>
                <Input
                  id="restrictions"
                  placeholder="e.g., Vegetarian, Gluten-free"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                />
              </div>
            </div>

            <Button onClick={handleGeneratePlan} className="w-full" size="lg">
              <ChefHat className="mr-2 w-5 h-5" />
              Generate AI Meal Plan
            </Button>
          </Card>

          {/* Generated Meal Plan Results */}
          {showPlan && (
            <div className="mt-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">🍽️ {demoMealPlan.title}</h2>
                <p className="text-muted-foreground">Target: {demoMealPlan.targetCalories} kcal{formData.dietaryRestrictions ? ` • ${formData.dietaryRestrictions}` : ""}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {demoMealPlan.meals.map((meal, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{meal.name}</h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" />{meal.time}</span>
                    </div>
                    <div className="flex gap-3 mb-4 flex-wrap">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{meal.calories} kcal</span>
                      <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">P: {meal.protein}</span>
                      <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded-full">C: {meal.carbs}</span>
                      <span className="text-xs bg-red-500/10 text-red-600 px-2 py-1 rounded-full">F: {meal.fat}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Ingredients:</p>
                      <p className="text-sm text-muted-foreground">{meal.ingredients.join(", ")}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Estimated Calories</p>
                <p className="text-3xl font-bold text-primary">{demoMealPlan.meals.reduce((sum, m) => sum + m.calories, 0)} kcal</p>
              </Card>
            </div>
          )}

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Planning</h3>
              <p className="text-muted-foreground">
                Get complete weekly meal plans with shopping lists and prep instructions
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-muted-foreground">
                Meals designed to be prepared in 30 minutes or less
              </p>
            </Card>

            <Card className="p-6">
              <Activity className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Macro Balanced</h3>
              <p className="text-muted-foreground">
                Every meal optimized for your protein, carb, and fat targets
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealPlanning;
