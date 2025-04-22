import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a small delay to ensure smooth scrolling doesn't interfere
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [location]);

  return null;
};

export default ScrollToTop;
