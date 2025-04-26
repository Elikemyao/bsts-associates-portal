
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  company,
  className = ""
}) => {
  return (
    <Card className={`h-full card-hover ${className}`}>
      <CardContent className="pt-6">
        <div className="text-3xl text-bsts-gold mb-4">"</div>
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
