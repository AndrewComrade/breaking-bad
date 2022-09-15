import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import styles from './index.module.sass';

const ScrollTopBtn = () => {
  const [isShow, setIsShow] = useState(false);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollHandler = () => {
    if (window.scrollY > 400) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      {isShow && (
        <button className={styles.ScrollBtn} onClick={goTop}>
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollTopBtn;
