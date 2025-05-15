
import React from 'react';
import { BookOpen, ClipboardCheck, Shield, FileText, Contact, Handshake } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';

const TrainingService = () => {
  return (
    <ServiceLayout
      title="Professional Training"
      subtitle="Comprehensive training programs to enhance skills and knowledge"
      headerImage="https://images.unsplash.com/photo-1526648696889-58bc17224fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="Financial Training"
          description="Comprehensive training in accounting, finance, and financial management principles."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1573165067541-4cd6d9837f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Training"
          description="Training programs to ensure understanding of regulatory requirements and compliance procedures."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Management"
          description="Training in risk assessment, management, and mitigation strategies."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMGJ1c2luZXNzJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Software Training"
          description="Hands-on training in accounting and business management software systems."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Business Skills"
          description="Development of essential business and management skills for professionals."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1573496359142-b8475f6cca6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Leadership Development"
          description="Programs designed to enhance leadership and management capabilities."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=300"
        />
      </div>
    </ServiceLayout>
  );
};

export default TrainingService;
