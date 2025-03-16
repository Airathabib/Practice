import React from 'react';
import PortfolioTop from './PortfolioTop/PortfolioTop';
import PortfolioInfo from './PortfolioInfo/PortfolioInfo';
import PortfolioBottom from './PortfolioBottom/PortfolioBottom';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={styles.Portfolio} id='portfolio'>
      <PortfolioTop />
      <PortfolioInfo />
      <PortfolioBottom />
    </section>
  );
};

export default Portfolio;
