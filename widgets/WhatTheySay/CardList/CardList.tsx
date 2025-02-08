import React from 'react';
import Cards from '../Cards/Cards';
import { data } from './data';

import styles from './CardList.module.scss';

const CardList = () => {
  const cardData = data;
  return (
    <div className={styles.CardList}>
      {cardData.map((item) => (
        <Cards
          key={item.id}
          name={item.name}
          proffession={item.proffession}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default CardList;
