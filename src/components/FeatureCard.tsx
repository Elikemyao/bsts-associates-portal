
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  linkText = "Learn More", 
  className = "" 
}) => {
  return (
    <Card className={`h-full card-hover ${className}`}>
      <CardHeader>
        {icon && <div className="text-bsts-burgundy mb-4">{icon}</div>}
        <CardTitle className="text-xl text-bsts-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      {link && (
        <CardFooter>
          <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
            <Link to={link}>{linkText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
