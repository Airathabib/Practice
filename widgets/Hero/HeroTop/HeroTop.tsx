import React from 'react';
import Image from 'next/image';

import styles from './HeroTop.module.scss';

const HeroTop = () => {
  return (
    <div className={styles.HeroTop}>
      <div className={styles.HeroTopInfo}>
        <p className={styles.HeroTopData}>EST 21.12.24</p>
        <p className={styles.HeroTopInfo}>
          A place where design philosophy blends innovation and clarity to
          create impactful solutions
        </p>
      </div>
      <div>
        <Image
          src={'../../../Hero_top.svg'}
          width={32}
          height={83}
          alt='barcode'
        />
      </div>
    </div>
  );
};

export default HeroTop;
