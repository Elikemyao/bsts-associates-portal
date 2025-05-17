import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect and animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set the navbar to visible with a slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigation link handler - close menu and scroll to top
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-white py-4",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
      "transition-all duration-500"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105" onClick={handleNavClick}>
              <img
                src="/lovable-uploads/4a1c8625-6155-4f34-b58d-8efc1c6840af.png"
                alt="BSTS & Associates Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link 
                to="/" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-all duration-300",
                  isActive('/') 
                    ? "text-bsts-navy font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-bsts-navy" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                  isActive('/about') 
                    ? "text-bsts-navy font-semibold" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                  isActive('/services') || location.pathname.startsWith('/services/') 
                    ? "text-bsts-navy font-semibold" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link 
                to="/careers" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                  isActive('/careers') 
                    ? "text-bsts-navy font-semibold" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                Careers
              </Link>
              <Link 
                to="/insights" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                  isActive('/insights') || location.pathname.startsWith('/insights/') 
                    ? "text-bsts-navy font-semibold" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                Insights
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "px-3 py-2 font-medium text-sm rounded-md transition-colors",
                  isActive('/contact') 
                    ? "text-bsts-navy font-semibold" 
                    : "text-gray-600 hover:text-bsts-navy hover:bg-gray-50"
                )}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <Button 
                asChild 
                size="sm" 
                className="bg-bsts-navy hover:bg-bsts-navy/90 ml-3 transition-transform duration-300 hover:scale-105"
              >
                <Link to="/contact" onClick={handleNavClick}>Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-bsts-navy focus:outline-none transition-transform duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 right-0 z-50 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                isActive('/') 
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                isActive('/about') 
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                isActive('/services') || location.pathname.startsWith('/services/')
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                isActive('/careers') 
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              Careers
            </Link>
            <Link 
              to="/insights" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                isActive('/insights') || location.pathname.startsWith('/insights/')
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                isActive('/contact') 
                  ? "bg-gray-50 text-bsts-navy"
                  : "text-gray-700 hover:bg-gray-50 hover:text-bsts-navy"
              )}
              onClick={handleNavClick}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button 
                asChild 
                className="w-full bg-bsts-navy hover:bg-bsts-navy/90 transition-transform duration-300 hover:scale-105"
              >
                <Link 
                  to="/contact"
                  onClick={handleNavClick}
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
