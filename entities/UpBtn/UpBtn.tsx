'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './UpBtn.module.scss';

const UpBtn: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => setScroll(window.scrollY);

  const handlerScrollUp = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.Wrapper}>
      {scroll > 100 ? (
        <button className={styles.WrapperUpBtn} onClick={handlerScrollUp}>
          <Image
            className={styles.WrapperUpBtnImg}
            src={'@/../footer_arrow-up.svg'}
            alt='arrow up'
            width={60}
            height={60}
          />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default UpBtn;
