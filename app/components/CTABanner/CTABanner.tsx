import React from "react";

import styles from "./banner.module.css";

const CTABanner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <h2>Let’s Build the Workforce of Tomorrow</h2>
        <div className={styles.textWrapper}>
          <p>
            Are you ready to unlock your organization’s full potential? We’re
            here to guide you every step of the way. Together, let’s create a
            future-ready workforce.
          </p>
          <a
            href="mailto:vikasb@talentnovo.com"
            className={styles.ctaButton}
            aria-label="Schedule a Call"
          >
            Schedule A Call
          </a>
          {/* <button className={styles.ctaButton}>Schedule A Call</button> */}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
