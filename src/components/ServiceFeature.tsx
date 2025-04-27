
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  icon,
  className
}) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        {icon && <div className="text-bsts-burgundy mb-4">{icon}</div>}
        <CardTitle className="text-xl text-bsts-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceFeature;
