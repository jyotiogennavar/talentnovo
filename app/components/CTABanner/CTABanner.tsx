import React from "react";
import Image from "next/image";

import styles from "./banner.module.css";

const CTABanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.textWrapper}>
        <h2>Ready to transform your organization?</h2>
        <p>
          Get in touch with us today to learn how we can help you drive
          engagement and improve your bottom line.
        </p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/cta-banner.svg"
          alt="CTA Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default CTABanner;