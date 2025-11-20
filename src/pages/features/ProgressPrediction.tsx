import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, ArrowLeft, TrendingUp, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ProgressPrediction = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    currentWeight: "",
    targetWeight: "",
    weeklyGoal: ""
  });

  const handlePredict = () => {
    if (!formData.currentWeight || !formData.targetWeight || !formData.weeklyGoal) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get your prediction",
        variant: "destructive"
      });
      return;
    }

    const current = parseFloat(formData.currentWeight);
    const target = parseFloat(formData.targetWeight);
    const weekly = parseFloat(formData.weeklyGoal);
    const weeks = Math.abs((target - current) / weekly);

    toast({
      title: "Prediction Generated!",
      description: `You'll reach your goal in approximately ${Math.ceil(weeks)} weeks`,
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
            <h1 className="text-5xl font-bold mb-4">AI Progress Prediction</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See your future progress with AI-powered predictions based on your data
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Calculate Your Timeline</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="currentWeight">Current Weight (kg) *</Label>
                <Input
                  id="currentWeight"
                  type="number"
                  placeholder="e.g., 75"
                  value={formData.currentWeight}
                  onChange={(e) => setFormData({...formData, currentWeight: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetWeight">Target Weight (kg) *</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  placeholder="e.g., 70"
                  value={formData.targetWeight}
                  onChange={(e) => setFormData({...formData, targetWeight: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weeklyGoal">Weekly Goal (kg) *</Label>
                <Input
                  id="weeklyGoal"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 0.5"
                  value={formData.weeklyGoal}
                  onChange={(e) => setFormData({...formData, weeklyGoal: e.target.value})}
                />
              </div>
            </div>

            <Button onClick={handlePredict} className="w-full" size="lg">
              <TrendingUp className="mr-2 w-5 h-5" />
              Generate AI Prediction
            </Button>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Forecasts</h3>
              <p className="text-muted-foreground">
                See predicted weight changes week by week
              </p>
            </Card>

            <Card className="p-6">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Goal Timeline</h3>
              <p className="text-muted-foreground">
                Know exactly when you'll reach your target weight
              </p>
            </Card>

            <Card className="p-6">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Adjustments</h3>
              <p className="text-muted-foreground">
                AI recommends plan changes if you're off track
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressPrediction;
