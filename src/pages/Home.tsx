import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Route, Handshake, ClipboardCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import PageLayout from '@/components/PageLayout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  
  // Hero carousel slides
  const heroSlides = [
    {
      image: "/lovable-uploads/a0eb1bf8-cb79-40d2-8a7b-040c3a1d8248.png",
      title: "Explore Ghana's Digital Future",
      description: "BSTS & Associates helps businesses navigate the rapidly evolving digital landscape in Ghana's growing economy.",
      tagline: "Embracing innovation since 2008"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      title: "Helping Businesses Grow and Thrive",
      description: "BSTS & Associates provides expert accounting, taxation, and business advisory services to help your business succeed.",
      tagline: "Professional services tailored to your unique business needs"
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80",
      title: "Strategic Solutions for Your Business",
      description: "Our team of experienced professionals deliver customized strategies to overcome your business challenges.",
      tagline: "Your trusted business partner in Ghana"
    }
  ];

  // Work process steps
  const workProcessSteps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough discussion to understand your business needs, goals, and challenges to create a customized approach.",
      icon: <Route className="h-6 w-6" />
    },
    {
      title: "Strategic Planning",
      description: "Our team develops a tailored strategy addressing your specific requirements with clear timelines and deliverables.",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Implementation & Support",
      description: "We execute the plan efficiently while maintaining open communication and providing ongoing support throughout the process.",
      icon: <Handshake className="h-6 w-6" />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative">
                <div className="bg-bsts-navy text-white py-16 md:py-24 relative overflow-hidden">
                  {/* Background for slides 2 and 3 */}
                  {index !== 0 && (
                    <>
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 z-0 opacity-30">
                        <AspectRatio ratio={21/9}>
                          <img 
                            src={slide.image} 
                            alt={`Slide ${index + 1} background`}
                            className="object-cover w-full h-full animate-backgroundZoom"
                          />
                        </AspectRatio>
                      </div>
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-bsts-navy/95 to-bsts-burgundy/80 opacity-70"></div>
                      
                      {/* Content */}
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl animation-on-scroll">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">{slide.title}</h1>
                          <p className="text-xl text-gray-200 mb-8 animate-fadeInUp" style={{animationDelay: '200ms'}}>
                            {slide.description}
                          </p>
                          <span className="text-gray-300 text-sm block mb-8 italic animate-fadeInUp" style={{animationDelay: '300ms'}}>
                            {slide.tagline}
                          </span>
                          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '400ms'}}>
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
                    </>
                  )}
                  
                  {/* Special layout for the first slide */}
                  {index === 0 && (
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Text content on the left */}
                        <div className="animation-on-scroll">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
                            {slide.title}
                          </h1>
                          <p className="text-xl text-gray-200 mb-8 animate-fadeInUp" style={{animationDelay: '200ms'}}>
                            {slide.description}
                          </p>
                          <span className="text-gray-300 text-sm block mb-8 italic animate-fadeInUp" style={{animationDelay: '300ms'}}>
                            {slide.tagline}
                          </span>
                          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '400ms'}}>
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
                        
                        {/* Image on the right */}
                        <div className="hidden md:block relative h-full">
                          <img 
                            src={slide.image} 
                            alt="Digital Future"
                            className="object-cover w-full h-full rounded-lg shadow-2xl animate-fadeInUp"
                            style={{animationDelay: '300ms'}}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative left-0 h-8 w-8" />
              <CarouselNext className="relative right-0 h-8 w-8" />
            </div>
          </div>
        </Carousel>
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

      {/* How We Work With You Section */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Work With You" 
            subtitle="Our systematic approach ensures a seamless experience and optimal results for your business."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {workProcessSteps.map((step, index) => (
              <div key={index} className="animation-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-t-bsts-burgundy/80 h-full">
                  <div className="w-14 h-14 bg-bsts-navy/10 rounded-full flex items-center justify-center mb-6">
                    <div className="text-bsts-navy">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-bsts-navy">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  <div className="flex items-center mt-6">
                    <div className="bg-bsts-burgundy/10 rounded-full w-8 h-8 flex items-center justify-center text-bsts-burgundy font-bold">
                      {index + 1}
                    </div>
                    {index < workProcessSteps.length - 1 && (
                      <div className="hidden md:block h-0.5 bg-bsts-burgundy/30 flex-grow mx-2"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
