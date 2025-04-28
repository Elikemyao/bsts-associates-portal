
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Upload, Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';

const Contact = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      cv: null,
      coverLetter: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

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
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+233 (0) XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position You're Applying For</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Accountant" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload CV</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                onChange(file);
                              }}
                              {...field}
                              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-bsts-navy file:text-white hover:file:bg-bsts-navy/90"
                            />
                            <Upload className="h-5 w-5 text-gray-500" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your cover letter here..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Contact Information" 
                subtitle="Here's how you can reach us and visit our offices."
              />
              
              <div className="mt-8 space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-bsts-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-bsts-navy mb-2">Office Location</h3>
                    <address className="not-italic text-gray-600">
                      <p>Rosslyn Hill, House No. M614/3</p>
                      <p>Madina New Road</p>
                      <p>Madina – Ghana</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-bsts-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-bsts-navy mb-2">Phone</h3>
                    <p className="text-gray-600">+233 (0) 54 265 7948</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-bsts-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-bsts-navy mb-2">Email</h3>
                    <p className="text-gray-600">info@bstsandassociates.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-bsts-navy shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-bsts-navy mb-2">Open Hours</h3>
                    <p className="text-gray-600">Monday to Friday</p>
                    <p className="text-gray-600">8:00 AM to 5:00 PM</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md h-80 bg-gray-200 mt-8">
                  {/* Map placeholder */}
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
