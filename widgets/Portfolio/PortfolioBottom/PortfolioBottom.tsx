import React from 'react';
import Image from 'next/image';
import styles from './PortfolioBottom.module.scss';

const PortfolioBottom: React.FC = () => {
  return (
    <div className={styles.PortfolioBottom}>
      <p className={styles.PortfolioBottomText}> see more</p>
      <button className={styles.PortfolioBottomBtn}>
        <Image
          className={styles.PortfolioBottomImage}
          src={'@/../arrow-up.svg'}
          width={40}
          height={40}
          alt='arrow'
        />
      </button>
    </div>
  );
};

export default PortfolioBottom;
