
import React from 'react';
import { Calculator, FileCheck, Shield, TrendingUp, Scale, AlertCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import TestimonialCard from '@/components/TestimonialCard';

const TaxationPlanningService = () => {
  return (
    <ServiceLayout
      title="Taxation & Tax Planning"
      subtitle="Strategic tax planning and compliance services to optimize your tax position"
    >
      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceFeature
          title="Tax Returns"
          description="Expert handling of personal and business tax returns ensuring accuracy and compliance."
          icon={<FileCheck className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Company Self-Assessment"
          description="Comprehensive support for company self-assessment tax returns and planning."
          icon={<Calculator className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Tax Compliance"
          description="Ensure full compliance with all tax regulations and requirements."
          icon={<Shield className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Capital Gains Tax"
          description="Strategic planning to minimize capital gains tax implications."
          icon={<TrendingUp className="h-10 w-10" />}
        />
        <ServiceFeature
          title="VAT Advisory"
          description="Expert guidance on VAT registration, compliance, and strategic planning."
          icon={<Scale className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Tax Health Check"
          description="Regular reviews to prevent issues and optimize tax efficiency."
          icon={<AlertCircle className="h-10 w-10" />}
        />
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-bsts-navy mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="The tax planning advice from BSTS & Associates has helped us save significantly while staying fully compliant."
            author="David Wilson"
            role="CEO"
            company="Retail Solutions Inc"
          />
          <TestimonialCard
            quote="Their expertise in tax matters has been invaluable for our business operations across multiple jurisdictions."
            author="Lisa Zhang"
            role="Financial Director"
            company="International Trade Co"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TaxationPlanningService;
