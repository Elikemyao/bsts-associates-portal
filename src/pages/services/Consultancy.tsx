
import React from 'react';
import { Handshake, Landmark, ClipboardPen, Shield, Contract, BookOpen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const ConsultancyService = () => {
  return (
    <ServiceLayout
      title="Business Consultancy"
      subtitle="Strategic business consulting to drive growth and optimize performance"
      headerImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Strategic Planning"
          description="Development of comprehensive business strategies to achieve long-term growth and success."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Financial Advisory"
          description="Expert financial guidance to optimize your business's financial performance and structure."
          icon={<Landmark className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Process Optimization"
          description="Analysis and improvement of business processes to enhance efficiency and productivity."
          icon={<ClipboardPen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Management"
          description="Comprehensive risk assessment and management strategies to protect your business."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Merger & Acquisition"
          description="Expert guidance through mergers, acquisitions, and business restructuring processes."
          icon={<Contract className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Business Training"
          description="Specialized training programs to enhance your team's business management capabilities."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      <div className="mt-20 animate-fade-in">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="BSTS's strategic consulting helped us double our market share in just 18 months."
            author="Michael Chang"
            role="CEO"
            company="Innovation Corp"
          />
          <TestimonialCard
            quote="Their process optimization consulting transformed our operations and significantly improved our bottom line."
            author="Patricia Rodriguez"
            role="Operations Director"
            company="Global Services Ltd"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ConsultancyService;
