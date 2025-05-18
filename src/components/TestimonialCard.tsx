
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
  animationDelay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  company,
  className = "",
  animationDelay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <Card 
      ref={cardRef}
      className={`h-full transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${className} ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <CardContent className="pt-6">
        <div className="text-3xl text-bsts-gold mb-4 transition-all duration-300 transform hover:scale-110">"</div>
        <p className="italic text-gray-700 mb-4">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold text-bsts-navy">{author}</p>
        {(role || company) && (
          <p className="text-gray-600 text-sm">{role}{role && company && ', '}{company}</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
