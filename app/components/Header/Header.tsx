import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

// Define TypeScript type for header content
interface HeaderContent {
  title: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
  imageAlt: string;
}

// Define the header content
const headerContent: HeaderContent = {
  title: "Transform Talent into Impact",
  description:
    "Empower your team to thrive with our proven strategies that boost collaboration, align goals, and unleash potential.",
  buttonLabel: "Schedule a Call",
  imageSrc: "/images/hero-image.png",
  imageAlt: "Hero showing team collaboration",
};

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>{headerContent.title}</h1>
          <p>{headerContent.description}</p>
          <button aria-label={headerContent.buttonLabel}>
            {headerContent.buttonLabel}
          </button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={headerContent.imageSrc}
            alt={headerContent.imageAlt}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
