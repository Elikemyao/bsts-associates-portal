
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
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-t-4 border-t-bsts-burgundy/80 overflow-hidden",
      className
    )}>
      <CardHeader className={cn(
        "pb-0",
        imageUrl ? "pt-0 px-0" : ""
      )}>
        {imageUrl && (
          <div className="overflow-hidden w-full">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className={cn(
          imageUrl ? "pt-6 px-6" : ""
        )}>
          {icon && (
            <div className="text-bsts-burgundy mb-4 flex items-center justify-center md:justify-start">
              <div className="bg-bsts-burgundy/10 p-3 rounded-lg">
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
