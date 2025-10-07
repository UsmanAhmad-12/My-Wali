import { useEffect } from 'react';
import AOS from 'aos';

export const useAOS = (delay = 150) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Refresh AOS to detect new elements
      AOS.refresh();
      
      // Also refresh again after a short delay to catch any late-rendering elements
      setTimeout(() => {
        AOS.refresh();
      }, 50);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
};
