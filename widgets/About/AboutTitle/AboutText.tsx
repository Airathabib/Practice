import React from 'react';
import Image from 'next/image';
import styles from './AboutText.module.scss';

const AboutText: React.FC = () => {
  return (
    <div className={styles.AboutText}>
      <h2 className={styles.AboutTextTitle}>about schrift</h2>
      <div className={styles.AboutTextImage}>
        <Image
          src={'@/../About Image.svg'}
          width={625}
          height={520}
          alt='About Image'
        />
      </div>
    </div>
  );
};

export default AboutText;
