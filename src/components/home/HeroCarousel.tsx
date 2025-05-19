
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  tagline: string;
}

interface HeroCarouselProps {
  heroSlides: HeroSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ heroSlides }) => {
  return (
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
  );
};

export default HeroCarousel;
