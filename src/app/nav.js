// components/Nav.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from '../../styles/nav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/assets/logo.png" alt="Skynetix Logo" width={100} height={40} className={styles.logo} priority />
        </Link>
        <button className={styles.hamburger} onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.navMenu} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/services"
              className={`${styles.navLink} ${pathname.startsWith('/services') ? styles.active : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/our-work"
              className={`${styles.navLink} ${pathname === '/our-work' ? styles.active : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Our Work
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}