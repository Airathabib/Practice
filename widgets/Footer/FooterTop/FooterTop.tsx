import React from 'react';
import Socials from '@/entities/Socials/Socials';
import styles from './FooterTop.module.scss';

const FooterTop: React.FC = () => {
  return (
    <div className={styles.FooterTop}>
      <Socials />
      <div className={styles.FooterTopBrand}>Schrift</div>
    </div>
  );
};

export default FooterTop;
