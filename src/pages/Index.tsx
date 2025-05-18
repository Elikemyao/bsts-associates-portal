
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ContentSection from '@/components/ContentSection';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Welcome to BSTS & Associates"
        subtitle="Professional business services that empower organizations to achieve operational excellence and sustainable growth."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />
      
      <ContentSection>
        <SectionHeading 
          title="About Our Company" 
          subtitle="BSTS & Associates is a leading business consulting and accounting firm based in Ghana, providing a wide range of professional services."
          animationDelay={100}
        />
        
        <p className="text-gray-600 mb-6">
          Our team of experienced professionals is committed to delivering exceptional service and tailored solutions to meet the unique needs of our clients. We pride ourselves on our expertise, integrity, and dedication to helping businesses of all sizes achieve their goals.
        </p>
        
        <span className="text-gray-500 text-sm italic block mb-8">
          Over 15 years of excellence in professional services
        </span>
        
        <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 group transition-transform duration-300 hover:scale-105">
          <Link to="/about" className="flex items-center">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </ContentSection>
      
      <CTASection
        title="Ready to transform your business?"
        description="Get in touch with our team today to discover how our services can help you achieve your business goals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </PageLayout>
  );
};

export default Index;
