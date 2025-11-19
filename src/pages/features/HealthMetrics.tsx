import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, BarChart, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HealthMetrics = () => {
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
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Complete Health Tracking</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Track Every
              <span className="text-gradient block mt-2">Health Metric</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Monitor weight, body measurements, BMI, body fat percentage, and more. Understand your complete health picture with beautiful dashboards.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                Start Tracking
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <BarChart className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Metrics You Can Track</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health monitoring in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Activity,
                title: "Weight Tracking",
                description: "Log your weight daily or weekly. See trends over time with beautiful graphs and charts."
              },
              {
                icon: BarChart,
                title: "Body Measurements",
                description: "Track chest, waist, hips, arms, and thighs. Monitor inches lost alongside pounds."
              },
              {
                icon: Heart,
                title: "BMI Calculator",
                description: "Automatically calculated BMI based on your height and weight with health category indicators."
              },
              {
                icon: TrendingUp,
                title: "Body Fat %",
                description: "Track body composition changes. Muscle gain and fat loss shown separately."
              },
              {
                icon: Activity,
                title: "BMR & TDEE",
                description: "Know your Basal Metabolic Rate and Total Daily Energy Expenditure updated in real-time."
              },
              {
                icon: BarChart,
                title: "Progress Photos",
                description: "Upload weekly photos to visually track your transformation alongside the numbers."
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

      {/* Dashboard Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beautiful Health Dashboards</h2>
            <p className="text-lg text-muted-foreground">
              See your data come to life with stunning visualizations
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Interactive Graphs",
                description: "Touch and zoom into your data. See daily, weekly, monthly, or yearly views of all your metrics with smooth animations."
              },
              {
                title: "Trend Analysis",
                description: "AI identifies patterns in your data and highlights trends. Know if you're progressing, plateauing, or regressing."
              },
              {
                title: "Milestone Celebrations",
                description: "Get congratulated when you hit weight goals, measurement targets, or streak achievements with visual rewards."
              },
              {
                title: "Export & Share",
                description: "Download your health reports as PDFs. Share progress with your doctor, trainer, or dietitian easily."
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
          <h2 className="text-4xl font-bold mb-6">Start Tracking Your Health Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the complete picture of your health with comprehensive metric tracking
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Begin Tracking Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthMetrics;
