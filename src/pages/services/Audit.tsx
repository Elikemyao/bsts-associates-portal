
import React from 'react';
import { ClipboardCheck, Shield, FileText, Scale, Contact, ShieldCheck } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';

const AuditService = () => {
  return (
    <ServiceLayout
      title="Audit & Assurance"
      subtitle="Comprehensive audit services to ensure accuracy, compliance, and transparency"
      headerImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        <ServiceFeature
          title="External Audit"
          description="Independent examination of financial statements to provide assurance on their fairness and compliance with accounting standards."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Internal Audit"
          description="Evaluation of internal controls, risk management, and governance processes to improve operational efficiency."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Audit"
          description="Specialized audits to ensure adherence to regulatory requirements and industry standards."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Assessment"
          description="Comprehensive evaluation of business risks and control environments to protect your organization."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Due Diligence"
          description="Thorough investigation and analysis for mergers, acquisitions, and major business decisions."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Fraud Prevention"
          description="Advanced fraud detection and prevention strategies to protect your business assets."
          icon={<ShieldCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>
    </ServiceLayout>
  );
};

export default AuditService;
