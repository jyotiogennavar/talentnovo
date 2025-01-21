import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import CTABanner from "@components/CTABanner/CTABanner";

import styles from "@styles/offerings.module.css";
import {
  BicepsFlexed,
  SignalHigh,
  Handshake,
  Scale,
  CircleFadingArrowUp,
} from "lucide-react";

export default function Offering3() {
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
          <h1>Strategic Coaching & Mentoring</h1>
          <p>
            In today’s fast-paced world, exceptional leadership isn’t just a
            skill—it’s the cornerstone of organizational success. At TalentNovo,
            we specialize in coaching and mentoring programs that transform
            leaders, build stronger teams, and empower organizations to thrive.
          </p>
        </div>
      </header>

      <section className={styles.contentWrapper}>
        <h3>Why Choose Us?</h3>
        <p>
          We don’t just teach leadership—we’ve lived it. Our founders, with
          decades of corporate leadership experience, including CEO and MD
          roles, understand the complexities leaders face today. Our approach
          combines real-world insights with tailored coaching to ensure
          meaningful and lasting transformation.
        </p>
        <h4>
         What Makes Us Different?
        </h4>
        <ul className={styles.list}>
          <li>
            Proven Expertise: Vivek is a Gallup Strengths-certified coach, while
            Vikas holds an ICF ACC credential. Together, they bring hundreds of
            coaching hours and extensive experience mentoring executives.
          </li>
          <li>
            Real-World Perspective: From engineering leadership to CXO
            mentoring, we’ve navigated challenges across industries.
          </li>
          <li>
            Tailored Solutions: Every leader’s journey is unique, and our
            programs are designed to reflect that.
          </li>
        </ul>
      </section>

      <section className={styles.featureGridWrapper}>
        <h2>How We Work</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Discovery and Goal Setting</h3>
            <p>
              We start by understanding your leadership style, personal values,
              and aspirations. Through psychometric assessments, 360-degree
              feedback, and a deep dive into your challenges, we identify key
              goals to shape your journey.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Tailored Development Plans</h3>
            <p>
              Your coaching is fully personalized, featuring one-on-one
              sessions, real-time support for challenges, and progress tracking.
              Regular feedback ensures you stay on course and achieve meaningful
              results.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Advanced Tools and Techniques</h3>
            <p>
              We use a mix of psychometric assessments, action-learning
              projects, and digital tools to make your development practical,
              engaging, and accessible.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.solutionWrapper}>
        <h2>The TalentNovo Edge</h2>
        <div className={styles.edgeGrid}>
          <div className={styles.solutionGridItem}>
            <BicepsFlexed size={30} className={styles.icon} />
            <h3>Stronger decision-making capabilities.</h3>
          </div>
          <div className={styles.solutionGridItem}>
            <SignalHigh size={30} className={styles.icon} />
            <h3>Higher team engagement and morale.</h3>
          </div>
          <div className={styles.solutionGridItem}>
            <Handshake size={30} className={styles.icon} />
            <h3>Clearer communication and stakeholder relationships.</h3>
          </div>
          <div className={styles.solutionGridItem}>
            <Scale size={30} className={styles.icon} />
            <h3>A better balance between professional and personal life.</h3>
          </div>
          <div className={styles.solutionGridItem}>
            <CircleFadingArrowUp size={30} className={styles.icon} />
            <h3>Enhanced confidence and job satisfaction.</h3>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
