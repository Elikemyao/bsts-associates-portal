
import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Check if page is scrolled
      setIsScrolled(currentScrollY > 20);
      
      // Update scroll position
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  return {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollToTop
  };
}
