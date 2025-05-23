
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Insights from '@/pages/Insights';
import Accountancy from '@/pages/services/Accountancy';
import TaxationPlanning from '@/pages/services/TaxationPlanning';
import Audit from '@/pages/services/Audit';
import Software from '@/pages/services/Software';
import Consultancy from '@/pages/services/Consultancy';
import Legal from '@/pages/services/Legal';
import Recruitment from '@/pages/services/Recruitment';
import Training from '@/pages/services/Training';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Toaster } from "@/components/ui/toaster"
import WhatsAppButton from './components/WhatsAppButton';
import BlogPost from '@/pages/BlogPost';

// ScrollToTop component to handle scrolling to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/blog-post" element={<BlogPost />} />
          <Route path="/services/accountancy" element={<Accountancy />} />
          <Route path="/services/taxation" element={<TaxationPlanning />} />
          <Route path="/services/audit" element={<Audit />} />
          <Route path="/services/software" element={<Software />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/legal" element={<Legal />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/services/training" element={<Training />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
