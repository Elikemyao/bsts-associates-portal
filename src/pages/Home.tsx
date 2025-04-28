import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsts-navy to-bsts-burgundy text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="hero-title mb-6">Professional Business Services Tailored For Your Success</h1>
              <p className="text-xl mb-8 text-gray-200">
                BSTS & Associates provides comprehensive business solutions to help your organization thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/0beccccf-af81-4949-a914-2d6303096556.png"
                  alt="Virtual Reality Business Innovation" 
                  className="w-full h-full object-cover animate-[scale-in_1s_ease-out,fade-in_1.5s_ease-out] transform hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Services" 
            subtitle="BSTS & Associates offers a wide range of professional services designed to meet the needs of businesses at every stage of growth."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Accountancy"
              description="Comprehensive accounting services including payroll management, bookkeeping, and financial reporting to keep your business finances in order."
              link="/services/accountancy"
            />
            <FeatureCard
              title="Taxation & Tax Planning"
              description="Strategic tax planning and compliance services to help minimize your tax burden while ensuring full compliance with regulatory requirements."
              link="/services/taxation"
            />
            <FeatureCard
              title="Audit & Assurance"
              description="Independent audit and assurance services to provide confidence in your financial information and enhance business credibility."
              link="/services/audit"
            />
            <FeatureCard
              title="Software Advisory"
              description="Expert guidance on software selection, implementation, and training to optimize your business operations and efficiency."
              link="/services/software"
            />
            <FeatureCard
              title="Consultancy"
              description="Strategic business consultancy services to help your organization plan, grow, and overcome challenges effectively."
              link="/services/consultancy"
            />
            <FeatureCard
              title="Legal Compliance"
              description="Comprehensive legal compliance services to ensure your business operations meet all regulatory requirements."
              link="/services/legal"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-bsts-navy hover:bg-bsts-navy/90">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Choose BSTS & Associates" 
            subtitle="We pride ourselves on delivering exceptional service and tangible results for all our clients."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-bsts-lightblue rounded-full">
                <span className="text-bsts-navy text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Industry Expertise</h3>
              <p className="text-gray-600">Our team brings decades of specialized experience across multiple industries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-bsts-lightblue rounded-full">
                <span className="text-bsts-navy text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Personalized Service</h3>
              <p className="text-gray-600">We tailor our solutions to meet your specific business needs and objectives.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-bsts-lightblue rounded-full">
                <span className="text-bsts-navy text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Trusted Advisor</h3>
              <p className="text-gray-600">We build long-term relationships based on trust, integrity, and results.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-bsts-lightblue rounded-full">
                <span className="text-bsts-navy text-2xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Cost-Effective</h3>
              <p className="text-gray-600">Our services deliver exceptional value and tangible ROI for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Work With You" 
            subtitle="Our systematic approach ensures a seamless experience and optimal results for your business."
            centered={true}
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-bsts-lightblue -translate-x-1/2"></div>
            
            <div className="space-y-16 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right pb-8 md:pb-0">
                  <div className="bg-bsts-navy text-white inline-block px-4 py-1 rounded mb-4">Step 1</div>
                  <h3 className="text-2xl font-semibold mb-3 text-bsts-navy">Initial Consultation</h3>
                  <p className="text-gray-600">We begin with a thorough consultation to understand your business, challenges, and objectives.</p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-12 h-12 bg-bsts-burgundy rounded-full flex items-center justify-center text-white font-bold relative z-10">1</div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:flex justify-center order-1">
                  <div className="w-12 h-12 bg-bsts-burgundy rounded-full flex items-center justify-center text-white font-bold relative z-10">2</div>
                </div>
                <div className="pb-8 md:pb-0 order-2">
                  <div className="bg-bsts-navy text-white inline-block px-4 py-1 rounded mb-4">Step 2</div>
                  <h3 className="text-2xl font-semibold mb-3 text-bsts-navy">Needs Assessment</h3>
                  <p className="text-gray-600">Our experts analyze your specific needs and develop a tailored strategy to address them effectively.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="md:text-right pb-8 md:pb-0">
                  <div className="bg-bsts-navy text-white inline-block px-4 py-1 rounded mb-4">Step 3</div>
                  <h3 className="text-2xl font-semibold mb-3 text-bsts-navy">Implementation</h3>
                  <p className="text-gray-600">We implement the agreed solutions with precision and attention to detail, keeping you informed throughout.</p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-12 h-12 bg-bsts-burgundy rounded-full flex items-center justify-center text-white font-bold relative z-10">3</div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:flex justify-center order-1">
                  <div className="w-12 h-12 bg-bsts-burgundy rounded-full flex items-center justify-center text-white font-bold relative z-10">4</div>
                </div>
                <div className="order-2">
                  <div className="bg-bsts-navy text-white inline-block px-4 py-1 rounded mb-4">Step 4</div>
                  <h3 className="text-2xl font-semibold mb-3 text-bsts-navy">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous support and regular reviews to ensure long-term success and adaptation to changing needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-bsts-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Impact By The Numbers" 
            subtitle="We've helped businesses of all sizes achieve significant growth and success."
            centered={true}
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bsts-gold mb-2">500+</div>
              <p className="text-xl text-gray-300">Clients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bsts-gold mb-2">15+</div>
              <p className="text-xl text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bsts-gold mb-2">95%</div>
              <p className="text-xl text-gray-300">Client Retention</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-bsts-gold mb-2">30+</div>
              <p className="text-xl text-gray-300">Expert Consultants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it - hear from some of our satisfied clients."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BSTS & Associates transformed our accounting processes, saving us time and money while providing valuable insights for our business growth."
              author="Sarah Johnson"
              role="CFO"
              company="Tech Innovations Ltd."
            />
            <TestimonialCard
              quote="Their tax planning services have been invaluable to our business. Their expertise has helped us navigate complex regulations while maximizing our tax efficiency."
              author="Michael Chen"
              role="CEO"
              company="Global Trade Inc."
            />
            <TestimonialCard
              quote="The consultancy team at BSTS & Associates helped us scale our operations effectively. Their strategic guidance has been instrumental in our success."
              author="Emma Rodriguez"
              role="Operations Director"
              company="Creative Solutions"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-bsts-lightblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsts-navy mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest industry insights, expert tips, and company updates.</p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                  required
                />
                <Button className="bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Contact us today to schedule a consultation and discover how BSTS & Associates can help your business succeed."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default Home;
