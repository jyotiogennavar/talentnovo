'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';
import styles from './navbar.module.css';

import Logo from '../../../public/images/logos/TalentNovoLogo.svg'

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
              <Image src={Logo} alt="logo" width={80} height={60} priority />
          </Link>
        </div>
        {/* <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button> */}
        <ul className={`${styles.navLinks}`}>
        <li>
            <Link href="#features">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="#about-us">
              About Us
            </Link>
          </li>
    
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
