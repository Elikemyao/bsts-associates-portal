
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  imageUrl?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  icon,
  className,
  imageUrl
}) => {
  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1", className)}>
      <CardHeader>
        {icon && <div className="text-bsts-burgundy mb-4 animate-fade-in">{icon}</div>}
        <CardTitle className="text-xl text-bsts-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {imageUrl && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceFeature;
