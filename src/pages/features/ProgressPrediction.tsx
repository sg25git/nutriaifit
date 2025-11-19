import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, LineChart, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressPrediction = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
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
              <LineChart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Predictions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Predict Your
              <span className="text-gradient block mt-2">Progress</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              See your future results before they happen. AI analyzes your data to predict weight changes, goal timelines, and optimal adjustments.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                See Your Future
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Prediction Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven insights to keep you on track
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Weight Forecasting",
                description: "See predicted weight changes week by week based on your current habits and calorie intake."
              },
              {
                icon: Target,
                title: "Goal Timeline",
                description: "Know exactly when you'll reach your target weight with AI-calculated milestone dates."
              },
              {
                icon: LineChart,
                title: "Progress Graphs",
                description: "Beautiful visualizations showing actual vs predicted progress with trend analysis."
              },
              {
                icon: Zap,
                title: "Smart Adjustments",
                description: "AI suggests calorie and macro adjustments if you're off track to reach your goals faster."
              },
              {
                icon: TrendingUp,
                title: "Weekly Reports",
                description: "Comprehensive weekly reports comparing predictions to actual results with insights."
              },
              {
                icon: Target,
                title: "Scenario Planning",
                description: "See how different eating patterns would affect your timeline and adjust accordingly."
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

      {/* How Predictions Work */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How AI Predicts Your Progress</h2>
            <p className="text-lg text-muted-foreground">
              Advanced algorithms analyze multiple data points
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Historical Data Analysis",
                description: "AI examines your past tracking data, identifying patterns in your eating habits, weight changes, and adherence to plans."
              },
              {
                title: "Metabolic Calculations",
                description: "Using your BMR, TDEE, and activity level, the system calculates your exact calorie needs and deficit/surplus."
              },
              {
                title: "Machine Learning Models",
                description: "Advanced algorithms trained on thousands of users predict how your body will respond based on similar profiles."
              },
              {
                title: "Real-Time Adjustments",
                description: "As you log new data, predictions update automatically to stay accurate and reflect your current trajectory."
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
          <h2 className="text-4xl font-bold mb-6">Know Your Future Results</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop guessing. Let AI show you exactly where you're headed.
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Get Your Predictions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProgressPrediction;
