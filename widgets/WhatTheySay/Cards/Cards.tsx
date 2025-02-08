import React from 'react';
import styles from './Cards.module.scss';
import { CardInfo } from '../CardList/data';

const Cards: React.FC<CardInfo> = (props) => {
  const { name, proffession, text } = props;
  return (
    <div className={styles.Cards}>
      <div className={styles.CardsTop}>
        <span className={styles.CardsTopName}>{name}</span>
        <span className={styles.CardsTopProffession}>{proffession}</span>
      </div>
      <p className={styles.CardsInfo}>{text}</p>
    </div>
  );
};

export default Cards;
