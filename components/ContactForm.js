// components/ContactForm.jsx
'use client';
import { useState } from 'react';
import styles from '../styles/contact.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          required
        />
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          required
        />
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
      </div>
      <div className={styles.formGroup}>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className={styles.textarea}
          required
        ></textarea>
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
      {status && <p className={styles.formStatus}>{status}</p>}
    </form>
  );
}