
import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface FeatureItem {
  title: string;
  description: string;
  tagline: string;
}

const WhyChooseUsSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Expertise",
      description: "Our team brings decades of specialized experience across multiple industries.",
      tagline: "15+ years of industry leadership"
    },
    {
      title: "Personalized Service",
      description: "We develop tailored solutions that address your unique challenges.",
      tagline: "Custom strategies for your specific needs"
    },
    {
      title: "Comprehensive Solutions",
      description: "Our diverse range of services addresses all your business needs under one roof.",
      tagline: "Integrated services for complete business support"
    },
    {
      title: "Client-Focused",
      description: "We prioritize long-term relationships based on trust and understanding.",
      tagline: "Your success is our success"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Choose BSTS & Associates" 
          subtitle="Our commitment to excellence sets us apart and ensures exceptional results for our clients."
          centered={true}
        />
        
        <span className="text-gray-500 text-sm block text-center mb-8">
          Trusted by hundreds of businesses across Ghana
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animation-on-scroll"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="w-12 h-12 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-bsts-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <span className="text-gray-500 text-sm italic block mt-3">
                {feature.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
