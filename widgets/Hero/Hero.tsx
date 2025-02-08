import React from 'react';
import HeroTop from './HeroTop/HeroTop';
import HeroBottom from './HeroBottom/HeroBottom';
import Image from 'next/image';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <HeroTop />
      <h1 className={styles.HeroTitle}>The Art of Bold Precision</h1>
      <Image
        className={styles.HeroEllipse1}
        src={'@/../../Ellipse_1.svg'}
        width={159}
        height={269}
        alt='ellipse'
      />
      <Image
        className={styles.HeroEllipse2}
        src={'@/../Ellipse_2.svg'}
        alt='ellipse'
        width={564}
        height={479}
      />
      <Image
        className={styles.HeroEllipse3}
        src={'@/../Ellipse_3.svg'}
        alt='ellipse'
        width={227}
        height={108}
      />
      <Image
        className={styles.HeroEllipse4}
        src={'/Ellipse4.png'}
        alt='ellipse'
        width={869}
        height={349}
      />
      <Image
        className={styles.HeroStar1}
        src={'@/../star.svg'}
        width={24}
        height={24}
        alt='star'
      />
      <Image
        className={styles.HeroEllipse5}
        src={'/Ellipse5.png'}
        alt='ellipse'
        width={869}
        height={349}
      />
      <Image
        className={styles.HeroStar2}
        src={'@/../star.svg'}
        width={24}
        height={24}
        alt='star'
      />

      <HeroBottom />
    </section>
  );
};

export default Hero;
