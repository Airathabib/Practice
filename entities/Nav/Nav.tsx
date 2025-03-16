'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav className={styles.Nav}>
      <ul
        className={
          nav
            ? [styles.NavMenu, styles.active].join(' ').toString()
            : [styles.NavMenu].toString()
        }
      >
        <Link
          className={styles.NavLink}
          href='#about'
          onClick={() => setNav(!nav)}
        >
          About
        </Link>
        <Link
          className={styles.NavLink}
          href='#service'
          onClick={() => setNav(!nav)}
        >
          Services
        </Link>
        <Link
          className={styles.NavLink}
          href='#portfolio'
          onClick={() => setNav(!nav)}
        >
          Portfolio
        </Link>
        <Link
          className={styles.NavLink}
          href='#what'
          onClick={() => setNav(!nav)}
        >
          Let`s talk
          <Image
            className={styles.NavArrow}
            src={'@/../Hero_Button_Icon.svg'}
            width={16}
            height={16}
            alt='arrow'
          />
        </Link>
      </ul>
      <div onClick={() => setNav(!nav)} className={styles.NavMobileBtn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </nav>
  );
};

export default Nav;
