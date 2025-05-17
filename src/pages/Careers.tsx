
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Careers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const isMobile = useIsMobile();

  const openApplicationForm = (position: string) => {
    setSelectedPosition(position);
    setIsDialogOpen(true);
  };

  // Benefits list
  const benefits = [
    "Professional development and growth opportunities",
    "Collaborative and inclusive work environment",
    "Competitive compensation and benefits",
    "Work-life balance and flexible arrangements"
  ];

  // Current job openings
  const jobOpenings = [
    {
      title: "Senior Accountant",
      type: "Full-time | Onsite",
      description: "We're seeking an experienced Senior Accountant to join our team, providing high-quality accounting services to our clients and mentoring junior staff."
    },
    {
      title: "Tax Consultant",
      type: "Full-time | Hybrid",
      description: "Join our taxation team to provide strategic tax planning and compliance services to a diverse portfolio of clients across various industries."
    },
    {
      title: "Business Consultant",
      type: "Full-time | Hybrid",
      description: "We're looking for an experienced Business Consultant to help our clients develop and implement effective strategies for growth and operational excellence."
    }
  ];

  // Career paths
  const careerPaths = [
    {
      title: "Internship",
      description: "Our internship program offers students and recent graduates the opportunity to gain practical experience and valuable industry insights while working alongside our professionals.",
      position: "Internship"
    },
    {
      title: "National Service",
      description: "Our National Service program provides meaningful experiences for service personnel, building skills and knowledge that will benefit their future careers.",
      position: "National Service"
    },
    {
      title: "Job Vacancies",
      description: "Explore current job openings for experienced professionals across our various departments and service areas.",
      position: "Full Time Position"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section - Full width banner with gradient overlay and responsive text */}
      <section className="relative bg-bsts-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bsts-navy/95 to-bsts-burgundy/80 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1600&q=80" 
            alt="Team working together" 
            className="w-full h-full object-cover object-center animate-zoom-out opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="hero-title mb-6">Careers at BSTS & Associates</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join our team of professionals and build a rewarding career in a dynamic and supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Working at BSTS - Staggered layout with card effect */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isMobile ? 'order-2' : 'order-1'}`}>
              <SectionHeading 
                title="Why Work With Us" 
                subtitle="At BSTS & Associates, we're committed to creating a positive and rewarding work environment where you can grow both personally and professionally."
              />
              
              <p className="text-gray-600 mb-6">
                We believe that our people are our greatest asset, and we invest in their development and success. Our collaborative culture, challenging opportunities, and supportive leadership create an environment where you can thrive and make a meaningful impact.
              </p>
              
              <div className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 fade-in-delay-1">
                    <CheckCircle className="w-6 h-6 text-bsts-burgundy flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300 ${isMobile ? 'order-1' : 'order-2'}`}>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Working at BSTS & Associates" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities - Responsive Card Grid */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Career Opportunities" 
            subtitle="Explore various career pathways at BSTS & Associates."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {careerPaths.map((path, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">{path.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{path.description}</p>
                  <Button 
                    className="w-full bg-bsts-navy hover:bg-bsts-navy/90 group-hover:translate-y-[-2px] transition-transform"
                    onClick={() => openApplicationForm(path.position)}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings - Enhanced Cards with Hover Effects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Current Job Openings" 
            subtitle="Explore our latest opportunities and find your perfect role at BSTS & Associates."
            centered={true}
          />
          
          <div className="space-y-6 mt-12">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-bsts-navy mb-2">{job.title}</h3>
                      <p className="text-bsts-burgundy mb-4">{job.type}</p>
                      <p className="text-gray-600 mb-4 md:mb-0">{job.description}</p>
                    </div>
                    <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90 self-start md:self-center whitespace-nowrap group-hover:translate-y-[-2px] transition-transform">
                      <Link to="/careers/job-vacancy" className="flex items-center">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90 transform transition-transform hover:scale-105">
              <Link to="/careers/job-vacancy" className="flex items-center">
                View All Openings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Team?"
        description="Explore our current openings and take the next step in your career with BSTS & Associates."
        primaryButtonText="View Job Openings"
        primaryButtonLink="/careers/job-vacancy"
        secondaryButtonText="Learn About Internships"
        secondaryButtonLink="/careers/internship"
      />

      {/* Application Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Apply for {selectedPosition}</DialogTitle>
          </DialogHeader>
          <JobApplicationForm position={selectedPosition} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
