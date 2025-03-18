'use client';
import React from 'react';
import Image from 'next/image';
import { data } from './data';
import styles from './PortfolioList.module.scss';

interface PortfolioListProps {
  handleMouseEnter: (name: string) => void;
  handleMouseLeave: () => void;
}

const PortfolioList: React.FC<PortfolioListProps> = ({
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const portfolioData = data;
  return (
    <div className={styles.PortfolioList}>
      <ul className={styles.PortfolioListWrapper}>
        {portfolioData.map((item) => (
          <li
            className={styles.PortfolioListItem}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.PortfolioListItemTitle}>
              <span>{item.id}</span>
              <p>{item.name}</p>
            </div>

            <Image
              src={item.barcode}
              alt='portfolio barcode'
              width={160}
              height={34}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
