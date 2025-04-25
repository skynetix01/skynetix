// app/contact/page.jsx
import styles from '../../../styles/contact.module.css';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import ContactForm from '../../../components/ContactForm';

export default function Contact() {
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@skynetix.com';
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || '+1 (555) 123-4567';

  return (
    <div className={styles.contactPage}>
      <section className={styles.spotlightSection}>
        <div className={styles.spotlightContent}>
          <h1 className={styles.spotlightTitle}>Reach Out to Skynetix</h1>
          <p className={styles.spotlightText}>
            Connect with us and let’s spark your next big project.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Send a Message</h2>
            <ContactForm />
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.contactCard}>
              <h3 className={styles.infoTitle}>Reach Out</h3>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Email : </span>
                    <a href="mailto:contact@skynetix.in" className={styles.contactLink}>
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Phone : </span>
                    <a href="tel:+918603093450" className={styles.contactLink}>
                      {contactNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialCard}>
              <h3 className={styles.infoTitle}>Connect Online</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://twitter.com/skynetix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaTwitter className={styles.socialIcon} />
                </a>
                <a
                  href="https://linkedin.com/company/skynetix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin className={styles.socialIcon} />
                </a>
                <a
                  href="https://github.com/skynetix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub className={styles.socialIcon} />
                </a>
                <a
                  href="https://instagram.com/skynetix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}