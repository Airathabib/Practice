import React from 'react';
import styles from './WhatTheySayTop.module.scss';

const WhatTheySatyTop: React.FC = () => {
  return (
    <div className={styles.WhatTheySayTop}>
      <h2 className={styles.WhatTheySayTopTitle}>WHAT THEY SAY</h2>
      <p className={styles.WhatTheySayTopDescr}>
        Our clients are at the heart of everything we do. Hear from the
        visionaries, innovators, and leaders who’ve partnered with Schrift to
        bring bold ideas to life through precise, impactful design.
      </p>
    </div>
  );
};

export default WhatTheySatyTop;
