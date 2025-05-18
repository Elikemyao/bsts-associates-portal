
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isInViewport } = useScrollAnimation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add a small delay to ensure the animation is visible
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Check if elements are in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Select all elements with the animation-on-scroll class
    if (pageRef.current) {
      const animatedElements = pageRef.current.querySelectorAll('.animation-on-scroll');
      animatedElements.forEach(el => {
        observer.observe(el);
      });
    }
    
    return () => {
      clearTimeout(timer);
      if (pageRef.current) {
        const animatedElements = pageRef.current.querySelectorAll('.animation-on-scroll');
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  return (
    <div 
      ref={pageRef}
      className={cn(
        "min-h-screen transition-opacity duration-1000", 
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
