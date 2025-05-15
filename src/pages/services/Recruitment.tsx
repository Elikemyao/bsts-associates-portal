
import React from 'react';
import { FileText, ClipboardCheck, Contact, Shield, Handshake, BookOpen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';

const RecruitmentService = () => {
  return (
    <ServiceLayout
      title="Recruitment Services"
      subtitle="Professional recruitment solutions to help you build exceptional teams"
      headerImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Talent Acquisition"
          description="Strategic recruitment services to identify and attract top talent for your organization."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Candidate Screening"
          description="Thorough assessment and verification of candidates to ensure the perfect fit."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Contract Staffing"
          description="Flexible staffing solutions for temporary and project-based requirements."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Background Verification"
          description="Comprehensive background checks to ensure candidate credibility."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1573496359142-b8475f6cca6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Placement Services"
          description="End-to-end recruitment and placement services for permanent positions."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Interview Training"
          description="Professional training for conducting effective interviews and assessments."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
      </div>
    </ServiceLayout>
  );
};

export default RecruitmentService;
