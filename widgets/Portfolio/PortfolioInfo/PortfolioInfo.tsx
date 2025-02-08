'use client';

import React, { useState } from 'react';
import PortfolioList from './PortfolioList/PortfolioList';
import PortfolioInfoBoard from './PortfolioInfoBoard/PortfolioInfoBoard';
import styles from './PortfolioInfo.module.scss';

const PortfolioInfo = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCard(id);
  };
  const handleMouseLeave = () => {
    setActiveCard(null);
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
