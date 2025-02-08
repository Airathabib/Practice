'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className={styles.Nav}>
      <ul
        className={
          nav
            ? [styles.NavMenu, styles.active].join(' ').toString()
            : [styles.NavMenu].toString()
        }
      >
        <Link className={styles.NavLink} href='#'>
          About
        </Link>
        <Link className={styles.NavLink} href='#'>
          Services
        </Link>
        <Link className={styles.NavLink} href='#'>
          Portfolio
        </Link>
        <Link className={styles.NavLink} href='#'>
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
