// app/about/page.jsx
import styles from '../../../styles/About.module.css'; // Adjusted to app/styles/about.module.css
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.section} ${styles.visible}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Skynetix</h1>
          <p className={styles.heroSubtitle}>
            Pioneering the future of technology with innovation and passion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`${styles.missionSection} ${styles.section} ${styles.visible}`}>
        <div className={styles.missionContainer}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p className={styles.missionText}>
          Skynetix is a dynamic team of tech enthusiasts committed to delivering impactful solutions.
          We blend creativity, strategy, and technology to help our clients grow in the digital age.
          </p>
          <div className={styles.valuesGrid}>
            <div>
              <h3>🚀 Innovation</h3>
              <p>We thrive on pushing the boundaries of technology.</p>
            </div>
            <div>
              <h3>🏆 Excellence</h3>
              <p>Delivering high-quality solutions is our top priority.</p>
            </div>
            <div>
              <h3>🤝 Collaboration</h3>
              <p>We believe in the power of working together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.teamSection} ${styles.section} ${styles.visible}`}>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <Image
              src="/assets/aman.jpeg"
              alt="Aman Kumar"
              width={200} // Adjust based on design
              height={200} // Adjust based on design
              className={styles.teamImage}
              priority
            />
            <h3 className={styles.teamName}>Aman Kumar</h3>
            <p className={styles.teamRole}>CTO & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/assets/priya.png"
              alt="Priya Gupta"
              width={200} // Adjust based on design
              height={200} // Adjust based on design
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>Priya Gupta</h3>
            <p className={styles.teamRole}>Graphic Designer & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/assets/sunny.png"
              alt="Sunny Singh"
              width={200} // Adjust based on design
              height={200} // Adjust based on design
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>Sunny Singh</h3>
            <p className={styles.teamRole}>CMO & Co-Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}