import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import HeroBannerImage from "../../../public/images/homePage/talentnovo-banner-image.webp";

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
          <button className={styles.heroButton} aria-label={headerContent.buttonLabel}>
            {headerContent.buttonLabel}
          </button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={HeroBannerImage}
            alt={headerContent.imageAlt}
            width={500}
            height={550}
            priority
          />
        </div>
    </header>
  );
};

export default Header;
