import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FooterContact.module.scss';

const FooterContact: React.FC = () => {
  return (
    <div className={styles.FooterContact}>
      <h2 className={styles.FooterContactTitle}> create bold ideas together</h2>
      <div>
        <Link
          className={styles.FooterContactMail}
          href='#'
          onClick={(e) => e.preventDefault()}
        >
          HELLO@SCHRIFT.COM
        </Link>

        <Image
          className={styles.FooterContactEllipse}
          src={'@/../Footer_Ellipse.svg'}
          alt='Ellipse'
          width={550}
          height={550}
        />
        <Image
          className={styles.FooterContactEllipse1}
          src={'/FooterEllipse1.png'}
          alt='Ellipse'
          width={620}
          height={200}
        />
        <Image
          className={styles.FooterContactEllipse2}
          src={'/FooterEllipse2.png'}
          alt='Ellipse'
          width={900}
          height={300}
        />
        <Image
          className={styles.FooterContactEllipse3}
          src={'/FooterEllipse3.png'}
          alt='Ellipse'
          width={1200}
          height={450}
        />
        <Image
          className={styles.FooterContactSmallStar1}
          src={'@/../FooterSmallStar.svg'}
          alt='star'
          width={12}
          height={12}
        />
        <Image
          className={styles.FooterContactSmallStar2}
          src={'@/../FooterSmallStar.svg'}
          alt='star'
          width={12}
          height={12}
        />
        <Image
          className={styles.FooterContactSmallStar3}
          src={'@/../FooterSmallStar.svg'}
          alt='star'
          width={12}
          height={12}
        />
        <Image
          className={styles.FooterContactBigStar1}
          src={'@/../FooterSmallStar.svg'}
          alt='star'
          width={24}
          height={24}
        />
        <Image
          className={styles.FooterContactBigStar2}
          src={'@/../FooterSmallStar.svg'}
          alt='star'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default FooterContact;
