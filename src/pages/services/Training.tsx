import React from 'react';
import { BookOpen, ClipboardCheck, Shield, FileText, Contact, Handshake } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const TrainingService = () => {
  return (
    <ServiceLayout
      title="Professional Training"
      subtitle="Comprehensive training programs to enhance skills and knowledge"
      headerImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Financial Training"
          description="Comprehensive training in accounting, finance, and financial management principles."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Training"
          description="Training programs to ensure understanding of regulatory requirements and compliance procedures."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Management"
          description="Training in risk assessment, management, and mitigation strategies."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Software Training"
          description="Hands-on training in accounting and business management software systems."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Business Skills"
          description="Development of essential business and management skills for professionals."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Leadership Development"
          description="Programs designed to enhance leadership and management capabilities."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      <div className="mt-20 animate-fade-in">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Training Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="The training programs provided by BSTS have significantly improved our team's capabilities and efficiency."
            author="Richard Park"
            role="Training Manager"
            company="Corporate Solutions"
          />
          <TestimonialCard
            quote="Their practical approach to training has helped our staff develop valuable skills that we use daily."
            author="Susan Miller"
            role="HR Director"
            company="Global Enterprise Ltd"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TrainingService;
