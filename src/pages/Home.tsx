
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import PageLayout from '@/components/PageLayout';

const Home = () => {
  const { isInViewport } = useScrollAnimation();
  
  // Featured services for the home page
  const featuredServices = [
    {
      title: "Accountancy",
      description: "Comprehensive accounting services to keep your finances in order and provide valuable insights for decision-making.",
      link: "/services/accountancy"
    },
    {
      title: "Taxation & Tax Planning",
      description: "Strategic tax planning and compliance services to minimize your tax burden while ensuring full regulatory compliance.",
      link: "/services/taxation"
    },
    {
      title: "Business Consultancy",
      description: "Expert advice and guidance to help your business overcome challenges, seize opportunities, and achieve sustainable growth.",
      link: "/services/consultancy"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "BSTS & Associates transformed our financial operations. Their expertise and dedication have been invaluable to our business growth.",
      author: "Sarah Johnson",
      role: "CEO, Tech Innovations Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Working with BSTS has been a game-changer for our tax planning. They've saved us thousands while ensuring complete compliance.",
      author: "Michael Osei",
      role: "Finance Director, Global Ventures",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The team at BSTS provides exceptional service. Their attention to detail and industry knowledge is second to none.",
      author: "Ama Darko",
      role: "Owner, Darko Enterprises",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <AspectRatio ratio={21/9}>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
              alt="Business background"
              className="object-cover w-full h-full animate-backgroundZoom"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animation-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Helping Businesses Grow and Thrive</h1>
            <p className="text-xl text-gray-200 mb-8">
              BSTS & Associates provides expert accounting, taxation, and business advisory services to help your business succeed in today's competitive market.
            </p>
            <span className="text-gray-300 text-sm block mb-8 italic">
              Professional services tailored to your unique business needs since 2008
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform duration-300 hover:scale-105">
                <Link to="/services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-transform duration-300 hover:scale-105">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animation-on-scroll">
              <SectionHeading 
                title="Who We Are" 
                subtitle="BSTS & Associates is a leading accounting and business advisory firm in Ghana dedicated to helping businesses succeed."
              />
              
              <p className="text-gray-600 mb-6">
                Founded in 2008, we provide a comprehensive range of professional services to businesses of all sizes across various industries. Our team of experienced professionals is committed to delivering exceptional service and tailored solutions to meet the unique needs of our clients.
              </p>
              
              <p className="text-gray-600 mb-6">
                We pride ourselves on our expertise, integrity, and dedication to helping businesses achieve their goals. Our approach is client-focused, ensuring that we understand your specific challenges and opportunities to provide solutions that drive success.
              </p>
              
              <span className="text-gray-500 text-sm italic block mb-8">
                Over 15 years of excellence in professional services
              </span>
              
              <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90 transition-transform duration-300 hover:scale-105">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl animation-on-scroll transform transition-all hover:scale-[1.02] duration-500">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/66e7bfb8-cbca-4da1-8857-6e685d8d2adc.png" 
                  alt="BSTS Professional Team" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive business solutions to help your organization thrive."
            centered={true}
          />
          
          <span className="text-gray-500 text-sm block text-center mb-12">
            Tailored professional services for businesses of all sizes
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="animation-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <FeatureCard
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transition-transform duration-300 hover:scale-105">
              <Link to="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Choose BSTS & Associates" 
            subtitle="Our commitment to excellence sets us apart and ensures exceptional results for our clients."
            centered={true}
          />
          
          <span className="text-gray-500 text-sm block text-center mb-8">
            Trusted by hundreds of businesses across Ghana
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animation-on-scroll">
              <div className="w-12 h-12 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-bsts-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of specialized experience across multiple industries.
              </p>
              <span className="text-gray-500 text-sm italic block mt-3">
                15+ years of industry leadership
              </span>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animation-on-scroll" style={{animationDelay: '100ms'}}>
              <div className="w-12 h-12 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-bsts-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Personalized Service</h3>
              <p className="text-gray-600">
                We develop tailored solutions that address your unique challenges.
              </p>
              <span className="text-gray-500 text-sm italic block mt-3">
                Custom strategies for your specific needs
              </span>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animation-on-scroll" style={{animationDelay: '200ms'}}>
              <div className="w-12 h-12 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-bsts-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                Our diverse range of services addresses all your business needs under one roof.
              </p>
              <span className="text-gray-500 text-sm italic block mt-3">
                Integrated services for complete business support
              </span>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animation-on-scroll" style={{animationDelay: '300ms'}}>
              <div className="w-12 h-12 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-bsts-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-bsts-navy">Client-Focused</h3>
              <p className="text-gray-600">
                We prioritize long-term relationships based on trust and understanding.
              </p>
              <span className="text-gray-500 text-sm italic block mt-3">
                Your success is our success
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Don't just take our word for it. Here's what our clients have to say."
            centered={true}
          />
          
          <span className="text-gray-500 text-sm block text-center mb-12">
            Trusted by businesses across various industries
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animation-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              </div>
            ))}
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

export default Home;
