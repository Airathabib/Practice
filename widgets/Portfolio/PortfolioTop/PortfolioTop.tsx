import React from 'react';
import styles from './PortfolioTop.module.scss';
const PortfolioTop = () => {
  return (
    <div className={styles.PortfolioTop}>
      <h2 className={styles.PortfolioTopTitle}>Featured Portfolio</h2>
      <p className={styles.PortfolioTopDescr}>
        Explore how Schrift transforms bold ideas into impactful designs. From
        branding to digital experiences, our work reflects precision, clarity,
        and purpose.
      </p>
    </div>
  );
};

export default PortfolioTop;
