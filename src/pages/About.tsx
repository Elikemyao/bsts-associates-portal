
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Briefcase, Shield, Users } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';

const About = () => {
  return (
    <PageLayout>
      {/* Header Section */}
      <PageHeader 
        title="About BSTS & Associates"
        subtitle="We Help You Capitalize on Opportunities, Plan Better And Grow Faster."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animation-on-scroll">
              <SectionHeading 
                title="About Us" 
                subtitle="Choosing the right accountant to work with can be daunting but is a decision that is incredibly important for your business."
              />
              <p className="text-gray-600 mb-6">
                At BSTS & Associates, as locally based accountants, we pride ourselves on our professional, friendly and timely approach. We can help you save money, minimize your tax bill and give you back time to focus on the important job of growing your business.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-all duration-300 hover:scale-105">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animation-on-scroll transform transition-all hover:scale-[1.02] duration-500">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/66e7bfb8-cbca-4da1-8857-6e685d8d2adc.png" 
                  alt="Professional BSTS Consultant Team" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promises Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Promises" 
            subtitle="What you can expect when working with BSTS & Associates"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* First Promise */}
            <Card className="border-t-4 border-t-bsts-burgundy shadow-lg hover:shadow-xl transition-all duration-300 animation-on-scroll">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-bsts-burgundy/10 p-3 rounded-full">
                    <Users className="h-8 w-8 text-bsts-burgundy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Our First Promise</h3>
                    <p className="text-gray-600 mb-6">
                      Available, Accessible and Approachable to meet all your needs. We take a proactive approach and aim to save you time and money and this means being available, accessible and approachable to suit your needs.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Provide an efficient and personalized service which focuses on you and your needs.</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Being available when you need us and this includes outside the 8.00am to 5.00pm office hours including Saturdays.</span>
                      </li>
                    </ul>
                    <p className="mt-6 text-gray-600">
                      As a business targeted towards small and medium sized businesses, we are able to provide a very personal service. You will talk to the same person who will gain a better understanding of your business and give you tailored advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Second Promise */}
            <Card className="border-t-4 border-t-bsts-navy shadow-lg hover:shadow-xl transition-all duration-300 animation-on-scroll" style={{animationDelay: '200ms'}}>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-bsts-navy/10 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-bsts-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Our Second Promise</h3>
                    <p className="text-gray-600 mb-6">
                      We save you time and money – we're experts in minimizing tax.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Tax regimes are becoming more complex with increased emphasis being put on the taxpayer's individual responsibilities. Everybody who is subject to taxation will need professional advice and support if they are to optimize their tax position and ensure they meet all the compliance requirements.
                    </p>
                    <p className="text-gray-600">
                      We can help you minimize your business and personal tax bills, making the most of reliefs and allowances and avoiding the penalty pitfalls of missed deadlines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animation-on-scroll">
              <SectionHeading 
                title="Who We Are" 
                subtitle="ABOUT BSTS & ASSOCIATES (CHARTERED ACCOUNTANTS)"
              />
              <p className="text-gray-600 mb-6">
                BSTS is a consulting firm with focus on providing accessible financial planning with financial solutions (accountancy, assurance, taxation and business advisory services) to profit and non-profit enterprising entities. BSTS is a registered accounting practicing firm licensed by the Institute of Chartered Accountants (Ghana).
              </p>
              <p className="text-gray-600 mb-6">
                BSTS is founded and promoted by a team of professionals with the right combination of skills and experience to bring value to the assignment. BSTS has worked to the highest standards in providing its clients with comprehensive Audit, Accounting and Consulting services protecting their interest.
              </p>
              <p className="text-gray-600 mb-6">
                With the technological expertise of the younger generation and the knowledge of our professionally educated and experienced accountants we developed and improved our working methods and internal procedures upholding our one and only target — providing the most comprehensive and efficient service for the needs of our clients.
              </p>
              <p className="text-gray-600">
                We always show flexibility and apply individual approach to each client, optimizing the efficiency of their accounting, finances, and tax obligations according to the nature of their business.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl animation-on-scroll transform transition-all hover:scale-[1.02] duration-500">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/7795640d-dd2a-4fb4-928d-35b22673ec6a.png" 
                  alt="BSTS Professional Team" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="What drives us and shapes our approach to serving our clients."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* Mission */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full animation-on-scroll">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="bg-bsts-navy text-white p-4 rounded-md inline-block mb-6 self-start">
                    <h3 className="font-semibold text-xl">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our mission is to ensure a deep understanding of our clients' activities in order to offer each of them an optimal solution to improve their business. Our philosophy is mainly focused on customer satisfaction, based on uncompromising integrity.
                  </p>
                  <p className="text-gray-600 mt-auto">
                    Professional integrity is the foundation of our firm, defined and reinforced through our commitment and adherence to our core values.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Vision */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full animation-on-scroll" style={{animationDelay: '200ms'}}>
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="bg-bsts-burgundy text-white p-4 rounded-md inline-block mb-6 self-start">
                    <h3 className="font-semibold text-xl">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    BSTS & ASSOCIATES provides services with the finest value and quality. We want to be recognised as a professional service organisation that establishes an ultimate balance in providing outstanding client service and the financial success of the firm. 
                  </p>
                  <p className="text-gray-600 mt-4">
                    This will be accomplished by creating a culture of pride and passion that will enable us to continue attracting and retaining the best and brightest professionals, who will be rewarded, recognized and respected for their contribution to a firm that is founded on shared core values.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-bsts-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animation-on-scroll transform transition-all hover:scale-105 duration-300">
              <div className="text-5xl font-bold text-bsts-gold mb-2">15+</div>
              <p className="text-xl text-gray-300">Years in Business</p>
            </div>
            <div className="animation-on-scroll transform transition-all hover:scale-105 duration-300" style={{animationDelay: '100ms'}}>
              <div className="text-5xl font-bold text-bsts-gold mb-2">500+</div>
              <p className="text-xl text-gray-300">Happy Clients</p>
            </div>
            <div className="animation-on-scroll transform transition-all hover:scale-105 duration-300" style={{animationDelay: '200ms'}}>
              <div className="text-5xl font-bold text-bsts-gold mb-2">30+</div>
              <p className="text-xl text-gray-300">Industry Experts</p>
            </div>
            <div className="animation-on-scroll transform transition-all hover:scale-105 duration-300" style={{animationDelay: '300ms'}}>
              <div className="text-5xl font-bold text-bsts-gold mb-2">10+</div>
              <p className="text-xl text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Us?"
        description="Contact BSTS & Associates today to schedule a consultation and discover how we can help your business succeed."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
      />
    </PageLayout>
  );
};

export default About;
