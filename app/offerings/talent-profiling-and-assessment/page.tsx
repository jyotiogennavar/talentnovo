import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import CTABanner from "@components/CTABanner/CTABanner";
import Image from "next/image";

import styles from "@styles/offerings.module.css";

export default function Offering1() {
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
            <h1>Talent Profiling and Assessment</h1>
            <p>
              In today’s fast-paced world, it’s people who drive an organization
              forward. Talent isn’t just an asset—it’s the engine that fuels
              growth, innovation, and customer satisfaction. At TalentNovo, we
              help you tap into the true potential of your talent, ensuring your
              organization thrives at every level.
            </p>
          </div>
        </header>

        <section className={styles.contentWrapper}>
          <h3>The Challenge</h3>
          <p>Organizations often struggle with talent management because of:</p>

          <ul className={styles.list}>
            <li>
              A focus on external skills at the expense of internal development.
            </li>
            <li>Short-term pressures that overshadow long-term goals.</li>
            <li>Misaligned personal values and organizational objectives.</li>
          </ul>
          <p>
            At TalentNovo, we tackle these challenges head-on, offering
            solutions that empower people to thrive and organizations to excel.
          </p>
        </section>

        <section className={styles.featureGridWrapper}>
          <div className={styles.headingWrapper}>
            <h2>Solutions that transform Talent Management</h2>
            <p>
              Our talent profiling and assessment solutions go beyond
              traditional approaches. We provide actionable insights that
              empower organizations to build stronger teams, develop leaders,
              and create a roadmap for sustained success.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>Organizational Talent Mapping</h3>
              <p>
                Get a crystal-clear view of your organizations capabilities and
                future needs with our comprehensive talent mapping.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>Psychometric Assessments</h3>
              <p>
                Understand your peoples preferences, strengths, and leadership
                styles with our advanced psychometric tools.
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>360-Degree Feedback: See Every Angle</h3>
              <p>
                Gather comprehensive feedback from all angles to give leaders a
                complete picture of their performance.
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>Competency Frameworks</h3>
              <p>
                Build clear expectations and measurable outcomes that align with
                your organizational goals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>Dynamic Assessment Centers</h3>
              <p>
                Evaluate talent in action through role-plays, group discussions,
                and real-world simulations.
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/images/icons/check.svg"
                width={40}
                height={40}
                alt="Decorative Checkmark"
                className={styles.checkmark}
              />
              <h3>AI-Powered Insights</h3>
              <p>
                Leverage cutting-edge AI technology for data-driven decisions in
                talent management.
              </p>
            </div>
          </div>
        </section>


        <section className={styles.solutionWrapper}>
          <h2>The TalentNovo Edge</h2>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionGridItem}>
                <h3>Innovation That Works</h3>
                <p>We blend proven methods with cutting-edge AI for smarter, data-driven decisions.</p>
            </div>
            <div className={styles.solutionGridItem}>
                <h3>Tailored Solutions</h3>
                <p>Your challenges are unique, and so are our solutions. Everything we do is customized to your needs.</p>
            </div>
            <div className={styles.solutionGridItem}>
                <h3>Real Results</h3>
                <p>Our clients see measurable improvements in talent identification, succession planning, engagement, and overall performance.</p>
            </div>
          </div>
        </section>

      <CTABanner />
      <Footer />
    </>
  );
}
