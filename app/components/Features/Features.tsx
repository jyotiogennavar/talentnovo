import React from "react";
// import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import styles from "./feature.module.css";

// Header content
const featureHeaderContent: { title: string; description: string } = {
  title: "Bring out the best in your teams with our support",
  description:
    "We provide tailored talent solutions to help organizations like yours grow stronger and more agile. Here's how we can support you",
};

// Feature cards content
const featureCards: { title: string; description: string; iconSrc: string; link: string }[] =
  [
    {
      title: "Leadership Development",
      description:
        "Equip leaders with the skills and confidence to inspire and succeed. Leaders leave with practical strategies they can apply immediately to drive results and build high-performing teams.",
      iconSrc: "/images/icons/up-arrow.svg",
      link: "/offerings/leadership-development",
    },
    {
      title: "Strategic Coaching & Mentoring",
      description:
        "Empower teams to collaborate effectively and achieve shared goals. Our programs help teams perform at their best by addressing group dynamics and fostering collective growth.",
      iconSrc: "/images/icons/compass.svg",
      link: "/offerings/strategic-coaching-and-mentoring",
    },
    {
      title: "Shaping Workplace Culture",
      description:
        "Shape a strong, collaborative workplace culture aligned with your goals. We help create environments where innovation and productivity flourish by fostering trust and engagement.",
      iconSrc: "/images/icons/connect.svg",
      link: "/offerings/culture-and-organizational-development",
    },
    {
      title: "Talent Profiling & Assessment",
      description:
        "Use advanced tools to identify strengths, challenges, and potential. Our assessments provide actionable data that supports recruitment, development, and succession planning.",
      iconSrc: "/images/icons/magnifying-glass.svg",
      link: "/offerings/talent-profiling-and-assessment",
    },
  ];

const Features = () => {
  return (
    <section className={styles.container} id="features">
      {/* Header Section */}

      <div className={styles.textWrapper}>
        <span className="sectionHeading">How we help</span>
        <h2>{featureHeaderContent.title}</h2>
        <p>{featureHeaderContent.description}</p>
      </div>

      {/* Features Grid */}
      <div className={styles.featuresGrid}>
        {featureCards.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            {/* <Image
              src={feature.iconSrc}
              alt={feature.title}
              className={styles.featureIcon}
              width={200}
              height={200}
            /> */}
            <div className={styles.featureContent}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <Link href={feature.link}>Know More</Link>
              <ArrowRight color="rgb(4, 4, 149)" size={20}/>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
