import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Video, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertConsultation = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Certified Professionals</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Expert
              <span className="text-gradient block mt-2">Dietitian Consultations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Book video calls with certified dietitians and nutritionists. Get personalized advice, plan reviews, and professional guidance for your health goals.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Video className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional support to accelerate your progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Video Consultations",
                description: "Face-to-face video calls with certified dietitians from the comfort of your home."
              },
              {
                icon: Award,
                title: "Certified Experts",
                description: "All our dietitians are licensed professionals with years of experience and proven results."
              },
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description: "Book appointments at times that work for you. Evening and weekend slots available."
              },
              {
                icon: Users,
                title: "Personalized Plans",
                description: "Get custom meal plans, recommendations, and strategies tailored specifically to you."
              },
              {
                icon: Video,
                title: "Follow-Up Sessions",
                description: "Schedule regular check-ins to track progress, adjust plans, and stay accountable."
              },
              {
                icon: Award,
                title: "Professional Reviews",
                description: "Have your AI-generated plans reviewed and approved by real nutrition experts."
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
              Simple process to connect with an expert
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Choose Your Dietitian",
                description: "Browse profiles of our certified dietitians. See their specialties, experience, and client reviews to find the perfect match."
              },
              {
                step: "2",
                title: "Book Your Session",
                description: "Select an available time slot that fits your schedule. Pay securely online and receive instant confirmation."
              },
              {
                step: "3",
                title: "Join Video Call",
                description: "At your appointment time, join the video call directly from your dashboard. Discuss goals, review your data, and get expert advice."
              },
              {
                step: "4",
                title: "Get Your Plan",
                description: "Receive a personalized action plan, custom meal suggestions, and follow-up resources. Schedule your next session to track progress."
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
          <h2 className="text-4xl font-bold mb-6">Ready to Talk to an Expert?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your first consultation and get professional guidance on your nutrition journey
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Schedule Your Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExpertConsultation;
