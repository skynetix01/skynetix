// components/Projects.jsx
import styles from '../styles/Home.module.css'; // Aligned with Home and Services CSS module path
import Image from 'next/image';
import Link from 'next/link';

export const projectsData = [
  {
    name: 'motion-view-ventures',
    title: 'Motion View Ventures Website',
    highlights: [
      'Fully responsive design across devices',
      'Admin dashboard for salary & attendance',
      'Modern and intuitive user interface',
      'Scalable architecture for future growth',
    ],
    image: '/assets/work/w1.png', // Path relative to /public
    url: true,
    link: 'https://motionviewventures.in',
  },
  {
    name: 'webxprt-website',
    title: 'WebXPRT Website',
    highlights: [
      'Tailored for digital marketing excellence',
      'SEO-optimized structure',
      'Engaging and bold visual design',
      'Integrated Email Services',
    ],
    image: '/assets/work/w2.png', // Path relative to /public
    url: true,
    link: 'https://webxprt.in',
  },
  {
    name: 'graphic-designing',
    title: 'Graphic Designing Project',
    highlights: [
      'Custom branding and logo creation',
      'High-quality social media graphics',
      'Versatile print and digital assets',
      'Creative design for marketing campaigns',
    ],
    image: '/assets/work/g7.png', // Path relative to /public
    url: false,
    link: '/our-work',
  },
];

export const Projects = () => {
  return (
    <div className={styles.ourWorkFlex}>
      {projectsData.map((project) => (
        <div key={project.name} className={styles.projectCard}>
          <Image
            src={project.image}
            alt={project.title}
            width={300} // Adjust based on your design
            height={200} // Adjust based on your design
            className={styles.projectImage}
            priority={project.name === 'motion-view-ventures'} // Optional: prioritize first image for LCP
          />
          <div className={styles.projectDetails}>
            <h3>{project.title}</h3>
            <div className={styles.projectHighlights}>
              {project.highlights.map((highlight, index) => (
                <div key={index} className={styles.projectHighlightItem}>
                  <span className={styles.highlightIcon}>✨</span>
                  <span className={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
            {project.url ? (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Website
              </Link>
            ) : (
              <Link href={project.link}>
                <p className={styles.projectLink}>View More</p>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;