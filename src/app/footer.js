// components/Footer.jsx
import Link from 'next/link';
import styles from '../../styles/footer.module.css';

export default function Footer() {
  // Fallback values for environment variables
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@skynetix.com';
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || '+1 (555) 123-4567';
  const address = process.env.NEXT_PUBLIC_ADDRESS || 'Not provided';
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Skynetix</h3>
          <p className={styles.footerText}>
            Delivering innovative digital solutions to empower your business.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/services" className={styles.footerLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/our-work" className={styles.footerLink}>
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerText}>Email: {emailAddress}</p>
          <p className={styles.footerText}>Phone: {contactNumber}</p>
          <p className={styles.footerText}>Address: {address}</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Skynetix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}