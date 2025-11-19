import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, Camera, BarChart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SmartTracking = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
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
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-up">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Photo-Based Tracking</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Effortless
              <span className="text-gradient block mt-2">Smart Tracking</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Track your meals with just a photo. AI analyzes your food and logs calories, macros, and nutrients automatically.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                Start Tracking Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Camera className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tracking Made Simple</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced features that make nutrition tracking effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Camera,
                title: "Photo Recognition",
                description: "Snap a photo of your meal and AI identifies foods, portions, and calculates nutrition instantly."
              },
              {
                icon: BarChart,
                title: "Macro Breakdown",
                description: "See detailed protein, carbs, and fats for every meal with beautiful visualizations."
              },
              {
                icon: Clock,
                title: "Meal History",
                description: "Browse your complete meal history with photos, timestamps, and nutritional data."
              },
              {
                icon: Activity,
                title: "Daily Progress",
                description: "Real-time progress bars showing calories and macros consumed vs. your daily targets."
              },
              {
                icon: BarChart,
                title: "Nutrient Insights",
                description: "Track vitamins, minerals, fiber, and other micronutrients for complete nutritional awareness."
              },
              {
                icon: Camera,
                title: "Quick Logging",
                description: "Manual entry option for times when photos aren't practical. Fast and easy."
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

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Smart Tracking Works</h2>
            <p className="text-lg text-muted-foreground">
              See the difference in your nutrition journey
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Save Time",
                description: "No more searching food databases or manually entering nutrition data. Take a photo and you're done in seconds."
              },
              {
                title: "Stay Accurate",
                description: "AI-powered portion estimation ensures you're tracking the right amounts, leading to better results."
              },
              {
                title: "Build Awareness",
                description: "Seeing what you eat creates accountability and helps you make better choices throughout the day."
              },
              {
                title: "Achieve Goals Faster",
                description: "Studies show people who track their food lose 2x more weight than those who don't. Make it easy with AI."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Start Tracking Smarter Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the easiest way to track nutrition and reach your goals
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmartTracking;
