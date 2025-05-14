
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bsts-navy text-white relative">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" className="w-full h-12 -mt-12 text-background" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,48L48,42.7C96,37,192,27,288,21.3C384,16,480,16,576,21.3C672,27,768,37,864,37.3C960,37,1056,27,1152,21.3C1248,16,1344,16,1392,16L1440,16L1440,48L1392,48C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48L0,48Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">BSTS & Associates</h3>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lovable-uploads/66e7bfb8-cbca-4da1-8857-6e685d8d2adc.png"
                alt="BSTS & Associates Logo"
                className="h-10 w-auto bg-white/90 p-1 rounded"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional business services that empower organizations to achieve operational excellence and sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Insights</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/accountancy" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Accountancy</span>
                </Link>
              </li>
              <li>
                <Link to="/services/taxation" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Taxation & Planning</span>
                </Link>
              </li>
              <li>
                <Link to="/services/audit" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Audit & Assurance</span>
                </Link>
              </li>
              <li>
                <Link to="/services/software" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Software Advisory</span>
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Consultancy</span>
                </Link>
              </li>
              <li>
                <Link to="/services/legal" className="text-gray-300 hover:text-white transition-colors inline-flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                  <span>Legal Compliance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-4">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-gray-400" />
                <span>
                  Rosslyn Hill, House No. M614/3<br />
                  Madina New Road<br />
                  Madina – Ghana
                </span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <a href="mailto:info@bstsandassociates.com" className="hover:text-white transition-colors">
                  info@bstsandassociates.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <a href="tel:+233542657948" className="hover:text-white transition-colors">
                  +233 (0) 54 265 7948
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0 text-sm">
            <p>© {currentYear} BSTS & Associates. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
