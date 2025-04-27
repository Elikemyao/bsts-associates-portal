
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

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
      <section className="bg-gradient-to-r from-bsts-navy to-bsts-burgundy text-white py-16 md:py-24 relative overflow-hidden">
        {headerImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={headerImage} alt="header background" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="hero-title mb-6">{title}</h1>
            {subtitle && (
              <p className="text-xl text-gray-200">{subtitle}</p>
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
      <section className="bg-bsts-gray py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <SectionHeading
            title="Ready to Get Started?"
            subtitle="Contact us today to learn more about how we can help your business succeed."
            centered
          />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
