import React from 'react';
import Socials from '@/entities/Socials/Socials';
import Link from 'next/link';
import styles from './FooterTop.module.scss';

const FooterTop: React.FC = () => {
  return (
    <div className={styles.FooterTop}>
      <Socials />
      <div className={styles.FooterTopBrand}>
        <Link
          className={styles.FooterTopLogo}
          href='#'
          onClick={(e) => e.preventDefault()}
        >
          Schrift
        </Link>
      </div>
    </div>
  );
};

export default FooterTop;
