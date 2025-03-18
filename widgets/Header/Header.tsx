'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/entities/Nav/Nav';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLogoWrapper}>
        <span className={styles.HeaderLogoText}>
          {' '}
          <Link
            href='#'
            className={styles.HeaderLogoLink}
            onClick={(e) => e.preventDefault()}
          >
            SCHRIFT
            <Image src='@/../arrow-up.svg' width={24} height={24} alt='arrow' />
          </Link>
        </span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
