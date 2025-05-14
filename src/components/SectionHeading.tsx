
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <div className={cn(
      `${centered ? 'text-center' : ''} mb-8 md:mb-12 fade-up`,
      className
    )}>
      <h2 className={cn(
        "section-title text-bsts-navy text-balance",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-gray-600 text-lg mt-4 max-w-3xl leading-relaxed text-balance",
          centered && "mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
