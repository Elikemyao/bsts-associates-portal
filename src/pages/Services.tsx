
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';

const Services = () => {
  return (
    <PageLayout>
      {/* Header Section */}
      <PageHeader 
        title="Our Services"
        subtitle="BSTS & Associates offers a comprehensive range of professional services designed to help your business thrive."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Core Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Comprehensive Business Solutions" 
            subtitle="Our diverse range of services is designed to meet all your business needs under one roof."
            centered={true}
          />
          
          <span className="text-gray-500 text-sm block text-center mb-8">
            Tailored professional services for businesses of all sizes
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Accountancy */}
            <div className="animation-on-scroll">
              <FeatureCard
                title="Accountancy"
                description="Comprehensive accounting services to keep your finances in order and provide valuable insights for decision-making."
                link="/services/accountancy"
              />
            </div>
            
            {/* Taxation & Tax Planning */}
            <div className="animation-on-scroll" style={{animationDelay: '100ms'}}>
              <FeatureCard
                title="Taxation & Tax Planning"
                description="Strategic tax planning and compliance services to minimize your tax burden while ensuring full regulatory compliance."
                link="/services/taxation"
              />
            </div>
            
            {/* Audit & Assurance */}
            <div className="animation-on-scroll" style={{animationDelay: '200ms'}}>
              <FeatureCard
                title="Audit & Assurance"
                description="Independent audit and assurance services to enhance credibility and provide confidence in your financial information."
                link="/services/audit"
              />
            </div>
            
            {/* Software Advisory */}
            <div className="animation-on-scroll">
              <FeatureCard
                title="Software Advisory"
                description="Expert guidance on selecting, implementing, and optimizing business software solutions to improve efficiency."
                link="/services/software"
              />
              <div className="mt-2 px-4">
                <span className="text-gray-500 text-sm italic">Modern solutions for modern businesses</span>
              </div>
            </div>
            
            {/* Consultancy */}
            <div className="animation-on-scroll" style={{animationDelay: '100ms'}}>
              <FeatureCard
                title="Consultancy"
                description="Strategic business consultancy to help you plan, grow, and overcome challenges effectively."
                link="/services/consultancy"
              />
              <div className="mt-2 px-4">
                <span className="text-gray-500 text-sm italic">Expert guidance when you need it most</span>
              </div>
            </div>
            
            {/* Legal Compliance */}
            <div className="animation-on-scroll" style={{animationDelay: '200ms'}}>
              <FeatureCard
                title="Legal Compliance"
                description="Comprehensive legal compliance services to ensure your business operations meet all regulatory requirements."
                link="/services/legal"
              />
              <div className="mt-2 px-4">
                <span className="text-gray-500 text-sm italic">Stay compliant with changing regulations</span>
              </div>
            </div>
            
            {/* Recruitment */}
            <div className="animation-on-scroll">
              <FeatureCard
                title="Recruitment"
                description="Specialized recruitment services to help you find and retain top talent for your organization."
                link="/services/recruitment"
              />
            </div>
            
            {/* Training */}
            <div className="animation-on-scroll" style={{animationDelay: '100ms'}}>
              <FeatureCard
                title="Training"
                description="Professional training programs to enhance skills and knowledge in accounting, finance, and business management."
                link="/services/training"
              />
            </div>
            
            {/* Custom Solutions */}
            <div className="bg-bsts-lightblue p-8 rounded-lg flex flex-col items-center justify-center text-center animation-on-scroll" style={{animationDelay: '200ms'}}>
              <h3 className="text-xl font-semibold mb-4 text-bsts-navy">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">
                We understand that every business is unique. Contact us for a tailored solution that meets your specific needs.
              </p>
              <span className="text-gray-500 text-sm italic mb-4 block">
                Personalized consulting for your unique challenges
              </span>
              <Button asChild className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform duration-300 hover:scale-105">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animation-on-scroll">
              <SectionHeading 
                title="Why Choose BSTS & Associates" 
                subtitle="Our commitment to excellence sets us apart and ensures exceptional results for our clients."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-bsts-navy rounded-full flex items-center justify-center text-white flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Expertise & Experience</h3>
                    <p className="text-gray-600">
                      Our team brings decades of specialized experience across multiple industries, ensuring informed guidance and solutions.
                    </p>
                    <span className="text-gray-500 text-sm italic block mt-2">15+ years of industry leadership</span>
                  </div>
                </div>
                
                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-bsts-navy rounded-full flex items-center justify-center text-white flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Personalized Approach</h3>
                    <p className="text-gray-600">
                      We develop tailored solutions that address your unique challenges and align with your specific goals.
                    </p>
                    <span className="text-gray-500 text-sm italic block mt-2">Customized service for each client</span>
                  </div>
                </div>
                
                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-bsts-navy rounded-full flex items-center justify-center text-white flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Comprehensive Solutions</h3>
                    <p className="text-gray-600">
                      Our diverse range of services allows us to address all your business needs under one roof, providing integrated solutions.
                    </p>
                    <span className="text-gray-500 text-sm italic block mt-2">One-stop shop for all business services</span>
                  </div>
                </div>
                
                <div className="flex gap-4 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-bsts-navy rounded-full flex items-center justify-center text-white flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Client-Centered Focus</h3>
                    <p className="text-gray-600">
                      We prioritize building long-term relationships based on trust, communication, and a deep understanding of your needs.
                    </p>
                    <span className="text-gray-500 text-sm italic block mt-2">Your success is our success</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl animation-on-scroll transform transition-all hover:scale-[1.02] duration-500">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="BSTS & Associates Services" 
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
              <div className="p-4 bg-white text-center">
                <span className="text-gray-500 text-sm italic">Our dedicated team of professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact BSTS & Associates today to discuss your business needs and discover how our services can help you succeed."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </PageLayout>
  );
};

export default Services;
