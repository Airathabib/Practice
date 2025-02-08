import React from 'react';
import Card from '../AboutCard/Card';
import { data } from './data';
import styles from './AboutCardsList.module.scss';

const AboutCardsList: React.FC = () => {
  const cardData = data;
  return (
    <div className={styles.AboutCardsList}>
      {cardData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          icon={item.icon}
          descr={item.descr}
          barcode={item.barcode}
        />
      ))}
    </div>
  );
};

export default AboutCardsList;
