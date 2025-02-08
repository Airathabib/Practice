import React from 'react';
import UpBtn from '@/entities/UpBtn/UpBtn';
import styles from './FooterBottom.module.scss';

const FooterBottom: React.FC = () => {
  return (
    <div className={styles.FooterBottom}>
      <span className={styles.FooterBottomCopy}>© Copyright Schrift 2024</span>
      <UpBtn />
    </div>
  );
};

export default FooterBottom;
