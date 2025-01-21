import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import CTABanner from "@components/CTABanner/CTABanner";
import Head from "next/head";

import styles from "@styles/offerings.module.css";
import {
  Award,
  Zap,
  Heart,
  Smile,
  Shield,
  Lightbulb,
  BookOpen,
} from "lucide-react";

export default function Offering2() {
  return (
    <>
      <Head>
        <title>Transform your leadership and drive organizational success | Talent Novo</title>
        <meta name="description" content="Ready to lead with impact? Our Leadership Development program helps you build resilient leaders, inspire teams, and create a culture of innovation. Take the first step today." />
      </Head>
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
          <h1>Effective Leadership Development</h1>
          <p>
            At TalentNovo, we believe leadership is more than just a role—it’s a
            journey of self-discovery and impact. Our Leading with Inner Wealth
            program is designed to redefine leadership by focusing on the
            internal dimensions that drive lasting success. This is more than a
            program; it’s a transformative experience that empowers leaders to
            unlock their full potential and inspire their teams.
          </p>
        </div>
      </header>
      <section className={styles.contentWrapper}>
        <h3>The Challenges Leaders Face Today</h3>
        <p>
          Leadership isn’t easy in today’s fast-paced, ever-changing business
          environment. Leaders are expected to:
        </p>

        <ul className={styles.list}>
          <li>Navigate high-pressure decision-making.</li>
          <li>Engage and motivate diverse teams.</li>
          <li>Balance personal well-being with professional demands.</li>
          <li>Drive innovation and manage change effectively.</li>
        </ul>
        <p>
          Many organizations overemphasize external techniques and overlook the
          importance of inner development. This disconnect leads to burnout,
          misalignment, and missed opportunities for authentic leadership.
        </p>
      </section>

      <section className={styles.featureGridWrapper}>
        <div className={styles.headingWrapper}>
          <h2>Our Core Philosophy</h2>
          <p>
            Leadership is most powerful when it comes from within. Our program
            is built on the Seven Inner Wealth Assets, each a critical component
            of effective leadership:
          </p>
        </div>

        <div className={styles.wealthGrid}>
          <div className={`${styles.featureCard} ${styles.g1}`}>
            <Award size={30} className={styles.icon} />
            <h3>Peace</h3>
            <p>For stable decision-making</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g2}`}>
            <Zap size={30} className={styles.icon} />
            <h3>Joy</h3>
            <p>For creating positive work environments</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g3}`}>
            <Heart size={30} className={styles.icon} />
            <h3>Love</h3>
            <p>For building authentic relationships</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g4}`}>
            <Smile size={30} className={styles.icon} />
            <h3>Enthusiasm</h3>
            <p>For energizing teams</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g5}`}>
            <Shield size={30} className={styles.icon} />
            <h3>Courage</h3>
            <p>For bold and visionary leadership</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g6}`}>
            <Lightbulb size={30} className={styles.icon} />
            <h3>Belief</h3>
            <p>For inspiring confidence</p>
          </div>
          <div className={`${styles.featureCard} ${styles.g7}`}>
            <BookOpen size={30} className={styles.icon} />
            <h3>Curiosity</h3>
            <p>For driving innovation</p>
          </div>
        </div>
      </section>

      <section className={styles.solutionWrapper}>
        <h2>The difference we deliver</h2>
        <p>Our focus on the inner resources forms the foundation of effective leadership. The program blends timeless wisdom with modern practices to foster resilience, authenticity, and growth. By supporting both personal and professional development, we help leaders succeed in any situation.</p>
        <div className={styles.solutionGrid}>
          <div className={styles.solutionGridItem}>
            <h3>Personal Growth</h3>
            <p>Experience reduced stress, improved resilience, and greater emotional intelligence. Develop self-awareness and align your goals with a deeper sense of purpose.</p>
          </div>
          <div className={styles.solutionGridItem}>
            <h3>Leadership Impact</h3>
            <p>Make better decisions under pressure, engage your team effectively, and communicate with authenticity and impact.</p>
          </div>
          <div className={styles.solutionGridItem}>
            <h3>Organizational Benefits</h3>
            <p>Boost team performance, foster innovation, and create a positive workplace culture that improves engagement and retention.</p>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
