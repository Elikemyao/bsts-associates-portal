
import React from 'react';
import { FileText, ClipboardCheck, Contract, Shield, Handshake, BookOpen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const RecruitmentService = () => {
  return (
    <ServiceLayout
      title="Recruitment Services"
      subtitle="Professional recruitment solutions to help you build exceptional teams"
      headerImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Talent Acquisition"
          description="Strategic recruitment services to identify and attract top talent for your organization."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Candidate Screening"
          description="Thorough assessment and verification of candidates to ensure the perfect fit."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Contract Staffing"
          description="Flexible staffing solutions for temporary and project-based requirements."
          icon={<Contract className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Background Verification"
          description="Comprehensive background checks to ensure candidate credibility."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Placement Services"
          description="End-to-end recruitment and placement services for permanent positions."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Interview Training"
          description="Professional training for conducting effective interviews and assessments."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      <div className="mt-20 animate-fade-in">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="BSTS's recruitment team found us exceptional talent that perfectly matched our requirements."
            author="Jennifer Lee"
            role="HR Director"
            company="Tech Innovations Inc"
          />
          <TestimonialCard
            quote="Their thorough screening process and professional approach made our hiring process efficient and successful."
            author="Mark Stevens"
            role="Operations Manager"
            company="Global Solutions Ltd"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RecruitmentService;
