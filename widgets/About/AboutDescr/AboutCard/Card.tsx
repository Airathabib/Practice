import React from 'react';
import Image from 'next/image';
import { CardData } from '../AboutCardsList/data';
import styles from './Card.module.scss';

const Card: React.FC<CardData> = (props) => {
  const { icon, title, descr, barcode } = props;
  return (
    <div className={styles.Card}>
      <div className={styles.CardTop}>
        <Image
          className={styles.CardTopIcon}
          src={icon}
          alt='icon'
          width={26}
          height={26}
        />
        <div className={styles.CardTopInfo}>
          <h4 className={styles.CardTopTitle}>{title}</h4>
          <p className={styles.CardTopDescr}>{descr}</p>
        </div>
      </div>
      <div className={styles.CardBottom}>
        <Image src={barcode} alt='barcode' width={208} height={54} />
      </div>
    </div>
  );
};

export default Card;
