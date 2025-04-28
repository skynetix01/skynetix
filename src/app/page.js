import styles from '../../styles/Home.module.css';
import { Services } from '../../components/serviceDetail';
import { Projects } from '../../components/projectData';
import { ClientOnlyVideo } from '../../components/clientOnlyVideo';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@skynetix.com';
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || '+1 (555) 123-4567';

  return (
    <div className={styles.home}>
      {/* Main Section */}
      <section className={`${styles.mainSection} ${styles.visible}`}>
        <ClientOnlyVideo/>
       
        <div className={styles.videoOverlay}></div>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Welcome to Skynetix</h1>
          <p className={styles.mainSubtitle}>Innovative Solutions for Your Digital Needs</p>
          <Link href="/services">
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </div>
      </section>

      {/* Updated About Us Section */}
      <section className={`${styles.aboutSection} ${styles.visible}`}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutImageWrapper}></div>
            <div className={styles.aboutTextWrapper}>
              <p className={styles.aboutDescription}>
                At Skynetix, we’re a dedicated team of innovators, designers, and developers committed
                to transforming your ideas into powerful digital solutions. With a passion for
                technology and a focus on excellence, we’ve been helping businesses thrive in the
                digital landscape since our inception.
              </p>
              <p className={styles.aboutMission}>
                <strong>Our Mission:</strong> To empower businesses and individuals with
                cutting-edge tools and creative solutions that drive growth, enhance user
                experiences, and shape the future of technology.
              </p>
              <div className={styles.aboutHighlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>5+</span>
                  <span className={styles.highlightLabel}>Years of Experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>50+</span>
                  <span className={styles.highlightLabel}>Projects Delivered</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>100%</span>
                  <span className={styles.highlightLabel}>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.servicesSection} ${styles.visible}`}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <Services />
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.whyChooseUsSection} ${styles.visible}`}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <div className={styles.whyChooseUsFlex}>
          <div className={styles.whyChooseUsCard}>
            <div className={styles.whyChooseUsIcon}>🧠</div>
            <h3 className={styles.whyChooseUsTitle}>Unmatched Expertise</h3>
            <p className={styles.whyChooseUsText}>
              Our team brings years of industry experience, ensuring top-tier solutions tailored
              to your unique needs.
            </p>
          </div>
          <div className={styles.whyChooseUsCard}>
            <div className={styles.whyChooseUsIcon}>🏆</div>
            <h3 className={styles.whyChooseUsTitle}>Quality Assurance</h3>
            <p className={styles.whyChooseUsText}>
              We prioritize excellence, delivering reliable, high-quality products that exceed
              expectations.
            </p>
          </div>
          <div className={styles.whyChooseUsCard}>
            <div className={styles.whyChooseUsIcon}>🤝</div>
            <h3 className={styles.whyChooseUsTitle}>Dedicated Support</h3>
            <p className={styles.whyChooseUsText}>
              Around-the-clock assistance to keep your projects on track and your business
              thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className={`${styles.ourWorkSection} ${styles.visible}`}>
        <h2 className={styles.sectionTitle}>Our Work</h2>
        <Projects />
        <div className={styles.seeMoreSection}>
          <p className={styles.seeMoreText}>
            Want to explore more of our creative solutions?
          </p>
          <Link href="/our-work">
            <p className={styles.seeMoreLink}>See More Our Works</p>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.contactSection} ${styles.visible}`}>
        <div className={styles.contactContainer}>
          <div className={styles.contactFormSide}>
            <h2 className={styles.sectionTitle}>Let’s Connect</h2>
            <p className={styles.contactSubtitle}>Reach out and let us bring your vision to life.</p>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={styles.input}
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>Name</label>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className={styles.input}
                  required
                />
                <label htmlFor="email" className={styles.formLabel}>Email</label>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className={styles.textarea}
                  required
                ></textarea>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
              </div>
              <button type="submit" className={styles.submitButton}>Send Your Message</button>
            </form>
          </div>
          <div className={styles.contactDetailsSide}>
            <div className={styles.contactCard}>
              <h3 className={styles.contactCardTitle}>Contact Info</h3>
              <div className={styles.contactDetail}>
                <FaEnvelope className={styles.contactIcon} />
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <Link href="mailto:contact@skynetix.in" className={styles.contactLink}>{emailAddress}</Link>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <FaPhone className={styles.contactIcon} />
                <div>
                  <span className={styles.contactLabel}>Phone</span>
                  <Link href="tel:+918603093450" className={styles.contactLink}>{contactNumber}</Link>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Connect With Us</h4>
                <div className={styles.socialIcons}>
                  <Link href="https://twitter.com/skynetix" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaTwitter className={styles.socialIcon} />
                  </Link>
                  <Link href="https://linkedin.com/company/skynetix" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaLinkedin className={styles.socialIcon} />
                  </Link>
                  <Link href="https://github.com/skynetix" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaGithub className={styles.socialIcon} />
                  </Link>
                  <Link href="https://instagram.com/skynetix" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaInstagram className={styles.socialIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}