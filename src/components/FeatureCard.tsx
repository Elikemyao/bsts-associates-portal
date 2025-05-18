
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  className?: string;
  accent?: boolean;
  animationDelay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  linkText = "Learn More", 
  className = "",
  accent = false,
  animationDelay = 0,
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
      className={cn(
        "h-full transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2 overflow-hidden hover:border-bsts-burgundy/30",
        accent && "border-t-4 border-t-bsts-burgundy/80",
        className,
        isVisible ? "animate-fadeInUp" : "opacity-0"
      )}
      style={{ animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' }}
    >
      <CardHeader>
        {icon && (
          <div className="text-bsts-burgundy mb-4 flex items-center justify-center md:justify-start">
            <div className="bg-bsts-burgundy/10 p-3 rounded-lg transition-all duration-300 hover:bg-bsts-burgundy/20">
              {icon}
            </div>
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-bsts-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90 group">
            <Link to={link} className="flex items-center overflow-hidden">
              <span>{linkText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
