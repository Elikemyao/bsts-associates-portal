
import React from 'react';
import { ClipboardCheck, Shield, FileText, Scale, Contact, ShieldCheck } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AuditService = () => {
  return (
    <ServiceLayout
      title="Audit & Assurance"
      subtitle="Comprehensive audit services to ensure accuracy, compliance, and transparency"
      headerImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          We provide both internal and statutory audit services. The process of auditing is highly complex, and there is no time 
          that is more important for a business than its ability to rely on a professional audit service they can trust. 
          Our audits aim to help your organization reach its objectives, identify potential risk factors, and enhance 
          your business operations.
        </p>
        
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
              alt="Audit Professional at Work" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in mb-16">
        <ServiceFeature
          title="External Audit"
          description="Independent examination of financial statements to provide assurance on their fairness and compliance with accounting standards."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Internal Audit"
          description="Evaluation of internal controls, risk management, and governance processes to improve operational efficiency and help your organization achieve its objectives."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Audit"
          description="Specialized audits to ensure adherence to regulatory requirements and industry standards, helping you avoid penalties and maintain your reputation."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Assessment"
          description="Comprehensive evaluation of business risks and control environments to protect your organization and implement effective risk mitigation strategies."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Due Diligence"
          description="Thorough investigation and analysis for mergers, acquisitions, and major business decisions, ensuring you have all the information needed to make strategic choices."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Fraud Prevention"
          description="Advanced fraud detection and prevention strategies to protect your business assets and ensure integrity throughout your operations."
          icon={<ShieldCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      {/* Our Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600" 
              alt="Audit Team Working" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Our Audit Approach</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our audits are conducted in-house and not outsourced. We believe in providing a personalized service 
            that addresses your specific needs and helps you achieve your business goals.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Internal audits are conducted objectively and independently. It is a consultancy service created to 
            support and provide businesses the financial assurance they need. The governance of the organization 
            aims to help identify and overcome challenges including effective financial management.
          </p>
          <p className="text-lg text-gray-700">
            A statutory audit conducted by us involves the examination of an entity's financial statements and 
            accompanying disclosures completed by an auditor to ensure compliance with all regulatory requirements.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">Benefits of Our Audit Services</h2>
        <div className="bg-bsts-gray p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-bsts-navy mb-3">Enhanced Credibility</h3>
              <p className="text-gray-700">
                Audited financial statements provide greater credibility to stakeholders, investors, and lenders.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-bsts-navy mb-3">Risk Management</h3>
              <p className="text-gray-700">
                Identify potential risks before they become issues and develop strategies to mitigate them.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-bsts-navy mb-3">Improved Controls</h3>
              <p className="text-gray-700">
                Strengthen internal controls and processes to enhance operational efficiency.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-bsts-navy mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Ensure your business adheres to all relevant laws and regulations, avoiding penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AuditService;
