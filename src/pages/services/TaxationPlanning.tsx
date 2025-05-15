
import React from 'react';
import { Calculator, FileCheck, Shield, TrendingUp, Scale, AlertCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import TestimonialCard from '@/components/TestimonialCard';

const TaxationPlanningService = () => {
  return (
    <ServiceLayout
      title="Taxation & Tax Planning"
      subtitle="Strategic tax planning and compliance services to optimize your tax position and ensure peace of mind"
      headerImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          As tax advisers, our objective is to work closely with you to ensure you pay the minimum tax required by law. 
          We will help you to understand the tax implications of your actions, in order that you can plan ahead and 
          conduct your affairs in a tax-efficient way.
        </p>
        
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              alt="Tax Planning Consultation" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceFeature
          title="Tax Returns - Personal and Business"
          description="We provide personal and Business tax planning to a variety of clients. Whether you are a sole trader, Partnership, Company Director, Investor or high-income earner our team ensures your Self-Assessment Tax Return is completed by the necessary deadline."
          icon={<FileCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Corporation Tax"
          description="We help minimize corporate tax exposure and relieve the administrative burden of compliance with current tax legislation. Effective corporate tax planning can result in significant improvements in your bottom line."
          icon={<Calculator className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Company Self-Assessment"
          description="We have the expertise and software to take the headache out of the form filling and compliance aspect of Self-Assessment. We provide practical advice on personal tax positions and the planning opportunities available to you."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Capital Gains Tax"
          description="Disposal of assets can result in significant tax charges; charges which may be reduced with effective per-transaction planning. We can assist you in this planning and advise you on options to minimize your exposure."
          icon={<TrendingUp className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="VAT Advisory"
          description="We can help to ensure that you comply with VAT regulations and that over payments are not made. Our efficient, cost-effective VAT service includes registration assistance, planning advice, and help with completing VAT returns."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Tax Health Check"
          description="Our tax health checks ensure you remain compliant with all relevant legislation and could help you save money on future taxation issues, bringing you peace of mind that your tax affairs are in order."
          icon={<AlertCircle className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      {/* VAT Services in Detail */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">Value Added Tax (VAT) Services</h2>
        <div className="bg-bsts-gray p-8 rounded-xl">
          <p className="text-lg text-gray-700 mb-4">
            Ever changing regulations and the growing demands of GRA mean VAT compliance can be a difficult administrative process. 
            We can help to ensure that you comply with the regulations and that over payments are not made.
          </p>
          <h3 className="text-xl font-semibold text-bsts-navy mb-4">Our VAT services include:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Assistance with VAT registration</li>
            <li>Advice on VAT planning and administration</li>
            <li>Use of the most appropriate scheme</li>
            <li>VAT control and reconciliation</li>
            <li>Help with completing VAT returns</li>
            <li>Planning to minimize future problems with Ghana Revenue Authority</li>
          </ul>
        </div>
      </div>

      {/* Tax Planning Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Our Tax Planning Approach</h2>
          <p className="text-lg text-gray-700 mb-4">
            Everyone who is subject to taxation needs professional advice and support if they are to optimize their tax position. 
            Our specialist tax team can provide you with year-round advice on all aspects of personal taxation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We understand that the increased reporting obligations, investigation policies on the part of tax authorities, 
            and harsher penalties for non-compliance mean that your time and resources can be taken up with tax administration.
          </p>
          <p className="text-lg text-gray-700">
            Our approach is to work proactively with you to understand your goals and develop tax strategies that align with your 
            business and personal objectives, while ensuring full compliance with all applicable tax laws.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
              alt="Tax Consultation" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Client Testimonial */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="BSTS & Associates has transformed our approach to tax planning. Their expertise has helped us significantly reduce our tax liability while ensuring full compliance."
            author="James Wilson"
            role="CEO"
            company="Wilson Enterprises"
          />
          <TestimonialCard 
            quote="The tax health check service provided by BSTS gave us peace of mind and identified several areas where we could improve our tax efficiency."
            author="Sarah Johnson"
            role="Finance Director"
            company="Johnson & Partners"
          />
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TaxationPlanningService;
