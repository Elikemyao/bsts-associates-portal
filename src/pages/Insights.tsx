
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

const Insights = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-bsts-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title mb-6">Insights & Updates</h1>
            <p className="text-xl text-gray-200">
              Stay informed with the latest industry insights, expert tips, and company updates from BSTS & Associates.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Featured Articles" 
            subtitle="Expert insights and analysis to help you navigate the complexities of business and finance."
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Featured Post 1 */}
            <div className="flex flex-col h-full">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=450&q=80" 
                  alt="Tax Planning Strategies" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-grow">
                <div className="text-sm text-bsts-burgundy mb-2">June 15, 2023 • Tax Planning</div>
                <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Effective Tax Planning Strategies for Small Businesses
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  In this comprehensive guide, we explore practical tax planning strategies that can help small businesses minimize their tax burden while maintaining full compliance with regulations.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Featured Post 2 */}
            <div className="flex flex-col h-full">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=450&q=80" 
                  alt="Digital Transformation" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-grow">
                <div className="text-sm text-bsts-burgundy mb-2">May 28, 2023 • Business Technology</div>
                <h3 className="text-2xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Digital Transformation: Key Considerations for Modern Businesses
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover the essential steps and considerations for successfully implementing digital transformation initiatives in your business to drive efficiency and growth.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 md:py-24 bg-bsts-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Recent Articles" 
            subtitle="Browse our latest articles and updates."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">April 12, 2023 • Accounting</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Understanding Financial Statements: A Guide for Business Owners
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn how to interpret financial statements and use them to make informed business decisions.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">March 25, 2023 • Business Growth</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Scaling Your Business: Strategic Approaches for Sustainable Growth
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore proven strategies and best practices for scaling your business while maintaining operational efficiency.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">March 8, 2023 • Compliance</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Navigating Regulatory Changes in 2023: What Businesses Need to Know
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated on the latest regulatory changes and learn how to ensure your business remains compliant.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Post 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">February 20, 2023 • Software</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Selecting the Right Accounting Software for Your Business
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive guide to choosing accounting software that aligns with your business needs and objectives.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Post 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">February 5, 2023 • Taxation</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Tax Deductions Often Overlooked by Small Businesses
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover common tax deductions that small businesses frequently miss and how to properly claim them.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
            
            {/* Post 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="text-sm text-bsts-burgundy mb-2">January 18, 2023 • Business Planning</div>
                <h3 className="text-xl font-semibold mb-4 text-bsts-navy">
                  <Link to="/insights/blog-post" className="hover:text-bsts-burgundy transition-colors">
                    Creating an Effective Financial Forecast for Your Business
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guidance on developing accurate financial forecasts to support strategic planning and decision-making.
                </p>
                <Button asChild variant="link" className="p-0 text-bsts-burgundy hover:text-bsts-burgundy/90">
                  <Link to="/insights/blog-post">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-bsts-navy hover:bg-bsts-navy/90">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Resources & Downloads" 
            subtitle="Access our collection of resources designed to help you manage and grow your business effectively."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Resource 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-bsts-navy mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Tax Planning Checklist</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive checklist to help businesses prepare for tax season and optimize their tax position.
              </p>
              <Button asChild className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                <a href="#">Download PDF</a>
              </Button>
            </div>
            
            {/* Resource 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-bsts-navy mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Financial Statement Template</h3>
              <p className="text-gray-600 mb-6">
                A user-friendly template for creating professional financial statements for your business.
              </p>
              <Button asChild className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                <a href="#">Download Excel</a>
              </Button>
            </div>
            
            {/* Resource 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-bsts-navy mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-bsts-navy">Business Plan Guide</h3>
              <p className="text-gray-600 mb-6">
                A step-by-step guide to creating a comprehensive business plan to secure funding and guide growth.
              </p>
              <Button asChild className="w-full bg-bsts-burgundy hover:bg-bsts-burgundy/90">
                <a href="#">Download PDF</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-bsts-lightblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsts-navy mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Stay informed with the latest industry insights, expert tips, and company updates delivered directly to your inbox.</p>
            
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

export default Insights;
