
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <SectionHeading 
          title="Page Not Found" 
          subtitle="Oops! The page you're looking for seems to have taken a detour." 
          centered 
        />
        
        <div className="flex justify-center mb-8">
          <AlertTriangle className="text-bsts-navy h-24 w-24" strokeWidth={1.5} />
        </div>
        
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="default">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
