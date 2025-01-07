import React from "react";
import Image from "next/image";

import styles from "./feature.module.css";

// Header content
const featureHeaderContent: { title: string; description: string } = {
  title: "Bring out the best in your teams with our support",
  description:
    "We provide tailored talent solutions to help organizations like yours grow stronger and more agile. Here's how we can support you",
};

// Feature cards content
const featureCards: { title: string; description: string; iconSrc: string }[] =
  [
    {
      title: "Talent Management Solutions",
      description:
        "We design strategies that align with your business goals and make the most of your team’s unique strengths. Let us help you create a culture where everyone can thrive.",
      iconSrc: "/images/icons/feature-1.svg",
    },
    {
      title: "Workforce Transformation",
      description:
        "Change is inevitable. Build resilient teams that deliver outstanding results, even in challenging environments.",
      iconSrc: "/images/icons/feature-2.svg",
    },
    {
      title: "Leadership Development",
      description:
        "Great leaders drive great organizations. We help you identify and nurture leaders who inspire their teams and achieve meaningful outcomes.",
      iconSrc: "/images/icons/feature-3.svg",
    },
    {
      title: "Employee Engagement",
      description:
        "Motivated employees are the heart of a thriving workplace. We’ll help you create an environment where people feel valued, connected, and driven to succeed.",
      iconSrc: "/images/icons/feature-4.svg",
    },
  ];

const Features = () => {
  return (
    <section>
      {/* Header Section */}
      <div className={styles.textWrapper}>
        <span>Features</span>
        <h2>{featureHeaderContent.title}</h2>
        <p>{featureHeaderContent.description}</p>
      </div>

      {/* Features Grid */}
      <div className={styles.featuresGrid}>
        {featureCards.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <Image
              src={feature.iconSrc}
              alt={feature.title}
              width={100}
              height={100}
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
