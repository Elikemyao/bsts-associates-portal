
import React from 'react';
import { FileText, Shield, BookOpen, ClipboardCheck, BookLock, FilePen } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceFeature from '@/components/ServiceFeature';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const SoftwareService = () => {
  return (
    <ServiceLayout
      title="Software Advisory & Training"
      subtitle="Expert guidance on business software solutions to enhance your operational efficiency"
      headerImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=1200"
    >
      {/* Introduction */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Information technology (IT) is one of the key resources available to every business to achieve its short and long-term objectives. 
          Using the knowledge gained from our own systems and those designed for other clients, our in-house IT team are able to advise 
          on IT related matters with first-hand experience. We can install software, provide training, and help you to obtain 
          the best from your chosen system.
        </p>
        
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=1200" 
              alt="Software Advisory Team" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in mb-16">
        <ServiceFeature
          title="Software Selection"
          description="We help you choose the right accounting and business management software for your specific needs, ensuring it satisfies current requirements and supports future growth."
          icon={<FileText className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Implementation Support"
          description="Comprehensive assistance in implementing and integrating new software systems into your business operations, ensuring a smooth transition."
          icon={<Shield className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Training Programs"
          description="Customized training sessions to ensure your team can effectively use new software systems, maximizing your return on investment."
          icon={<BookOpen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="System Optimization"
          description="Analysis and optimization of existing software systems to improve efficiency and productivity in your daily operations."
          icon={<ClipboardCheck className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Data Security"
          description="Ensuring your software systems meet the highest standards of data security and protection to safeguard your valuable business information."
          icon={<BookLock className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=300"
        />
        <ServiceFeature
          title="Payroll Systems"
          description="Help you take control by computerizing your accounts system, saving hours of hard work and leaving you more time to deal with important areas of the business."
          icon={<FilePen className="h-10 w-10" />}
          imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=300"
        />
      </div>

      {/* Software Solutions */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-bsts-navy mb-6">Our Software Solutions</h2>
        <p className="text-lg text-gray-700 mb-6">
          We've developed and work with various software solutions to meet your specific business needs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Tally ERP</h3>
              <p className="text-sm text-gray-600">Complete business management software</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Quick Books</h3>
              <p className="text-sm text-gray-600">Accounting software for small businesses</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">HR Management</h3>
              <p className="text-sm text-gray-600">Complete HR management solution</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">POS Management</h3>
              <p className="text-sm text-gray-600">Point of sale system</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Hospital Management</h3>
              <p className="text-sm text-gray-600">Healthcare facility management system</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Pharmacy Management</h3>
              <p className="text-sm text-gray-600">Complete pharmacy solution</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Property Management</h3>
              <p className="text-sm text-gray-600">Real estate and property system</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-bsts-burgundy/80">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-bsts-navy mb-2">Inventory Management</h3>
              <p className="text-sm text-gray-600">Stock control and management</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Implementation and Training */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-bsts-navy mb-6">Installation & Training</h2>
          <p className="text-lg text-gray-700 mb-4">
            We offer sophisticated and powerful suite of software that can transform your business. As such, installation, 
            configuration and continuous training are crucial components toward a successful implementation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            No two companies are alike, and our product specialists will help you get the most out of your business, 
            with an implementation and training plan tailored to your unique situation.
          </p>
          <p className="text-lg text-gray-700">
            Our management reporting software gives you the insights you need to plan for the future of your business—all 
            without having to abandon Excel.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=600" 
              alt="Software Training Session" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SoftwareService;
