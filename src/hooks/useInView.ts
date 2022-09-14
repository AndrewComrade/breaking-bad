import { MutableRefObject, useEffect, useState } from 'react';

const useInView = <T extends Element>(
  target: MutableRefObject<T>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.unobserve(target.current);
    };
  }, [target.current]);

  return isIntersecting;
};

export default useInView;
