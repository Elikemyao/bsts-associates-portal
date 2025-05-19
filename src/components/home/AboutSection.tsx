
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animation-on-scroll">
            <SectionHeading 
              title="Who We Are" 
              subtitle="BSTS & Associates is a leading accounting and business advisory firm in Ghana dedicated to helping businesses succeed."
            />
            
            <p className="text-gray-600 mb-6">
              Founded in 2008, we provide a comprehensive range of professional services to businesses of all sizes across various industries. Our team of experienced professionals is committed to delivering exceptional service and tailored solutions to meet the unique needs of our clients.
            </p>
            
            <p className="text-gray-600 mb-6">
              We pride ourselves on our expertise, integrity, and dedication to helping businesses achieve their goals. Our approach is client-focused, ensuring that we understand your specific challenges and opportunities to provide solutions that drive success.
            </p>
            
            <span className="text-gray-500 text-sm italic block mb-8">
              Over 15 years of excellence in professional services
            </span>
            
            <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90 transition-transform duration-300 hover:scale-105">
              <Link to="/about" className="flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl animation-on-scroll transform transition-all hover:scale-[1.02] duration-500">
            <AspectRatio ratio={4/3}>
              <img 
                src="/lovable-uploads/66e7bfb8-cbca-4da1-8857-6e685d8d2adc.png" 
                alt="BSTS Professional Team" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
