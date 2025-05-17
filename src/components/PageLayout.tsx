
import React from 'react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen animate-fade-in", className)}>
      {children}
    </div>
  );
};

export default PageLayout;
