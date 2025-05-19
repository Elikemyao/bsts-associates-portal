
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  // Featured services for the home page
  const featuredServices: ServiceItem[] = [
    {
      title: "Accountancy",
      description: "Comprehensive accounting services to keep your finances in order and provide valuable insights for decision-making.",
      link: "/services/accountancy"
    },
    {
      title: "Taxation & Tax Planning",
      description: "Strategic tax planning and compliance services to minimize your tax burden while ensuring full regulatory compliance.",
      link: "/services/taxation"
    },
    {
      title: "Business Consultancy",
      description: "Expert advice and guidance to help your business overcome challenges, seize opportunities, and achieve sustainable growth.",
      link: "/services/consultancy"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bsts-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive business solutions to help your organization thrive."
          centered={true}
        />
        
        <span className="text-gray-500 text-sm block text-center mb-12">
          Tailored professional services for businesses of all sizes
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="animation-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
              <FeatureCard
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform duration-300 hover:scale-105">
            <Link to="/services" className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
