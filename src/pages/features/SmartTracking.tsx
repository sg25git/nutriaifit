import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, ArrowLeft, Camera, Upload, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SmartTracking = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast({
        title: "No Image Selected",
        description: "Please upload a photo of your meal first",
        variant: "destructive"
      });
      return;
    }

    setAnalyzing(true);
    
    setTimeout(() => {
      setAnalyzing(false);
      toast({
        title: "Analysis Complete!",
        description: "Estimated: 450 calories, 25g protein, 45g carbs, 18g fat",
      });
    }, 2000);
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
            <h1 className="text-5xl font-bold mb-4">Smart Meal Tracking</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Snap a photo of your meal and get instant AI-powered nutrition analysis
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Upload & Analyze Your Meal</h2>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img src={selectedImage} alt="Selected meal" className="max-w-md mx-auto rounded-lg shadow-md" />
                    <Button variant="outline" onClick={() => setSelectedImage(null)}>
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium mb-2">Upload a photo of your meal</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports JPG, PNG up to 10MB
                      </p>
                    </div>
                    <Label htmlFor="meal-photo" className="cursor-pointer">
                      <div className="inline-flex">
                        <Button type="button" asChild>
                          <span>Choose File</span>
                        </Button>
                      </div>
                      <Input
                        id="meal-photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </Label>
                  </div>
                )}
              </div>

              <Button onClick={handleAnalyze} className="w-full" size="lg" disabled={analyzing}>
                <Zap className="mr-2 w-5 h-5" />
                {analyzing ? "Analyzing..." : "Analyze with AI"}
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6">
              <Camera className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Photo Recognition</h3>
              <p className="text-muted-foreground">
                Advanced AI identifies food items and portion sizes from photos
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Analysis</h3>
              <p className="text-muted-foreground">
                Get calorie and macro breakdown in seconds
              </p>
            </Card>

            <Card className="p-6">
              <Activity className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                All your meals logged and visualized in beautiful charts
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartTracking;
