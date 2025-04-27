
import React from 'react';
import { Scale, FileLock, Shield, Gavel, ShieldCheck, FileText } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const LegalService = () => {
  return (
    <ServiceLayout
      title="Legal Compliance"
      subtitle="Comprehensive legal compliance services to protect and guide your business"
      headerImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Regulatory Compliance"
          description="Ensuring your business meets all relevant regulatory requirements and standards."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Data Protection"
          description="Comprehensive GDPR and data protection compliance services to safeguard sensitive information."
          icon={<FileLock className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Assessment"
          description="Thorough legal risk assessment and mitigation strategies for your business operations."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Legal Advisory"
          description="Expert legal guidance on business operations, contracts, and corporate governance."
          icon={<Gavel className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Training"
          description="Comprehensive training programs to ensure your team understands and follows legal requirements."
          icon={<ShieldCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Documentation"
          description="Preparation and review of legal documents and compliance records."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      <div className="mt-20 animate-fade-in">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="BSTS ensures our business stays compliant with ever-changing regulations. Their expertise is invaluable."
            author="David Anderson"
            role="Legal Director"
            company="Enterprise Solutions"
          />
          <TestimonialCard
            quote="Their proactive approach to compliance has helped us avoid potential legal issues and operate with confidence."
            author="Lisa Wong"
            role="Compliance Manager"
            company="International Trade Co"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LegalService;
