import React from 'react';
import Image from 'next/image';
import styles from './PortfolioInfoBoard.module.scss';

interface BoardHover {
  activeCard: string | null;
}

const PortfolioInfoBoard: React.FC<BoardHover> = ({ activeCard }) => {
  const cardActiveHover = activeCard ? activeCard : `HOVER on the list`;
  return (
    <div className={styles.PortfolioShowinfo}>
      <div className={styles.PortfolioShowinfoText}>
        {JSON.stringify(cardActiveHover)}
      </div>

      <Image
        className={styles.PortfolioShowinfoImage}
        src={'@/../Portfolio_Ellipse.svg'}
        alt='Ellipse'
        width={293}
        height={300}
      />
    </div>
  );
};

export default PortfolioInfoBoard;
