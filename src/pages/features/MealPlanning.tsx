import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Brain, Utensils, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MealPlanning = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">NutriAI</span>
          </Link>
          <Link to="/auth">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-up">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Intelligent
              <span className="text-gradient block mt-2">Meal Planning</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Let AI create personalized meal plans tailored to your goals, preferences, and dietary needs. Say goodbye to meal planning stress.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                Start Planning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Utensils className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Smart Meal Planning Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to plan perfect meals every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "AI-Generated Plans",
                description: "Advanced AI analyzes your goals, preferences, and nutritional needs to create optimal meal plans automatically."
              },
              {
                icon: Calendar,
                title: "Weekly Scheduling",
                description: "Get complete weekly meal plans with breakfast, lunch, dinner, and snacks perfectly balanced for your targets."
              },
              {
                icon: Utensils,
                title: "Diverse Recipes",
                description: "Access thousands of recipes from various cuisines, all calculated with precise nutritional information."
              },
              {
                icon: CheckCircle,
                title: "Dietary Preferences",
                description: "Customize for any diet: keto, vegan, paleo, gluten-free, and more. Your preferences are always respected."
              },
              {
                icon: Brain,
                title: "Macro Balancing",
                description: "Automatically calculated macros (protein, carbs, fats) aligned perfectly with your fitness goals."
              },
              {
                icon: Calendar,
                title: "Shopping Lists",
                description: "Automatically generated shopping lists with all ingredients you need for the week."
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover-scale">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get your personalized meal plan in 3 simple steps
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Tell Us About Yourself",
                description: "Input your age, weight, height, activity level, and dietary preferences. Our AI needs to know you to serve you best."
              },
              {
                step: "2",
                title: "Set Your Goals",
                description: "Whether you want to lose weight, gain muscle, or maintain health, tell us your target and timeline."
              },
              {
                step: "3",
                title: "Get Your Plan",
                description: "Receive a complete weekly meal plan with recipes, nutrition info, and shopping lists. Update anytime as your needs change."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Eat Smarter?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands who've transformed their nutrition with AI-powered meal planning
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Create Your First Meal Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MealPlanning;
