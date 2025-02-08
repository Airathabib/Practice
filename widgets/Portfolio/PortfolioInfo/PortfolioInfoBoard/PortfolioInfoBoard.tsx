import React from 'react';
import Image from 'next/image';
import styles from './PortfolioInfoBoard.module.scss';

interface BoardHover {
  activeCard: string | null;
}

const PortfolioInfoBoard: React.FC<BoardHover> = ({ activeCard }) => {
  const cardActiveBackGround = {
    backgroundColor: activeCard ? 'rgba(255, 255, 255, 1)' : `transparent`,
  };
  return (
    <div className={styles.PortfolioShowinfo} style={cardActiveBackGround}>
      <div
        className={styles.PortfolioShowinfoText}
        style={{ opacity: activeCard ? 0 : 1 }}
      >
        HOVER on the list
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
