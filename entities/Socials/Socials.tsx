import React from 'react';
import styles from './Socials.module.scss';
import Link from 'next/link';

const Socials: React.FC = () => {
  return (
    <div className={styles.Socials}>
      <ul className={styles.SocialsList}>
        <li className={styles.SocialsItem}>
          <Link className={styles.SocialsLink} href='#'>
            DRIBBBLE
          </Link>
        </li>
        <li className={styles.SocialsItem}>
          <Link className={styles.SocialsLink} href='#'>
            BEHANCE
          </Link>
        </li>
        <li className={styles.SocialsItem}>
          <Link className={styles.SocialsLink} href='#'>
            INSTAGRAM
          </Link>
        </li>
        <li className={styles.SocialsItem}>
          <Link className={styles.SocialsLink} href='#'>
            TWITTER
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
