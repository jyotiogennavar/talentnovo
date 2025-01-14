import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import HeroBannerImage from "../../../public/images/homePage/talentnovo-banner-image.svg";

// Define TypeScript type for header content

// Define the header content
const headerContent: {
  description: string;
  buttonLabel: string;
  imageAlt: string;
} = {
  description:
    "Empower your team to thrive with our proven strategies that boost collaboration, align goals, and unleash potential.",
  buttonLabel: "Schedule a Call",
  imageAlt: "Hero showing team collaboration",
};

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.heroContent}>
        <h1>Transform Talent into Impact</h1>
        <p>{headerContent.description}</p>
        {/* <button className={styles.heroButton} aria-label={headerContent.buttonLabel}>
            {headerContent.buttonLabel}
          </button> */}
        <a
          href="mailto:vikasb@talentnovo.com"
          className={styles.heroButton}
          aria-label={headerContent.buttonLabel}
        >
          {headerContent.buttonLabel}
        </a>
      </div>
      <div className={styles.heroImageWrapper}>
        <Image
          src={HeroBannerImage}
          alt={headerContent.imageAlt}
          width={400}
          height={450}
          priority={true}
        />
      </div>
    </header>
  );
};

export default Header;
