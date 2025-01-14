import React from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";

import FounderImage1 from "../../../public/images/homePage/vikas.webp";
import FounderImage2 from "../../../public/images/homePage/vivek.webp";

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
            <p className={styles.founderName}>Vikas Bhatia</p>
            <p>Founder & Leadership Coach</p>
            <p className={styles.founderDescription}>
            Vikas has over 30 years of experience helping leaders and organizations achieve their full potential. An IIT Bombay graduate, he has conducted 150+ leadership programs and 3,000 hours of coaching across industries like tech, pharma, and manufacturing. <br /> His mission is to empower leaders to navigate challenges and drive meaningful change. 
            </p>
          </div>

          <div className={styles.founderImageWrapper}>
            <div className={styles.founderImageBorder}>
              <Image
              src={FounderImage1}
              alt={AboutUsContent.imageAlt}
              width={280}
              height={400}
              loading="lazy"
              className={styles.founderImage}
            />
            </div>
            
          </div>
        </div>

        <div className={styles.founderCard}>
          <div className={styles.founderImageWrapper}>
            <div className={styles.founderImageBorder}>
              <Image
                src={FounderImage2}
                alt={AboutUsContent.imageAlt}
                width={280}
                height={400}
                loading="lazy"
                className={styles.founderImage}
              />
            </div>
          </div>
          <div className={styles.founderText}>
            <p className={styles.founderName}>Vivek Mohile</p>
            <p>Founder & Leadership Coach</p>
            <p className={styles.founderDescription}>
            With over two decades of corporate experience at companies like Infosys and Hewlett Packard, Vivek specializes in leadership development and organizational transformation. As a certified Gallup Strengths Coach and SAFe Program Consultant, he blends industry expertise with innovative methodologies to drive meaningful change. <br /> Vivek’s mission is to help leaders and teams unlock their potential while fostering growth, collaboration, and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
