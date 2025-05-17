
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  pattern?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
  pattern = true
}) => {
  // Intersection Observer for scroll animations
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className={cn(
        "bg-bsts-navy py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
        className,
        isVisible ? '' : 'opacity-0'
      )}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M0 20L20 0M20 40L40 20" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      )}
      
      <div className="container mx-auto relative">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'animate-fadeInUp' : 'invisible'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{title}</h2>
          <p className={`text-gray-300 mb-8 leading-relaxed text-balance ${isVisible ? 'animate-fadeInUp' : 'invisible'}`} style={{animationDelay: '200ms'}}>{description}</p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? 'animate-fadeInUp' : 'invisible'}`} style={{animationDelay: '400ms'}}>
            <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 group transition-transform duration-300 hover:scale-105">
              <Link to={primaryButtonLink} className="flex items-center">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group transition-transform duration-300 hover:scale-105">
                <Link to={secondaryButtonLink} className="flex items-center">
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
