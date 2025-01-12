import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css'; // Import the CSS module
import Logo from '../../../public/images/logos/TalentNovoWhitelogo.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Image
            src={Logo} // Replace with your logo path
            alt="Logo"
            width={100}
            height={30}
          />
        </div>

        {/* Links Section */}
        <div className={styles.linksContainer}>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} TalentNovo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
