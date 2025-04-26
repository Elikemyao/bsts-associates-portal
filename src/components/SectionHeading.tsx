
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ""
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-8 md:mb-12 ${className}`}>
      <h2 className="section-title text-bsts-navy">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
