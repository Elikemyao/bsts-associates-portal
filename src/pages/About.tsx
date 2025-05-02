
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
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
