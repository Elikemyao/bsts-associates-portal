import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bsts-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">BSTS & Associates</h3>
            <p className="text-gray-300 mb-4">
              Providing professional business services that help clients succeed.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} BSTS & Associates. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/accountancy" className="text-gray-300 hover:text-white transition-colors">Accountancy</Link>
              </li>
              <li>
                <Link to="/services/taxation" className="text-gray-300 hover:text-white transition-colors">Taxation & Tax Planning</Link>
              </li>
              <li>
                <Link to="/services/audit" className="text-gray-300 hover:text-white transition-colors">Audit & Assurance</Link>
              </li>
              <li>
                <Link to="/services/software" className="text-gray-300 hover:text-white transition-colors">Software Advisory</Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-300 hover:text-white transition-colors">Consultancy</Link>
              </li>
              <li>
                <Link to="/services/legal" className="text-gray-300 hover:text-white transition-colors">Legal Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Rosslyn Hill, House No. M614/3</p>
              <p>Madina New Road</p>
              <p>Madina – Ghana</p>
              <p className="mt-4">Email: info@bstsandassociates.com</p>
              <p>Phone: +233 (0) 54 265 7948</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} BSTS & Associates. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
