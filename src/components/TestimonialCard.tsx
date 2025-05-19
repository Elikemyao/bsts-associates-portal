
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  avatarSrc 
}) => {
  // Get author initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md hover-lift">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="text-4xl text-bsts-burgundy/20 absolute top-0 left-0">"</div>
            <p className="text-gray-600 italic pt-4 pb-2 pl-4 relative z-10">
              {quote}
            </p>
            <div className="text-4xl text-bsts-burgundy/20 absolute bottom-0 right-4">"</div>
          </div>
          
          <div className="flex items-center pt-2">
            <Avatar className="h-10 w-10 border-2 border-bsts-navy/10">
              <AvatarImage src={avatarSrc} />
              <AvatarFallback className="bg-bsts-navy/10 text-bsts-navy">
                {getInitials(author)}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="text-sm font-medium text-bsts-navy">{author}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
