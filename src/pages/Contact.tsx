
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PageLayout from '@/components/PageLayout';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters long" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("fa5YfL3PCRKqnCRAi");
  }, []);

  // Scroll animation for form
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'website@bstsandassociates.com',
      };

      await emailjs.send(
        'service_zox075j',  // Your actual service ID
        'template_8olpcu9', // Your actual template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully",
        description: "Thanks for reaching out. We'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const newsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const emailInput = formElement.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast({
        title: "Newsletter Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      emailInput.value = '';
    } else {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <AspectRatio ratio={21/9}>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=2000"
              alt="Business team meeting"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animation-on-scroll">
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
            <div 
              ref={formRef}
              className={`transform transition-all duration-700 ${isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form below and one of our experts will get back to you shortly."
              />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform hover:scale-105 duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information with Map */}
            <div className="space-y-8">
              <SectionHeading 
                title="Contact Information" 
                subtitle="Here's how you can reach us and visit our offices."
              />
              
              <div className="rounded-lg overflow-hidden shadow-lg mb-8 animation-on-scroll">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=80&w=800"
                    alt="BSTS Office Building"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <div className="mt-8 space-y-8 animation-on-scroll">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-bsts-lightblue relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <AspectRatio ratio={21/9}>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=2000"
              alt="Abstract business pattern"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animation-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-bsts-navy mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest industry insights, expert tips, and company updates.</p>
            
            <form onSubmit={newsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bsts-navy"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform hover:scale-105 duration-300"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
