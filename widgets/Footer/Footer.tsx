'use client';
import React from 'react';
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterContact from './FooterContact/FooterContact';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <FooterTop />
      <FooterContact />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
