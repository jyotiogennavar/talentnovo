import React from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";

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
      <div className={styles.headingContainer}>
        <div className={styles.textWrapper}>
          <span>About Us</span>
          <h2>{AboutUsContent.title}</h2>
        </div>
        <div>
          <p>{AboutUsContent.description}</p>
        </div>
      </div>

      <div className={styles.aboutUsGrid}>
        <div>
          <p>Vikram</p>
          <p>Co-founder</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex mollis, porta mauris sit amet, 
          commodo sapien. Fusce vel facilisis enim. Etiam scelerisque dapibus tellus vitae rhoncus. </p>

        </div>
        <div>
          <Image
            src={AboutUsContent.imageSrc}
            alt={AboutUsContent.imageAlt}
            width={500}
            height={500}
          />
        </div>
        <div>
        <p>Vikas Bhatia</p>
          <p>Co-founder</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex mollis, porta mauris sit amet, 
          commodo sapien. Fusce vel facilisis enim. Etiam scelerisque dapibus tellus vitae rhoncus. </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
