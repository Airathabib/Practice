import React from 'react';
import styles from './About.module.scss';
import AboutText from './AboutTitle/AboutText';
import AboutDescr from './AboutDescr/AboutDescr';

const About: React.FC = () => {
  return (
    <section className={styles.About} id='about'>
      <AboutText />
      <AboutDescr />
    </section>
  );
};

export default About;
