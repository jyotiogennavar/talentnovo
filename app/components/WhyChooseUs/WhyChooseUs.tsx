import React from "react";
import Image from "next/image";

import styles from "./section.module.css";

// Header content
const BenefitsHeaderContent: { title: string; description: string } = {
  title: "Here’s how we make a Difference",
  description:
    "With over 30 years of combined corporate experience, we understand the challenges organizations face in managing talent and driving engagement. Our firsthand knowledge informs our practical, impactful solutions tailored to your unique needs.",
};

// Benefits cards content
const benefitCards: { title: string; description: string; iconSrc: string }[] =
  [
    {
      title: "Proven Expertise",
      description:
        "Decades of experience in corporate talent management.Lorem ipsum dolor sit amet, consectetur ",
      iconSrc: "/images/icons/feature-1.svg",
    },
    {
      title: "Customized Solutions",
      description:
        "Decades of experience in corporate talent management.Lorem ipsum dolor sit amet, consectetur ",
      iconSrc: "/images/icons/feature-2.svg",
    },
    {
      title: "Innovative Approaches",
      description:
        "Decades of experience in corporate talent management.Lorem ipsum dolor sit amet, consectetur ",
      iconSrc: "/images/icons/feature-3.svg",
    },
  ];

const Benefits = () => {
  return (
    <section>
      {/* Header Section */}
      <div className={styles.textWrapper}>
        <span>Benefits</span>
        <h2>{BenefitsHeaderContent.title}</h2>
        <p>{BenefitsHeaderContent.description}</p>
      </div>

      {/* Benefits Grid */}
      <div className={styles.featuresGrid}>
        {benefitCards.map((benefit, index) => (
          <div key={index} className={styles.feature}>
            <Image
              src={benefit.iconSrc}
              alt={benefit.title}
              width={100}
              height={100}
              priority
            />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;