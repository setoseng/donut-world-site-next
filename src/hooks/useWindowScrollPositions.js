import { useEffect, useState } from 'react'

export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });
  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY});
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    // return a clean up fuction to remove the event listener
    return () => window.removeEventListener('scroll', updatePosition);
  }, [])
  return scrollPosition;
}