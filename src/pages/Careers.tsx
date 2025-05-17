
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Careers = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const openApplicationForm = (position: string) => {
    setSelectedPosition(position);
    setIsDialogOpen(true);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title mb-6">Careers at BSTS & Associates</h1>
            <p className="text-xl text-gray-200">
              Join our team of professionals and build a rewarding career in a dynamic and supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Working at BSTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Why Work With Us" 
                subtitle="At BSTS & Associates, we're committed to creating a positive and rewarding work environment where you can grow both personally and professionally."
              />
              
              <p className="text-gray-600 mb-6">
                We believe that our people are our greatest asset, and we invest in their development and success. Our collaborative culture, challenging opportunities, and supportive leadership create an environment where you can thrive and make a meaningful impact.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bsts-burgundy rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                  <p className="text-gray-600">Professional development and growth opportunities</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bsts-burgundy rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                  <p className="text-gray-600">Collaborative and inclusive work environment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bsts-burgundy rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                  <p className="text-gray-600">Competitive compensation and benefits</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bsts-burgundy rounded-full flex items-center justify-center text-white flex-shrink-0">✓</div>
                  <p className="text-gray-600">Work-life balance and flexible arrangements</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Working at BSTS & Associates" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Career Opportunities" 
            subtitle="Explore various career pathways at BSTS & Associates."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Internship */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Internship</h3>
              <p className="text-gray-600 mb-6">
                Our internship program offers students and recent graduates the opportunity to gain practical experience and valuable industry insights while working alongside our professionals.
              </p>
              <Button 
                className="w-full bg-bsts-navy hover:bg-bsts-navy/90"
                onClick={() => openApplicationForm('Internship')}
              >
                Apply Now
              </Button>
            </div>
            
            {/* National Service */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">National Service</h3>
              <p className="text-gray-600 mb-6">
                Our National Service program provides meaningful experiences for service personnel, building skills and knowledge that will benefit their future careers.
              </p>
              <Button 
                className="w-full bg-bsts-navy hover:bg-bsts-navy/90"
                onClick={() => openApplicationForm('National Service')}
              >
                Apply Now
              </Button>
            </div>
            
            {/* Job Vacancies */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">Job Vacancies</h3>
              <p className="text-gray-600 mb-6">
                Explore current job openings for experienced professionals across our various departments and service areas.
              </p>
              <Button 
                className="w-full bg-bsts-navy hover:bg-bsts-navy/90"
                onClick={() => openApplicationForm('Full Time Position')}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Current Job Openings" 
            subtitle="Explore our latest opportunities and find your perfect role at BSTS & Associates."
            centered={true}
          />
          
          <div className="space-y-6 mt-12">
            {/* Job 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-bsts-navy mb-2">Senior Accountant</h3>
                  <p className="text-bsts-burgundy mb-4">Full-time | Onsite</p>
                  <p className="text-gray-600 mb-4">
                    We're seeking an experienced Senior Accountant to join our team, providing high-quality accounting services to our clients and mentoring junior staff.
                  </p>
                </div>
                <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90">
                  <Link to="/careers/job-vacancy">Apply Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-bsts-navy mb-2">Tax Consultant</h3>
                  <p className="text-bsts-burgundy mb-4">Full-time | Hybrid</p>
                  <p className="text-gray-600 mb-4">
                    Join our taxation team to provide strategic tax planning and compliance services to a diverse portfolio of clients across various industries.
                  </p>
                </div>
                <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90">
                  <Link to="/careers/job-vacancy">Apply Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Job 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-bsts-navy mb-2">Business Consultant</h3>
                  <p className="text-bsts-burgundy mb-4">Full-time | Hybrid</p>
                  <p className="text-gray-600 mb-4">
                    We're looking for an experienced Business Consultant to help our clients develop and implement effective strategies for growth and operational excellence.
                  </p>
                </div>
                <Button asChild className="bg-bsts-navy hover:bg-bsts-navy/90">
                  <Link to="/careers/job-vacancy">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-bsts-burgundy hover:bg-bsts-burgundy/90">
              <Link to="/careers/job-vacancy">View All Openings</Link>
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

