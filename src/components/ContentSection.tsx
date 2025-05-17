
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ContentSectionProps {
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'gray';
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  children, 
  image, 
  imageAlt = "Section image", 
  className,
  imagePosition = 'right',
  background = 'white' 
}) => {
  const isMobile = useIsMobile();
  const bgClass = background === 'gray' ? 'bg-bsts-gray' : 'bg-white';
  
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
        "py-16 md:py-24 overflow-hidden", 
        bgClass, 
        className,
        isVisible ? '' : 'opacity-0'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            isMobile ? 'order-2' : 
            imagePosition === 'left' ? 'order-2' : 'order-1',
            isVisible ? 'animate-fadeInUp' : 'invisible',
            "transition-all duration-700"
          )}>
            {children}
          </div>
          
          {image && (
            <div className={cn(
              "rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-500",
              isMobile ? 'order-1' : 
              imagePosition === 'left' ? 'order-1' : 'order-2',
              isVisible ? (imagePosition === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight') : 'invisible',
              "transition-all duration-700 delay-300"
            )}>
              <img 
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
