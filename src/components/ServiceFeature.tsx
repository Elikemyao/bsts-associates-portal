
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  animationDelay?: number;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  icon,
  className,
  imageUrl,
  animationDelay = 0,
}) => {
  const featureRef = useRef<HTMLDivElement>(null);
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
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);
  
  return (
    <Card 
      ref={featureRef}
      className={cn(
        "h-full transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 border-t-4 border-t-bsts-burgundy/80 overflow-hidden",
        className,
        isVisible ? "animate-fadeInUp" : "opacity-0"
      )}
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <CardHeader className={cn(
        "pb-0",
        imageUrl ? "pt-0 px-0" : ""
      )}>
        {imageUrl && (
          <div className="overflow-hidden w-full">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        )}
        <div className={cn(
          imageUrl ? "pt-6 px-6" : ""
        )}>
          {icon && (
            <div className="text-bsts-burgundy mb-4 flex items-center justify-center md:justify-start">
              <div className="bg-bsts-burgundy/10 p-3 rounded-lg transition-all duration-300 hover:bg-bsts-burgundy/20 transform hover:scale-105">
                {icon}
              </div>
            </div>
          )}
          <CardTitle className="text-xl font-semibold text-bsts-navy">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className={imageUrl ? "px-6" : ""}>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceFeature;
