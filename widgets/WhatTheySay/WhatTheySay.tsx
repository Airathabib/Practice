import React from 'react';
import WhatTheySayTop from './WhatTheySayTop/WhatTheySayTop';
import styles from './WhatTheySay.module.scss';
import CardList from './CardList/CardList';

const WhatTheySay: React.FC = () => {
  return (
    <section className={styles.WhatTheySay}>
      <WhatTheySayTop />
      <CardList />
    </section>
  );
};

export default WhatTheySay;
