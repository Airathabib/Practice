import React from 'react';
import Image from 'next/image';
import styles from './HeroBottom.module.scss';
const HeroBottom = () => {
  return (
    <div className={styles.HeroBottom}>
      <p className={styles.HeroBottomText}>Bold Visions. Precise Execution</p>
      <span className={styles.HeroBottomLine}>
   
      </span>
      <button className={styles.HeroBottomBtn}>
        DISCOVER OUR WORK
        <Image
          src={'../../../Hero_Button_Icon.svg'}
          width={12}
          height={16}
          alt='arrow-up'
        />
      </button>
    </div>
  );
};

export default HeroBottom;
