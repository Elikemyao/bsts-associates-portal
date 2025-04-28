
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/66e7bfb8-cbca-4da1-8857-6e685d8d2adc.png"
                alt="BSTS & Associates Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">Services</Link>
              <Link to="/careers" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">Careers</Link>
              <Link to="/insights" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">Insights</Link>
              <Link to="/contact" className="text-gray-700 hover:text-bsts-navy px-3 py-2 font-medium">Contact</Link>
              <Button asChild size="sm" className="bg-bsts-navy hover:bg-bsts-navy/90 ml-3">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-bsts-navy focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/insights" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-bsts-navy font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-bsts-navy hover:bg-bsts-navy/90">
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
