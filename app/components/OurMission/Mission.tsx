import React from "react";
import Image from "next/image";
import styles from "./mission.module.css";
import MissionImage from "../../../public/images/homePage/our-mission-image.webp";

const missionContent: {
  description: string;
  imageAlt: string;
} = {
  description:
    "We believe in creating workplaces where leadership thrives, teams succeed, and talent feels valued.",
  imageAlt: "Our mission to create thriving workplaces",
};

const Mission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.missionImageWrapper}>
        <Image
          src={MissionImage}
          alt={missionContent.imageAlt}
          fill
          
          loading="lazy"
        />
      </div>
      <div className={styles.missionContent}>
        <span>Our Mission</span>
        <h2>{missionContent.description}</h2>
      </div>
    </section>
  );
};

export default Mission;
