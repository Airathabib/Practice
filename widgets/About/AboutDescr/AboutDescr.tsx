import React from 'react';
import styles from './AboutDescr.module.scss';
import AboutCardsList from './AboutCardsList/AboutCardsList';

const AboutDescr: React.FC = () => {
  return (
    <div className={styles.AboutDescr}>
      <p className={styles.AboutDescrText}>
        Schrift is a graphic design agency focused on clarity, impact, and
        purpose. We deliver designs that communicate powerfully and
        authentically
      </p>
      <AboutCardsList />
    </div>
  );
};

export default AboutDescr;
