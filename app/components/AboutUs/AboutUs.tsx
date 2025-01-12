import React from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";

import FounderImage1 from "../../../public/images/homePage/founder-image-1.png";
import FounderImage2 from "../../../public/images/homePage/founder-image-2.png";
import Arrow1 from "../../../public/images/homePage/arrow1.svg";
import Arrow2 from "../../../public/images/homePage/arrow2.svg";

const AboutUsContent: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
} = {
  title: "Our Experience Drives Your Success",
  description:
    "With over 30 years of combined experience, we get it—managing talent and keeping teams engaged isn’t always easy. That’s why we offer practical solutions that are built around your unique needs and designed to make a real impact.",
  imageSrc: "/images/about-us.png",
  imageAlt: "Team collaborating on a project",
};

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.container}>
      <div className={styles.aboutUsContent}>
        <div>
          <span className="sectionHeading">About Us</span>
          <h2>{AboutUsContent.title}</h2>
        </div>
        <div className={styles.textWrapper}>
          <p>{AboutUsContent.description}</p>
        </div>
      </div>

      <div className={styles.aboutUsGrid}>
        <div className={styles.founderCard}>
          <div className={styles.founderText}>
            <h4>Vikas</h4>
            <p>Co-founder</p>
            <p className={styles.founderDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              ex mollis, porta mauris sit amet, commodo sapien. Fusce vel
              facilisis enim. Etiam scelerisque dapibus tellus vitae rhoncus. 
            </p>
          </div>

          <div className={styles.founderImage}>
            <Image
              src={Arrow1}
              alt={AboutUsContent.imageAlt}
              width={100}
              height={50}
              className={styles.arrowImage}
            />
            <Image
              src={FounderImage1}
              alt={AboutUsContent.imageAlt}
              width={300}
              height={400}
            />
          </div>
        </div>

        <div className={styles.founderCard}>
          <div className={styles.founderImage}>
          <Image
              src={Arrow2}
              alt={AboutUsContent.imageAlt}
              width={100}
              height={50}
              className={styles.arrowImage}
            />
            <Image
              src={FounderImage2}
              alt={AboutUsContent.imageAlt}
              width={300}
              height={400}
            />
          </div>
          <div className={styles.founderText}>
            <h4>Vikas Bhatia</h4>
            <p>Co-founder</p>
            <p className={styles.founderDescription}>
            Vikas has over 30 years of experience helping leaders and organizations achieve their full potential. An IIT Bombay graduate, he has conducted 150+ leadership programs and 3,000 hours of coaching across industries like tech, pharma, and manufacturing. 
            His mission is to empower leaders to navigate challenges and drive meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
