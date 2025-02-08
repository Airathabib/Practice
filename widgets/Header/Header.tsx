import React from 'react';
import Image from 'next/image';
import Nav from '@/entities/Nav/Nav';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLogoWrapper}>
        <span className={styles.HeaderLogoText}>SCHRIFT</span>
        <Image src='@/../arrow-up.svg' width={24} height={24} alt='arrow' />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
