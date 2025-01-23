"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import styles from "./navbar.module.css"

import Logo from "../../../public/images/logos/TalentNovoLogo.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo || "/placeholder.svg"} alt="logo" width={80} height={60} priority />
          </Link>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <Menu size={24} />
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <li className={styles.dropdown}>
            <button onClick={toggleServices} className={styles.dropdownToggle}>
              Our Offerings <ChevronDown size={16} />
            </button>
            <ul className={`${styles.dropdownMenu} ${isServicesOpen ? styles.open : ""}`}>
              <li>
                <Link href="/offerings/talent-profiling-and-assessment">Talent Profiling</Link>
              </li>
              <li>
                <Link href="/offerings/leadership-development">Leadership Development</Link>
              </li>
              <li>
                <Link href="/offerings/strategic-coaching-and-mentoring">Strategic Coaching</Link>
              </li>
              <li>
                <Link href="/offerings/culture-and-organizational-development">Cultural & Organizational Development</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

