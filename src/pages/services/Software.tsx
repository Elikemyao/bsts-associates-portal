
import React from 'react';
import { FileText, Shield, BookOpen, ClipboardCheck, BookLock, FilePen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const SoftwareService = () => {
  return (
    <ServiceLayout
      title="Software Advisory"
      subtitle="Expert guidance on business software solutions to enhance your operational efficiency"
      headerImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Software Selection"
          description="Expert guidance in choosing the right accounting and business management software for your specific needs."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Implementation Support"
          description="Comprehensive assistance in implementing and integrating new software systems into your business operations."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Training Programs"
          description="Customized training sessions to ensure your team can effectively use new software systems."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="System Optimization"
          description="Analysis and optimization of existing software systems to improve efficiency and productivity."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Data Security"
          description="Ensuring your software systems meet the highest standards of data security and protection."
          icon={<BookLock className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Custom Solutions"
          description="Development of tailored software solutions to address unique business requirements."
          icon={<FilePen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      <div className="mt-20 animate-fade-in">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Their software advisory services helped us choose and implement the perfect system for our needs."
            author="James Wilson"
            role="IT Director"
            company="Digital Solutions Co."
          />
          <TestimonialCard
            quote="The training and support provided by BSTS made our software transition smooth and efficient."
            author="Sarah Martinez"
            role="Operations Manager"
            company="Retail Group Ltd"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SoftwareService;
