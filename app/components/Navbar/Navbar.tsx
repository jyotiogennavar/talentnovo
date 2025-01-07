'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './navbar.module.css';

import Logo from '../../../public/images/logos/TalentNovoLogo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
              <Image src={Logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link href="#about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#our-services">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="#why-choose-us">
              Why Choose Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
