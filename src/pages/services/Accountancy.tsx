
import React from 'react';
import { FileText, Calculator, PieChart, TrendingUp, Shield, ClipboardCheck } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';

const AccountancyService = () => {
  return (
    <ServiceLayout
      title="Accountancy Services"
      subtitle="Comprehensive accountancy solutions tailored to your business needs"
    >
      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceFeature
          title="Payroll Management"
          description="Efficient and accurate payroll processing services that ensure timely payments and compliance with regulations."
          icon={<Calculator className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Bookkeeping Services"
          description="Precise bookkeeping that maintains accurate records of all your financial transactions."
          icon={<FileText className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Financial Reporting"
          description="Detailed financial reports that provide insights for informed decision-making."
          icon={<PieChart className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Financial Forecasting"
          description="Expert projections and analysis to help plan your business's financial future."
          icon={<TrendingUp className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Audit Preparation"
          description="Comprehensive support in preparing for audits to ensure smooth proceedings."
          icon={<Shield className="h-10 w-10" />}
        />
        <ServiceFeature
          title="Compliance Reporting"
          description="Stay compliant with all regulatory requirements through our detailed reporting services."
          icon={<ClipboardCheck className="h-10 w-10" />}
        />
      </div>
    </ServiceLayout>
  );
};

export default AccountancyService;
