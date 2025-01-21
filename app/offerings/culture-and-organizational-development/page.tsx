import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import CTABanner from "@components/CTABanner/CTABanner";

import styles from "@styles/offerings.module.css";

export default function Offering4() {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/offers-baner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.content}>
          <h1>Culture & Organizational Development</h1>
          <p>
            Your organization’s culture is the cornerstone of its success. At
            TalentNovo, we specialize in transforming workplaces into dynamic
            environments where collaboration, innovation, and excellence become
            second nature. Through our tailored cultural development programs,
            we empower teams and leaders to align, engage, and perform at their
            highest potential.
          </p>
        </div>
      </header>
      <section className={styles.contentWrapper}>
        <h3>The Challenge</h3>
        <p>
          Organizations without a strong culture face a host of challenges that
          can hinder growth and performance. Without a unified vision and
          values:
        </p>

        <ul className={styles.list}>
          <li>
            Teams become disengaged, leading to decreased productivity and
            higher turnover rates.
          </li>
          <li>
            A lack of psychological safety stifles creativity and risk-taking.
          </li>
          <li>
            Departments and individuals work in silos, wasting time and
            resources.
          </li>
          <li>
            Leaders struggle to inspire and guide their teams effectively.
          </li>
          <li>
            Weak culture impacts brand perception, making it harder to attract
            top talent and loyal customers.
          </li>
        </ul>
      </section>

      <section className={styles.featureGridWrapper}>
        <div className={styles.headingWrapper}>
          <h2>Build a strong foundation with Culture Design</h2>
          <p>
            Every thriving organization starts with a well-defined culture. Our
            culture design process helps you create a solid foundation that
            drives engagement and growth. Here’s how we do it:
          </p>
        </div>

        <div className={styles.cultureGrid}>
          <div className={styles.featureCard}>
            <h3>Defining Vision and Values</h3>
            <p>
              We work closely with you to define vision statements and core
              values that reflect your organization’s identity and aspirations.
              These become the guiding principles that inspire and align your
              team.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Crafting a Culture Blueprint</h3>
            <p>
              With your values in place, we develop actionable frameworks that
              translate them into daily behaviors and practices. This blueprint
              becomes a roadmap for living your culture.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Leadership Alignment</h3>
            <p>
              A thriving culture starts at the top. Through workshops and
              coaching, we bring your leadership team together, ensuring they
              champion the cultural vision and set the tone for the
              organization.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Implementation Planning</h3>
            <p>
              We help you create a clear and practical plan to embed your
              cultural elements into every aspect of your organization, from
              hiring to daily operations.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.whyWrapper}>
        <h3>Why us?</h3>
        <p>
          We believe lasting change comes from meaningful engagement. By
          combining deep partnerships with data-driven insights, we create
          actionable frameworks that deliver real results. Our approach ensures
          sustainability through regular feedback, practical support, and
          continuous improvement.
        </p>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
