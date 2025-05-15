
import React from 'react';
import { Handshake, Landmark, ClipboardPen, Shield, Contact, BookOpen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ConsultancyService = () => {
  return (
    <ServiceLayout
      title="Business Consultancy"
      subtitle="Strategic business consulting to drive growth and optimize performance"
      headerImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200"
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Your professional and personal goals are central to our consulting services; we take the time to get to know you better 
          so we can offer the best advice. Our management consultancy service can review your credit control, stock control, 
          budgeting and financial reporting systems and allow you to take full control of these key areas of your business.
        </p>
        
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
              alt="Business Consultancy Meeting" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in mb-16">
        <ServiceFeature
          title="Business Planning & Forecasting"
          description="Comprehensive business planning and cash flow forecasting to provide a roadmap for your business's future, helping you make informed decisions based on data."
          icon={<Handshake className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Financial Advisory"
          description="Expert financial guidance to optimize your business's financial performance, structure, and strategy for long-term success and growth."
          icon={<Landmark className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Business Scaling"
          description="Strategic support for scaling your business effectively, ensuring you have both the capability and capacity to achieve sustainable growth."
          icon={<ClipboardPen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Risk Management"
          description="Comprehensive risk assessment and management strategies to identify potential threats and implement effective mitigation solutions."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Budgets & Targets"
          description="Development and implementation of realistic budgets and targets to guide your business toward its financial goals and objectives."
          icon={<Contact className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Financial Institution Liaison"
          description="Expert support when liaising with banks and other financial institutions to secure funding, negotiate terms, or resolve issues."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      {/* Business Planning Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Business Planning & Cash Flows</h2>
          <p className="text-lg text-gray-700 mb-4">
            Both planning and forecasting are basic and most important managerial activities. They are closely related to each other. 
            Planning gives an answer to how, when, and what to be done. It is a goal-oriented activity which designs a future course 
            of action and provides a future environment of the organization.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            As the future is uncertain, planners are forced to make some assumptions. This assumption related to the future is called 
            forecasting which is based on facts, past trends, economic conditions, and information.
          </p>
          <p className="text-lg text-gray-700">
            Our expert consultants work with you to develop comprehensive business plans and cash flow forecasts that provide 
            a solid foundation for making strategic decisions and navigating the challenges of business growth.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
              alt="Business Planning Session" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Business Scaling Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative overflow-hidden rounded-xl shadow-lg order-2 lg:order-1">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
              alt="Business Scaling Team" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Business Scaling</h2>
          <p className="text-lg text-gray-700 mb-4">
            Competition in the business world today is fierce and entrepreneurs must do everything they can in order 
            to achieve success. Scaling a business has never been an easy task.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Many organizations had to learn through tough lessons, nonetheless, our experience and wisdom allow us today 
            to execute scalability techniques to give your business the Capability and Capacity it needs to grow.
          </p>
          <p className="text-lg text-gray-700">
            Our consultants work with you to develop strategies for sustainable growth, whether you're looking to expand 
            into new markets, increase your customer base, or diversify your products and services.
          </p>
        </div>
      </div>
      
      {/* Financial Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">Financial Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bsts-gray p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-bsts-navy mb-4">Liaising With Banks & Institutions</h3>
            <p className="text-gray-700">
              We offer support when liaising with banks and other financial institutions. Drawing on our wealth of experience we can 
              support our clients through this often-daunting experience, helping you to negotiate favorable terms, secure funding, 
              and build strong relationships with financial partners.
            </p>
          </div>
          
          <div className="bg-bsts-gray p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-bsts-navy mb-4">Business Renewal & Re-registration</h3>
            <p className="text-gray-700">
              We are here to provide your business with a step by step guideline on how to renewal and re-register with Registrar 
              General Department. Our team will guide you through the process, ensuring all documentation is properly prepared and 
              submitted, minimizing delays and complications.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ConsultancyService;
