
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerImage?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  children,
  className,
  headerImage
}) => {
  return (
    <div className={cn("min-h-screen animate-fade-in", className)}>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-bsts-navy to-bsts-burgundy text-white py-20 md:py-28 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {headerImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={headerImage} alt="header background" className="w-full h-full object-cover animate-zoom-out" />
          </div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl fade-up">
            <h1 className="hero-title mb-6 text-balance">{title}</h1>
            {subtitle && (
              <p className="text-xl text-gray-200 leading-relaxed text-balance">{subtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-bsts-gray py-16 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
          <SectionHeading
            title="Ready to Get Started?"
            subtitle="Contact us today to learn more about how we can help your business succeed."
            centered
          />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
