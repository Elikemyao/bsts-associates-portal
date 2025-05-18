
import { useEffect, useState, useRef, useCallback } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Map<Element, string>>(new Map());

  // Handle scroll events
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

  // Initialize animation observer
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              const className = elementsRef.current.get(element);
              
              if (className) {
                element.classList.add(className);
              }
              
              // Once the animation is applied, we no longer need to observe this element
              observerRef.current?.unobserve(element);
            }
          });
        },
        { threshold: 0.1 }
      );
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Register elements for animation
  const registerAnimation = useCallback((element: Element, className: string) => {
    if (element && observerRef.current) {
      elementsRef.current.set(element, className);
      observerRef.current.observe(element);
    }
    
    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element);
        elementsRef.current.delete(element);
      }
    };
  }, []);

  // Scroll to top function
  const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  // Check if element is in viewport
  const isInViewport = (element: HTMLElement | null, offset = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  return {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollToTop,
    isInViewport,
    registerAnimation
  };
}
