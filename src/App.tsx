
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import AccountancyService from "./pages/services/Accountancy";
import TaxationPlanningService from "./pages/services/TaxationPlanning";
import AuditService from "./pages/services/Audit";
import SoftwareService from "./pages/services/Software";
import ConsultancyService from "./pages/services/Consultancy";
import LegalService from "./pages/services/Legal";
import RecruitmentService from "./pages/services/Recruitment";
import TrainingService from "./pages/services/Training";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/blog-post" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Routes */}
            <Route path="/services/accountancy" element={<AccountancyService />} />
            <Route path="/services/taxation" element={<TaxationPlanningService />} />
            <Route path="/services/audit" element={<AuditService />} />
            <Route path="/services/software" element={<SoftwareService />} />
            <Route path="/services/consultancy" element={<ConsultancyService />} />
            <Route path="/services/legal" element={<LegalService />} />
            <Route path="/services/recruitment" element={<RecruitmentService />} />
            <Route path="/services/training" element={<TrainingService />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
