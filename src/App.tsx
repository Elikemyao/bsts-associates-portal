import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Insights from '@/pages/Insights';
import Accountancy from '@/pages/services/Accountancy';
import Taxation from '@/pages/services/Taxation';
import Audit from '@/pages/services/Audit';
import Software from '@/pages/services/Software';
import Consultancy from '@/pages/services/Consultancy';
import Legal from '@/pages/services/Legal';
import Recruitment from '@/pages/services/Recruitment';
import Training from '@/pages/services/Training';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Toaster } from "@/components/ui/toaster"
import WhatsAppButton from './components/WhatsAppButton';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTopButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services/accountancy" element={<Accountancy />} />
          <Route path="/services/taxation" element={<Taxation />} />
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
