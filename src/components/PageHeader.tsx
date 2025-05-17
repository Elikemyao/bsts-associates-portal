
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  gradient?: 'navy-to-burgundy' | 'burgundy-to-navy' | 'navy';
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  className,
  gradient = 'navy-to-burgundy'
}) => {
  const gradientClasses = {
    'navy-to-burgundy': 'bg-gradient-to-r from-bsts-navy to-bsts-burgundy',
    'burgundy-to-navy': 'bg-gradient-to-r from-bsts-burgundy to-bsts-navy',
    'navy': 'bg-bsts-navy'
  };

  return (
    <section className={cn(
      "relative py-16 md:py-24 overflow-hidden text-white", 
      gradientClasses[gradient],
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-bsts-navy/95 to-bsts-burgundy/80 z-10"></div>
      
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={backgroundImage}
            alt="Header background" 
            className="w-full h-full object-cover object-center animate-backgroundZoom opacity-30"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl invisible animate-fadeInUp" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
          <h1 className="hero-title mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-200 leading-relaxed invisible animate-fadeInUp" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
