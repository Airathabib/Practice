import React from 'react';
import styles from './Provide.module.scss';
import ProvideCardsList from './ProvideCardsList/ProvideCardsList';

const Provide: React.FC = () => {
  return (
    <section className={styles.Provide}>
      <div className={styles.ProvideInfo} id='service'>
        <h2 className={styles.ProvideTitle}>What we provide</h2>
        <p className={styles.ProvideDescr}>
          we transform ideas into impactful designs. From brand identities to
          digital experiences, our services blend creativity and strategy to
          make your vision stand out
        </p>
      </div>
      <ProvideCardsList />
    </section>
  );
};

export default Provide;
