import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, TrendingUp, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">NutriAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's your nutrition overview for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Daily Calories</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">1,450</p>
              <p className="text-sm text-muted-foreground">of 2,000 kcal target</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Protein</h3>
              <Activity className="w-5 h-5 text-success" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">85g</p>
              <p className="text-sm text-muted-foreground">of 120g target</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Streak</h3>
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold">7 days</p>
              <p className="text-sm text-muted-foreground">Keep it up!</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today's Meal Plan</h2>
            <div className="space-y-4">
              {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                <div key={meal} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-medium">{meal}</h3>
                    <p className="text-sm text-muted-foreground">AI recommended</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
