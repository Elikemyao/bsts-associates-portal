
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import PageLayout from '@/components/PageLayout';
import HeroCarousel from '@/components/home/HeroCarousel';
import AboutSection from '@/components/home/AboutSection';
import WorkProcessSection from '@/components/home/WorkProcessSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CTASection from '@/components/CTASection';

const Home = () => {
  const { isInViewport } = useScrollAnimation();
  
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

  return (
    <PageLayout>
      <HeroCarousel heroSlides={heroSlides} />
      <AboutSection />
      <WorkProcessSection />
      <ServicesSection />
      <WhyChooseUsSection />
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
