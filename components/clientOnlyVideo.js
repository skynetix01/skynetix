"use client";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';

export const ClientOnlyVideo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

//   if (!isMounted) return null;

  return (
    <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  );
};
