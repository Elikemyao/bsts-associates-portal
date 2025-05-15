
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 p-3 rounded-full bg-bsts-navy hover:bg-bsts-navy/90 text-white shadow-lg transition-opacity duration-300 z-50',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </Button>
  );
};

export default ScrollToTopButton;
