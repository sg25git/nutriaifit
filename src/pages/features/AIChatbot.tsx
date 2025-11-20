import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, MessageSquare, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AIChatbot = () => {
  const [step, setStep] = useState(1);
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

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Generate diet plan
      toast({
        title: "Creating Your Personalized Diet Plan",
        description: "Our AI is analyzing your data to create the perfect plan for you!",
      });
      // Here you would integrate with AI to generate the plan
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.age && formData.gender;
      case 2:
        return formData.height && formData.weight;
      case 3:
        return formData.activityLevel;
      case 4:
        return formData.goal && formData.mealsPerDay;
      case 5:
        return formData.dietaryPreferences;
      default:
        return false;
    }
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered <span className="text-gradient">Diet Plan Creator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer a few questions and get your personalized diet plan in minutes
            </p>
          </div>

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

          {/* Questionnaire Card */}
          <Card className="p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Let's start with the basics</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="name">What's your name?</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">How old are you?</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => updateFormData("age", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>What's your gender?</Label>
                  <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 2: Physical Stats */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Your physical stats</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="height">What's your height? (in cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g., 170"
                    value={formData.height}
                    onChange={(e) => updateFormData("height", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">What's your current weight? (in kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g., 70"
                    value={formData.weight}
                    onChange={(e) => updateFormData("weight", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Activity Level */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">How active are you?</h2>
                
                <RadioGroup value={formData.activityLevel} onValueChange={(value) => updateFormData("activityLevel", value)}>
                  <Card className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === "sedentary" ? "border-primary" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedentary" id="sedentary" />
                      <Label htmlFor="sedentary" className="cursor-pointer flex-1">
                        <div className="font-semibold">Sedentary</div>
                        <div className="text-sm text-muted-foreground">Little or no exercise</div>
                      </Label>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === "light" ? "border-primary" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="cursor-pointer flex-1">
                        <div className="font-semibold">Lightly Active</div>
                        <div className="text-sm text-muted-foreground">Exercise 1-3 days/week</div>
                      </Label>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === "moderate" ? "border-primary" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <Label htmlFor="moderate" className="cursor-pointer flex-1">
                        <div className="font-semibold">Moderately Active</div>
                        <div className="text-sm text-muted-foreground">Exercise 3-5 days/week</div>
                      </Label>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === "very" ? "border-primary" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very" id="very" />
                      <Label htmlFor="very" className="cursor-pointer flex-1">
                        <div className="font-semibold">Very Active</div>
                        <div className="text-sm text-muted-foreground">Exercise 6-7 days/week</div>
                      </Label>
                    </div>
                  </Card>

                  <Card className={`p-4 cursor-pointer transition-colors ${formData.activityLevel === "extra" ? "border-primary" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="extra" id="extra" />
                      <Label htmlFor="extra" className="cursor-pointer flex-1">
                        <div className="font-semibold">Extra Active</div>
                        <div className="text-sm text-muted-foreground">Very hard exercise & physical job</div>
                      </Label>
                    </div>
                  </Card>
                </RadioGroup>
              </div>
            )}

            {/* Step 4: Goals */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">What's your goal?</h2>
                
                <div className="space-y-2">
                  <Label>Primary Goal</Label>
                  <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData("goal", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lose" id="lose" />
                      <Label htmlFor="lose">Lose Weight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maintain" id="maintain" />
                      <Label htmlFor="maintain">Maintain Weight</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gain" id="gain" />
                      <Label htmlFor="gain">Gain Weight/Muscle</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>How many meals do you prefer per day?</Label>
                  <RadioGroup value={formData.mealsPerDay} onValueChange={(value) => updateFormData("mealsPerDay", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="2meals" />
                      <Label htmlFor="2meals">2 meals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="3meals" />
                      <Label htmlFor="3meals">3 meals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="4meals" />
                      <Label htmlFor="4meals">4 meals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="5meals" />
                      <Label htmlFor="5meals">5+ meals</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 5: Dietary Preferences */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Final details</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="dietary">Any dietary preferences or restrictions?</Label>
                  <Textarea
                    id="dietary"
                    placeholder="e.g., Vegetarian, Vegan, Keto, No dairy, etc."
                    value={formData.dietaryPreferences}
                    onChange={(e) => updateFormData("dietaryPreferences", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="health">Any health conditions we should know about? (Optional)</Label>
                  <Textarea
                    id="health"
                    placeholder="e.g., Diabetes, High blood pressure, Allergies, etc."
                    value={formData.healthConditions}
                    onChange={(e) => updateFormData("healthConditions", e.target.value)}
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                {step === totalSteps ? (
                  <>
                    Generate Plan
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
