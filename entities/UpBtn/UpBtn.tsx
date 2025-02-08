'use client';
import React from 'react';
import Image from 'next/image';
import styles from './UpBtn.module.scss';

const UpBtn: React.FC = () => {
  const handlerScrollUp = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.Wrapper}>
      <button className={styles.WrapperUpBtn} onClick={handlerScrollUp}>
        <Image
          className={styles.WrapperUpBtnImg}
          src={'@/../footer_arrow-up.svg'}
          alt='arrow up'
          width={80}
          height={80}
        />
      </button>
    </div>
  );
};

export default UpBtn;
