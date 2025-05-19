
import React from 'react';
import { Route, Handshake, ClipboardCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface WorkProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WorkProcessSection: React.FC = () => {
  // Work process steps
  const workProcessSteps: WorkProcessStep[] = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough discussion to understand your business needs, goals, and challenges to create a customized approach.",
      icon: <Route className="h-6 w-6" />
    },
    {
      title: "Strategic Planning",
      description: "Our team develops a tailored strategy addressing your specific requirements with clear timelines and deliverables.",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Implementation & Support",
      description: "We execute the plan efficiently while maintaining open communication and providing ongoing support throughout the process.",
      icon: <Handshake className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bsts-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="How We Work With You" 
          subtitle="Our systematic approach ensures a seamless experience and optimal results for your business."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {workProcessSteps.map((step, index) => (
            <div key={index} className="animation-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-t-bsts-burgundy/80 h-full">
                <div className="w-14 h-14 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-6">
                  <div className="text-bsts-navy">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                <div className="flex items-center mt-6">
                  <div className="bg-bsts-burgundy/10 rounded-full w-8 h-8 flex items-center justify-center text-bsts-burgundy font-bold">
                    {index + 1}
                  </div>
                  {index < workProcessSteps.length - 1 && (
                    <div className="hidden md:block h-0.5 bg-bsts-burgundy/30 flex-grow mx-2"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
