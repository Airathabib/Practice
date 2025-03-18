'use client';

import React, { useState } from 'react';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioInfoBoard from './PortfolioInfoBoard/PortfolioInfoBoard';
import styles from './PortfolioInfo.module.scss';

const PortfolioInfo = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setTimeout(() => {
      setActiveCard(name);
    }, 200);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveCard(null);
    }, 200);
  };

  return (
    <div className={styles.PortfolioInfo}>
      <PortfolioInfoBoard activeCard={activeCard} />
      <PortfolioList
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default PortfolioInfo;
