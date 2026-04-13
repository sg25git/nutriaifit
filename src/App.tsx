import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import MealPlanning from "./pages/features/MealPlanning";
import SmartTracking from "./pages/features/SmartTracking";
import ProgressPrediction from "./pages/features/ProgressPrediction";
import AIChatbot from "./pages/features/AIChatbot";
import ExpertConsultation from "./pages/features/ExpertConsultation";
import HealthMetrics from "./pages/features/HealthMetrics";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ChatBot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features/meal-planning" element={<MealPlanning />} />
          <Route path="/features/smart-tracking" element={<SmartTracking />} />
          <Route path="/features/progress-prediction" element={<ProgressPrediction />} />
          <Route path="/features/ai-chatbot" element={<AIChatbot />} />
          <Route path="/features/expert-consultation" element={<ExpertConsultation />} />
          <Route path="/features/health-metrics" element={<HealthMetrics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
