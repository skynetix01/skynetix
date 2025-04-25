// app/privacy/page.jsx
import styles from '../../../styles/privacy.module.css'; // Adjusted path if styles/ is one level up
import Link from 'next/link';

export default function PoliciesPage() {
  return (
    <div className={styles.policiesContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.headerTitle}>Skynetix Policies</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Terms and Conditions */}
          <section className={styles.policySection}>
            <h2 className={styles.sectionTitle}>Terms and Conditions</h2>
            <p className={styles.paragraph}>
              Welcome to{' '}
              <Link href="https://skynetix.in" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Skynetix.in
              </Link>{' '}
              (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms and Conditions
              (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) govern your use of our website located at
              Skynetix.in (together or individually &quot;Service&quot;) operated by Aman Kumar.
            </p>
            <p className={styles.paragraph}>
              By accessing and using our Service, you agree to be bound by these Terms. If you disagree with any part
              of the terms, then you may not access the Service.
            </p>

            <h3 className={styles.subSectionTitle}>1. Services</h3>
            <p className={styles.paragraph}>
              We offer web development, design, and related digital services. Specific details of each service will be
              outlined in individual agreements or project proposals.
            </p>

            <h3 className={styles.subSectionTitle}>2. User Responsibilities</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>You agree to provide accurate information and to update it as necessary.</li>
              <li className={styles.listItem}>You are responsible for maintaining the confidentiality of your account information.</li>
              <li className={styles.listItem}>You agree not to use the Service for any unlawful or prohibited activities.</li>
            </ul>

            <h3 className={styles.subSectionTitle}>3. Intellectual Property</h3>
            <p className={styles.paragraph}>
              All content, features, and functionality on the Service are the exclusive property of{' '}
              <Link href="https://skynetix.in" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Skynetix.in
              </Link>{' '}
              and are protected by international copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>

            <h3 className={styles.subSectionTitle}>4. Termination</h3>
            <p className={styles.paragraph}>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h3 className={styles.subSectionTitle}>5. Limitation of Liability</h3>
            <p className={styles.paragraph}>
              In no event shall Skynetix.in, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of
              the Service.
            </p>

            <h3 className={styles.subSectionTitle}>6. Governing Law</h3>
            <p className={styles.paragraph}>
              These Terms shall be governed and construed in accordance with the laws of Bihar, India, without regard to
              its conflict of law provisions.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className={styles.policySection}>
            <h2 className={styles.sectionTitle}>Privacy Policy</h2>
            <p className={styles.paragraph}>
              <Link href="https://skynetix.in" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Skynetix.in
              </Link>{' '}
              (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
            </p>

            <h3 className={styles.subSectionTitle}>1. Information We Collect</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Personal Information:</strong> Name, email address, phone number, etc.
              </li>
              <li className={styles.listItem}>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, etc.
              </li>
              <li className={styles.listItem}>
                <strong>Cookies and Tracking Technologies:</strong> To enhance user experience.
              </li>
            </ul>

            <h3 className={styles.subSectionTitle}>2. How We Use Your Information</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>To provide and maintain our Service.</li>
              <li className={styles.listItem}>To notify you about changes to our Service.</li>
              <li className={styles.listItem}>To provide customer support.</li>
              <li className={styles.listItem}>To gather analysis to improve our Service.</li>
              <li className={styles.listItem}>To monitor usage of our Service.</li>
            </ul>

            <h3 className={styles.subSectionTitle}>3. Sharing Your Information</h3>
            <p className={styles.paragraph}>
              We do not share your personal information with third parties except:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>With your consent.</li>
              <li className={styles.listItem}>To comply with legal obligations.</li>
              <li className={styles.listItem}>To protect and defend our rights and property.</li>
            </ul>

            <h3 className={styles.subSectionTitle}>4. Security</h3>
            <p className={styles.paragraph}>
              We take reasonable measures to protect your personal information but cannot guarantee its absolute security.
            </p>

            <h3 className={styles.subSectionTitle}>5. Your Rights</h3>
            <p className={styles.paragraph}>
              You have the right to access, update, or delete your personal information. To exercise these rights, please
              contact us at{' '}
              <Link href="mailto:amankumar22200245@gmail.com" className={styles.link}>
                amankumar22200245@gmail.com
              </Link>.
            </p>
          </section>

          {/* Refund Policy */}
          <section className={styles.policySection}>
            <h2 className={styles.sectionTitle}>Refund Policy</h2>
            <p className={styles.paragraph}>
              All services are full and final. We do not provide any refunds under any circumstances.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}