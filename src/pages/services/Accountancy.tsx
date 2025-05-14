import React from 'react';
import { Check, FileHeart, Calculator, FileText } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import SectionHeading from '@/components/SectionHeading';
import ServiceFeature from '@/components/ServiceFeature';
import { Card, CardContent } from '@/components/ui/card';

const AccountancyService = () => {
  return (
    <ServiceLayout 
      title="Accountancy Services"
      subtitle="Helping Your Business Grow & Increase Profitability"
    >
      {/* Overview Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Comprehensive Accounting Solutions" 
              subtitle="Regular management information is crucial for business success."
            />
            <p className="text-gray-600 mb-6">
              We work closely with businesses to improve profits and growth. We prepare monthly or quarterly management accounts, ensuring reliable data for business decisions. We also assist with bookkeeping requirements, either at your office or ours. We can assist with bookkeeping, hire a bookkeeper, or help recruit the right person.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-bsts-burgundy/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-bsts-burgundy" />
                </div>
                <p className="text-gray-600">Customized accounting solutions for businesses of all sizes</p>
              </div>
              <div className="flex items-start">
                <div className="bg-bsts-burgundy/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-bsts-burgundy" />
                </div>
                <p className="text-gray-600">Proactive advice to help grow your business</p>
              </div>
              <div className="flex items-start">
                <div className="bg-bsts-burgundy/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-bsts-burgundy" />
                </div>
                <p className="text-gray-600">Regular reporting and insights for better decision-making</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/0beccccf-af81-4949-a914-2d6303096556.png" 
              alt="Accounting Services" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <SectionHeading 
          title="Our Accounting Services" 
          subtitle="Comprehensive solutions tailored to your business needs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceFeature
            title="Payroll Management"
            description="Our Payroll Management services take the burden off your shoulders, ensuring accurate and timely payment processing for your employees."
            icon={<Calculator className="h-6 w-6" />}
          />
          <ServiceFeature
            title="Bookkeeping Services"
            description="We keep your finances in order with meticulous attention to detail, ensuring your financial records are always accurate and up-to-date."
            icon={<FileText className="h-6 w-6" />}
          />
          <ServiceFeature
            title="Financial Reporting"
            description="Our comprehensive financial reporting gives you clear insights into your business's performance to support informed decision-making."
            icon={<FileHeart className="h-6 w-6" />}
          />
        </div>
      </div>

      {/* Payroll Management */}
      <div className="mb-16">
        <Card className="border-t-4 border-t-bsts-navy">
          <CardContent className="pt-8">
            <SectionHeading 
              title="Payroll Management" 
              subtitle="Managing payroll can be a complex and time-consuming task."
            />
            
            <p className="text-gray-600 mb-6">
              Our Payroll Management services are designed to take the burden off your shoulders, ensuring that your employees are paid accurately and on time. We handle everything from calculating wages and deductions to processing tax filings and generating payslips. With our expert team managing your payroll, you can focus on growing your business while we ensure compliance with all relevant regulations.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-bsts-navy">Key Features:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Accurate and timely payroll processing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Automated tax calculations and filings</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Customizable payslip generation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Compliance with national labour laws</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Secure, confidential handling of employee data</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Bookkeeping Services */}
      <div className="mb-16">
        <Card className="border-t-4 border-t-bsts-burgundy">
          <CardContent className="pt-8">
            <SectionHeading 
              title="Bookkeeping Services" 
              subtitle="Accurate and organized financial records are the backbone of any successful business."
            />
            
            <p className="text-gray-600 mb-6">
              Our Bookkeeping Services are designed to keep your finances in order, giving you a clear picture of your company's financial health. We manage all aspects of bookkeeping, including data entry, ledger maintenance, and reconciliation. With our meticulous attention to detail, you can be confident that your financial records are always up-to-date and accurate.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-bsts-navy">Our Bookkeeping Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Comprehensive data entry and record keeping</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Bank and credit card reconciliations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Accounts payable and receivable management</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Monthly financial reports and statements</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Cloud-based bookkeeping options for easy access</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Financial Reporting */}
      <div>
        <Card className="border-t-4 border-t-bsts-navy">
          <CardContent className="pt-8">
            <SectionHeading 
              title="Financial Reporting" 
              subtitle="Accurate and insightful financial reporting is crucial for making informed business decisions."
            />
            
            <p className="text-gray-600 mb-6">
              At BSTS, we offer comprehensive financial reporting services designed to give you a clear, detailed view of your business's financial health.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-bsts-navy">Why Financial Reporting Matters:</h3>
            <p className="text-gray-600 mb-6">
              Financial reporting involves the systematic preparation of financial statements that reflect your business's financial performance over a specific period. These reports are essential tools for:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Strategic Decision-Making:</strong> Financial reports provide the data you need to make informed decisions, whether it's budgeting for future projects, assessing business profitability, or planning for expansion.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Investor and Stakeholder Communication:</strong> Transparent and accurate financial reports are vital for communicating with investors, lenders, and other stakeholders.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Regulatory Compliance:</strong> Adhering to financial reporting standards and regulations is crucial to avoid penalties and ensure compliance with laws.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Performance Monitoring:</strong> Regular financial reports allow you to track your business's performance against key metrics and benchmarks.</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 text-bsts-navy">Our Financial Reporting Services:</h3>
            <p className="text-gray-600 mb-4">
              At BSTS, we provide a full suite of financial reporting services tailored to your business's unique needs:
            </p>
            
            <h4 className="text-lg font-semibold mb-2 text-bsts-navy">Preparation of Financial Statements:</h4>
            <p className="text-gray-600 mb-4">
              We prepare all essential financial statements, including:
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Income Statement (Profit and Loss Statement):</strong> Provides a summary of your revenues, expenses, and profits over a specified period.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Balance Sheet:</strong> Offers a snapshot of your company's financial position, detailing assets, liabilities, and equity at a specific point in time.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Cash Flow Statement:</strong> Tracks the flow of cash in and out of your business, helping you manage liquidity and plan for future cash needs.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Statement of Changes in Equity:</strong> Shows changes in the ownership equity of your company over time, including retained earnings and other reserves.</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2 text-bsts-navy">Management Reporting:</h4>
            <p className="text-gray-600 mb-4">
              In addition to statutory financial statements, we offer customized management reports that provide deeper insights into your business's financial performance, including budget vs. actual analysis, KPIs, and segment reporting.
            </p>
            
            <h4 className="text-lg font-semibold mb-2 text-bsts-navy">Additional Services:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Financial Forecasting and Projections</strong></span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Audit Preparation and Support</strong></span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Regulatory and Compliance Reporting</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ServiceLayout>
  );
};

export default AccountancyService;
