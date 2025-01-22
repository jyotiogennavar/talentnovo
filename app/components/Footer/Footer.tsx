import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css"; // Import the CSS module
import Logo from "../../../public/images/logos/TalentNovoWhitelogo.svg";

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
          <Link
            href="/offerings/talent-profiling-and-assessment"
            className={styles.link}
          >
            Talent Profiling
          </Link>
          <Link
            href="/offerings/leadership-development"
            className={styles.link}
          >
            Leadership Development
          </Link>
          <Link
            href="/offerings/strategic-coaching-and-mentoring"
            className={styles.link}
          >
            Strategic Coaching
          </Link>
          <Link
            href="/offerings/culture-and-organizational-development"
            className={styles.link}
          >
            Cultural Development
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
