import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Brain, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AIChatbot = () => {
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
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">24/7 AI Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Your Personal
              <span className="text-gradient block mt-2">AI Nutrition Coach</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Get instant answers to nutrition questions, meal suggestions, fitness advice, and personalized guidance anytime, anywhere.
            </p>
            
            <Link to="/auth">
              <Button size="lg" className="animate-fade-up shadow-lg" style={{ animationDelay: '0.3s' }}>
                Chat With AI Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-glow border-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <MessageSquare className="w-20 h-20 text-primary/20 animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your AI Coach Can Help With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask anything about nutrition, fitness, and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Nutrition Questions",
                description: "Ask about calories, macros, vitamins, supplements, or any nutrition topic. Get evidence-based answers instantly."
              },
              {
                icon: MessageSquare,
                title: "Meal Suggestions",
                description: "Need ideas for dinner? Ask for recipes based on what's in your fridge or your dietary preferences."
              },
              {
                icon: Sparkles,
                title: "Food Substitutions",
                description: "Find healthy alternatives to your favorite foods or ingredients you don't have on hand."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Your AI coach never sleeps. Get help at midnight or dawn, wherever you are in your journey."
              },
              {
                icon: Brain,
                title: "Personalized Advice",
                description: "Responses are tailored to your goals, dietary restrictions, and current health profile."
              },
              {
                icon: MessageSquare,
                title: "Plan Explanations",
                description: "Don't understand why a meal is suggested? Ask the AI to explain the nutritional reasoning behind it."
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

      {/* Example Questions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Example Questions You Can Ask</h2>
            <p className="text-lg text-muted-foreground">
              Here's what our AI can help you with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "What's a good pre-workout meal for morning exercise?",
              "How much protein should I eat per day?",
              "Can you suggest a low-carb dinner recipe?",
              "What are healthy snacks under 200 calories?",
              "Is intermittent fasting right for my goals?",
              "How can I increase my fiber intake?",
              "What vitamins should I take as a vegetarian?",
              "Why am I not losing weight on my current plan?",
              "Best foods for muscle recovery after workouts?",
              "How do I calculate my daily calorie needs?",
              "What's the difference between good and bad fats?",
              "Can you explain the benefits of meal prepping?"
            ].map((question, i) => (
              <Card key={i} className="p-6 hover-scale cursor-pointer">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{question}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Start Chatting With Your AI Coach</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get instant, personalized nutrition advice whenever you need it
          </p>
          <Link to="/auth">
            <Button size="lg" className="shadow-lg">
              Try AI Coach Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;
