
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ContentSectionProps {
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'gray';
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  children, 
  image, 
  imageAlt = "Section image", 
  className,
  imagePosition = 'right',
  background = 'white' 
}) => {
  const isMobile = useIsMobile();
  const bgClass = background === 'gray' ? 'bg-bsts-gray' : 'bg-white';
  
  return (
    <section className={cn("py-16 md:py-24", bgClass, className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            isMobile ? 'order-2' : 
            imagePosition === 'left' ? 'order-2' : 'order-1'
          )}>
            {children}
          </div>
          
          {image && (
            <div className={cn(
              "rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300",
              isMobile ? 'order-1' : 
              imagePosition === 'left' ? 'order-1' : 'order-2'
            )}>
              <img 
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
