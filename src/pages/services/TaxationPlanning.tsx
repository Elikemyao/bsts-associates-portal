
import React from 'react';
import { Calculator, FileCheck, Shield, TrendingUp, Scale, AlertCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';

const TaxationPlanningService = () => {
  return (
    <ServiceLayout
      title="Taxation & Tax Planning"
      subtitle="Strategic tax planning and compliance services to optimize your tax position and ensure peace of mind"
      headerImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    >
      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceFeature
          title="Tax Returns"
          description="Professional handling of personal and business tax returns with meticulous attention to detail. We ensure accurate and timely submissions while maximizing legitimate deductions."
          icon={<FileCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Company Self-Assessment"
          description="Comprehensive support for company self-assessment tax returns. Our experts guide you through the process, ensuring compliance while identifying opportunities for tax efficiency."
          icon={<Calculator className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Tax Compliance"
          description="Stay compliant with all tax regulations and requirements. Our team keeps up with the latest changes in tax law to ensure your business meets all obligations."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Capital Gains Tax"
          description="Expert strategies to minimize capital gains tax implications. We help you understand and plan for tax events related to asset disposals and investments."
          icon={<TrendingUp className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="VAT Advisory"
          description="Comprehensive VAT guidance including registration, compliance, and strategic planning. Our experts help you navigate complex VAT regulations efficiently."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Tax Health Check"
          description="Regular reviews to prevent issues and optimize tax efficiency. Our proactive approach helps identify potential problems before they become serious concerns."
          icon={<AlertCircle className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=300"
        />
      </div>
    </ServiceLayout>
  );
};

export default TaxationPlanningService;
