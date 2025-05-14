
import React from 'react';
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  linkText = "Learn More", 
  className = "",
  accent = false
}) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 overflow-hidden",
      accent && "border-t-4 border-t-bsts-burgundy/80",
      className
    )}>
      <CardHeader>
        {icon && (
          <div className="text-bsts-burgundy mb-4 flex items-center justify-center md:justify-start">
            <div className="bg-bsts-burgundy/10 p-3 rounded-lg">
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
            <Link to={link} className="flex items-center">
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
