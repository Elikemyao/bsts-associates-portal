
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              We're here to answer your questions and help your business succeed. Reach out to our team of experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form below and one of our experts will get back to you shortly."
              />
              
              <form className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                  >
                    <option value="">Select a Service</option>
                    <option value="accountancy">Accountancy</option>
                    <option value="taxation">Taxation & Tax Planning</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="software">Software Advisory</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="legal">Legal Compliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Contact Information" 
                subtitle="Here's how you can reach us and visit our offices."
              />
              
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-bsts-navy mb-2">Main Office</h3>
                  <address className="not-italic text-gray-600">
                    <p>123 Business Avenue</p>
                    <p>Suite 200</p>
                    <p>Business District, City</p>
                    <p>Postal Code</p>
                  </address>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-bsts-navy mb-2">Contact Details</h3>
                  <div className="text-gray-600">
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Email: info@bstsassociates.com</p>
                    <p>Hours: Monday - Friday, 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md h-80 bg-gray-200">
                  {/* Map would go here - using a placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-bsts-lightblue">
                    <p className="text-bsts-navy">Map Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it - hear from our satisfied clients."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <TestimonialCard
              quote="BSTS & Associates has been a game-changer for our business. Their expertise and personalized approach have helped us achieve remarkable growth."
              author="James Wilson"
              role="CEO"
              company="Innovate Technologies"
            />
            <TestimonialCard
              quote="The team at BSTS & Associates are true professionals. They're responsive, knowledgeable, and genuinely invested in our success."
              author="Lisa Thompson"
              role="CFO"
              company="Global Solutions"
            />
            <TestimonialCard
              quote="We've worked with BSTS & Associates for over 5 years, and they continue to exceed our expectations with their exceptional service."
              author="Mark Johnson"
              role="Managing Director"
              company="Premier Enterprises"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-bsts-lightblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsts-navy mb-4">Stay Connected</h2>
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
    </div>
  );
};

export default Contact;
