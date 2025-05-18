
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  animationDelay?: number;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  animationDelay = 0
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={headingRef}
      className={cn(
        `${centered ? 'text-center' : ''} mb-8 md:mb-12`,
        className,
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      )}
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <h2 className={cn(
        "section-title text-bsts-navy text-balance",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-gray-600 text-lg mt-4 max-w-3xl leading-relaxed text-balance",
          centered && "mx-auto",
          isVisible ? 'animate-fadeInUp' : 'opacity-0',
          subtitleClassName
        )}
        style={{ animationDelay: `${animationDelay + 200}ms`, animationFillMode: 'forwards' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
