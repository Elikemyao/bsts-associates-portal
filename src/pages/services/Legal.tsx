
import React from 'react';
import { Scale, FileLock, Shield, Gavel, ShieldCheck, FileText } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const LegalService = () => {
  return (
    <ServiceLayout
      title="Legal Compliance"
      subtitle="Comprehensive legal compliance services to protect and guide your business"
      headerImage="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBsYXd5ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=1200"
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Navigating the maze of legal requirements is crucial for any business, but it can also be overwhelming. 
          At BSTS, we ensure that your business remains compliant with all local, state, and federal regulations, 
          minimizing the risk of costly penalties and legal issues.
        </p>
        
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=1200" 
              alt="Legal Compliance Services" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in mb-16">
        <ServiceFeature
          title="Regulatory Compliance"
          description="Ensuring your business meets all relevant regulatory requirements and standards, including environmental regulations and health and safety standards."
          icon={<Scale className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Data Protection"
          description="Comprehensive data protection compliance services to safeguard sensitive information and ensure adherence to data privacy laws."
          icon={<FileLock className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Assessment"
          description="Thorough legal risk assessment and mitigation strategies for your business operations to identify and address potential compliance issues."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Legal Advisory"
          description="Expert legal guidance on business operations, contracts, and corporate governance to ensure your business decisions have a solid legal foundation."
          icon={<Gavel className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Compliance Training"
          description="Comprehensive training programs to ensure your team understands and follows legal requirements, reducing the risk of compliance violations."
          icon={<ShieldCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Documentation"
          description="Preparation and review of legal documents and compliance records to ensure they meet all regulatory requirements and protect your business interests."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      {/* Corporate Governance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGJ1c2luZXNzJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=600" 
              alt="Corporate Governance" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Corporate Governance</h2>
          <p className="text-lg text-gray-700 mb-4">
            Corporate governance refers to the framework of rules, practices, and processes by which a company is 
            directed and controlled. Our services ensure that your organization maintains proper governance through:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Board of Directors Compliance - Ensuring that the board acts in the best interests of the company and its shareholders.</li>
            <li>Shareholder Rights - Upholding the rights of shareholders, including voting rights and access to information.</li>
            <li>Ethical Standards - Implementing policies to promote ethical behavior and prevent conflicts of interest.</li>
          </ul>
        </div>
      </div>

      {/* Employment & Tax Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-bsts-gray p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-bsts-navy mb-4">Employment & Labor Laws</h3>
          <p className="text-gray-700 mb-4">
            Businesses must comply with employment and labor laws to protect the rights of employees. We help you navigate:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Wage and Hour Laws - Adhering to minimum wage, overtime pay, and working hour regulations</li>
            <li>Anti-Discrimination Laws - Ensuring equal opportunity in hiring, promotion, and workplace treatment</li>
            <li>Workplace Safety - Complying with safety standards to ensure a safe working environment</li>
          </ul>
        </div>
        
        <div className="bg-bsts-gray p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-bsts-navy mb-4">Tax Compliance</h3>
          <p className="text-gray-700 mb-4">
            Businesses are required to comply with tax laws at various levels. Our services include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Income Tax - Ensuring proper payment of taxes on business profits as required by law</li>
            <li>Sales Tax - Guidance on collecting and remitting sales tax on goods and services sold</li>
            <li>Payroll Tax - Managing the withholding and payment of employment taxes for employees</li>
          </ul>
        </div>
      </div>

      {/* Licensing and Permits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">Licensing & Permits Compliance</h2>
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <p className="text-lg text-gray-700 mb-4">
            Depending on the nature of your business, obtaining and maintaining the necessary licenses and 
            permits is essential. Our team can guide you through:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-bsts-navy mb-2">Business Licenses</h3>
              <p className="text-gray-700">
                We help you obtain the appropriate licenses to legally operate your business in your jurisdiction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bsts-navy mb-2">Special Permits</h3>
              <p className="text-gray-700">
                Assistance in securing permits for specific activities, such as selling regulated products or operating specialized equipment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bsts-navy mb-2">Business Renewal</h3>
              <p className="text-gray-700">
                Support for renewal processes to ensure your business maintains its legal operating status.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bsts-navy mb-2">Re-registration</h3>
              <p className="text-gray-700">
                Step-by-step guidance on how to re-register with the Registrar General Department when necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LegalService;
