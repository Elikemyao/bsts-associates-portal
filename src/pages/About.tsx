
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title mb-6">About BSTS & Associates</h1>
            <p className="text-xl text-gray-200">
              We are a leading professional services firm dedicated to helping businesses grow, optimize operations, and achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="BSTS & Associates was founded with a simple mission: to provide businesses with expert guidance and support to help them thrive."
              />
              <p className="text-gray-600 mb-6">
                Since our establishment, we've grown into a comprehensive professional services firm serving clients across various industries. Our team of experts brings decades of combined experience and a commitment to excellence in everything we do.
              </p>
              <p className="text-gray-600">
                We believe in building long-term relationships with our clients, serving as trusted advisors who understand their unique challenges and opportunities. Our personalized approach ensures that we deliver solutions tailored to each client's specific needs and objectives.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="BSTS & Associates Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Mission, Vision & Values" 
            subtitle="What drives us and shapes our approach to serving our clients."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with expert guidance, innovative solutions, and personalized service that drives growth and sustainable success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected professional services firm, recognized for our expertise, integrity, and the transformative impact we have on our clients' businesses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in all we do</li>
                <li>• Integrity and ethical conduct</li>
                <li>• Client-centered approach</li>
                <li>• Innovation and continuous improvement</li>
                <li>• Collaboration and teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Meet Our Leadership Team" 
            subtitle="Our experienced leadership team brings diverse expertise and a shared commitment to excellence."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-bsts-navy">John Smith</h3>
              <p className="text-bsts-burgundy mb-2">Managing Director</p>
              <p className="text-gray-600 text-sm">
                With over 20 years of experience in finance and business advisory, John leads our firm with vision and expertise.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-bsts-navy">Sarah Johnson</h3>
              <p className="text-bsts-burgundy mb-2">Head of Accounting Services</p>
              <p className="text-gray-600 text-sm">
                Sarah brings specialized expertise in accounting and financial reporting to drive value for our clients.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-bsts-navy">Michael Chen</h3>
              <p className="text-bsts-burgundy mb-2">Head of Tax Services</p>
              <p className="text-gray-600 text-sm">
                Michael's deep knowledge of tax regulations helps our clients navigate complexities and optimize tax strategies.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Emma Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-bsts-navy">Emma Rodriguez</h3>
              <p className="text-bsts-burgundy mb-2">Head of Consultancy</p>
              <p className="text-gray-600 text-sm">
                Emma leads our consultancy services with strategic vision and a focus on delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-bsts-lightblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="See how we've helped businesses overcome challenges and achieve their goals."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BSTS & Associates helped us restructure our financial operations during a critical growth phase. Their expertise was invaluable to our success."
              author="David Wilson"
              role="CEO"
              company="Innovate Manufacturing"
            />
            <TestimonialCard
              quote="The team at BSTS & Associates provided us with strategic tax planning that saved us significant costs while ensuring complete compliance."
              author="Jessica Lee"
              role="Finance Director"
              company="Horizon Healthcare"
            />
            <TestimonialCard
              quote="Their consultancy services helped us identify new growth opportunities and optimize our business processes. Highly recommended!"
              author="Robert Thompson"
              role="Managing Director"
              company="Global Logistics"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-bsts-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-bsts-gold mb-2">15+</div>
              <p className="text-xl text-gray-300">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bsts-gold mb-2">500+</div>
              <p className="text-xl text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bsts-gold mb-2">30+</div>
              <p className="text-xl text-gray-300">Industry Experts</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bsts-gold mb-2">10+</div>
              <p className="text-xl text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Partners & Affiliations" 
            subtitle="We collaborate with leading organizations to deliver exceptional value to our clients."
            centered={true}
          />
          
          <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
            {/* Partner logos would go here - using placeholders */}
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 1</div>
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 2</div>
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 3</div>
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 4</div>
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 5</div>
            <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded">Partner 6</div>
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
    </div>
  );
};

export default About;
