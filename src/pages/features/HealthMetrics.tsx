import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, ArrowLeft, BarChart, Calculator, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const HealthMetrics = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: ""
  });
  const [results, setResults] = useState<any>(null);

  const calculateMetrics = () => {
    if (!formData.weight || !formData.height || !formData.age) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100;
    const age = parseFloat(formData.age);

    const bmi = (weight / (height * height)).toFixed(1);

    let bmr;
    if (formData.gender === "male") {
      bmr = Math.round(10 * weight + 6.25 * (height * 100) - 5 * age + 5);
    } else {
      bmr = Math.round(10 * weight + 6.25 * (height * 100) - 5 * age - 161);
    }

    const tdee = Math.round(bmr * 1.55);

    setResults({ bmi, bmr, tdee });

    toast({
      title: "Metrics Calculated!",
      description: "Your health metrics have been calculated successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Health Metrics Calculator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track and calculate your BMI, BMR, TDEE, and more with our AI-powered tools
            </p>
          </div>

          <Card className="p-8 shadow-lg mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Calculate Your Metrics</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg) *</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height (cm) *</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 175"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 25"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <select
                  id="gender"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <Button onClick={calculateMetrics} className="w-full" size="lg">
              <Calculator className="mr-2 w-5 h-5" />
              Calculate Metrics
            </Button>
          </Card>

          {results && (
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Your Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">BMI</p>
                  <p className="text-4xl font-bold text-primary">{results.bmi}</p>
                </div>
                <div className="text-center p-6 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">BMR</p>
                  <p className="text-4xl font-bold text-accent">{results.bmr}</p>
                  <p className="text-xs text-muted-foreground mt-1">cal/day</p>
                </div>
                <div className="text-center p-6 bg-success/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">TDEE</p>
                  <p className="text-4xl font-bold text-success">{results.tdee}</p>
                  <p className="text-xs text-muted-foreground mt-1">cal/day</p>
                </div>
              </div>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6">
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Weight</h3>
              <p className="text-muted-foreground">
                Log your weight daily and see trends over time
              </p>
            </Card>

            <Card className="p-6">
              <Activity className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Body Measurements</h3>
              <p className="text-muted-foreground">
                Track chest, waist, hips, and more
              </p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Progress Photos</h3>
              <p className="text-muted-foreground">
                Upload photos to visualize your transformation
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthMetrics;
