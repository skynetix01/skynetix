// app/services/[id]/page.jsx
import styles from '../../../../styles/serviceDetail.module.css';
import Image from 'next/image';

export const servicesData = {
  'digital-marketing': {
    title: 'Digital Marketing Services',
    subtitle: 'Driving your brand’s growth through strategic online campaigns.',
    description: `
      At Skynetix, our Digital Marketing Services are tailored to amplify your online presence and boost conversions. We craft targeted campaigns using PPC, email marketing, and social media advertising to reach your audience effectively. Our data-driven approach ensures every strategy is optimized for measurable results, helping your business grow in a competitive digital landscape. From campaign planning to analytics, we handle it all with precision and creativity.
    `,
    pricing: '₹2,000 - ₹20,000+',
    examples: [
      { src: '/work/placeholder1.png', caption: 'PPC Ad Campaign' },
      { src: '/work/placeholder2.png', caption: 'Email Marketing Funnel' },
      { src: '/work/placeholder3.png', caption: 'Social Media Ads' },
    ],
  },
  'website-development': {
    title: 'Website Development Services',
    subtitle: 'Building your digital presence with precision and creativity.',
    description: `
      Our Website Development Services at Skynetix deliver powerful, responsive, and visually stunning websites tailored to your business goals. Whether it’s an e-commerce platform, a corporate site, or a custom CMS solution, we use cutting-edge technologies like React, Node.js, and modern frameworks to ensure your site is fast, secure, and scalable. We collaborate closely with you to design, develop, and test a website that stands out and performs flawlessly.
    `,
    pricing: '₹5,000 - ₹25,000+',
    examples: [
      { src: '/work/w1.png', caption: 'Motion View Ventures Website' },
      { src: '/work/w2.png', caption: 'WebXPRT Website' },
      { src: '/work/w3.png', caption: 'Skynetix Website' },
    ],
  },
  'graphic-designing': {
    title: 'Graphic Designing Services',
    subtitle: 'Creating visuals that define your brand’s identity.',
    description: `
      Skynetix’s Graphic Designing Services bring your brand to life with stunning visuals. From logos and branding materials to social media graphics and print designs, we create eye-catching assets that resonate with your audience. Using tools like Adobe Illustrator and Photoshop, our designers craft bespoke solutions that enhance your marketing efforts and leave a lasting impression.
    `,
    pricing: '₹1,000 - ₹10,000+',
    examples: [
      { src: '/work/g7.png', caption: 'Moti Mahal Delux Motihari Branch Advertisement' },
      { src: '/work/g11.png', caption: 'Happy Foli Festival Travel Safety Campaign' },
      { src: '/work/g19.png', caption: 'Spicy Tandoori Chicken with Masala Promo' },
    ],
  },
  'seo-services': {
    title: 'SEO Services',
    subtitle: 'Boosting your visibility on search engines.',
    description: `
      Our SEO Services at Skynetix are designed to elevate your website’s ranking on search engines. We conduct in-depth keyword research, optimize on-page and off-page elements, and build high-quality backlinks to improve your visibility. Our strategies are tailored to your industry, ensuring sustainable growth in organic traffic and a stronger online presence.
    `,
    pricing: '₹1,500 - ₹15,000+',
    examples: [
      { src: '/work/placeholder4.png', caption: 'Keyword Optimization' },
      { src: '/work/placeholder5.png', caption: 'Backlink Campaign' },
      { src: '/work/placeholder6.png', caption: 'Local SEO Success' },
    ],
  },
  'social-media-management': {
    title: 'Social Media Management',
    subtitle: 'Engaging your audience across platforms.',
    description: `
      Skynetix’s Social Media Management services help you build a vibrant online community. We handle content creation, scheduling, and posting across platforms like Instagram, Twitter, and LinkedIn, while engaging your audience with tailored strategies. Our analytics-driven approach ensures consistent growth and stronger brand loyalty.
    `,
    pricing: '₹1,000 - ₹12,000+',
    examples: [
      { src: '/work/placeholder7.png', caption: 'Instagram Campaign' },
      { src: '/work/placeholder8.png', caption: 'Twitter Engagement' },
      { src: '/work/placeholder9.png', caption: 'LinkedIn Strategy' },
    ],
  },
  'content-creation': {
    title: 'Content Creation Services',
    subtitle: 'Crafting compelling stories for your brand.',
    description: `
      Our Content Creation Services at Skynetix produce high-quality, SEO-optimized content to engage your audience. From blog posts and articles to videos and infographics, we create materials that inform, entertain, and convert. Our team collaborates with you to align content with your marketing goals, driving traffic and building authority.
    `,
    pricing: '₹800 - ₹8,000+',
    examples: [
      { src: '/work/placeholder10.png', caption: 'Blog Post Series' },
      { src: '/work/placeholder11.png', caption: 'Video Explainer' },
      { src: '/work/placeholder12.png', caption: 'Infographic Design' },
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Crafting intuitive experiences that captivate and convert.',
    description: `
      Our UI/UX Design service focuses on creating user-centered interfaces that are both beautiful and functional. We dive deep into understanding your users’ needs, designing wireframes, prototypes, and final interfaces that enhance usability and engagement. Whether it’s a mobile app, website, or software dashboard, we use tools like Figma and Adobe XD to bring your vision to life with pixel-perfect precision. Our iterative process ensures every design is tested and refined to deliver an exceptional user experience.
    `,
    pricing: '₹3,000 - ₹15,000+',
    examples: [
      { src: '/work/placeholder13.png', caption: 'Mobile App Interface' },
      { src: '/work/placeholder14.png', caption: 'Website Redesign' },
      { src: '/work/placeholder15.png', caption: 'Dashboard UI' },
    ],
  },
};

import ServiceRequestForm from '../../../../components/ServiceRequestForm';

export default function ServiceDetail({ params }) {
  const { id } = params;
  const service = servicesData[id] || servicesData['web-dev']; // Fallback to Web Development

  return (
    <div className={styles.serviceDetailPage}>
      <section className={styles.focusSection}>
        <div className={styles.focusContent}>
          <h1 className={styles.focusTitle}>{service.title}</h1>
          <p className={styles.focusSubtitle}>{service.subtitle}</p>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.infoText}>{service.description}</p>
          <h3 className={styles.subTitle}>Pricing Range</h3>
          <p className={styles.pricingText}>
            Our {service.title} services range from <strong>{service.pricing}</strong>, depending on project complexity and requirements.
          </p>
        </div>
      </section>

      <section className={styles.examplesSection}>
        <div className={styles.examplesContainer}>
          <h2 className={styles.sectionTitle}>Examples of Our Work</h2>
          <div className={styles.examplesGrid}>
            {service.examples.map((example, index) => (
              <div key={index} className={styles.exampleItem} style={{ animationDelay: `${index * 0.2}s` }}>
                <Image
                  src={example.src}
                  alt={example.caption}
                  width={400}
                  height={300}
                  className={styles.exampleImage}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk71F2gAAAABJRU5ErkJggg=="
                />
                <p className={styles.exampleCaption}>{example.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.requestSection}>
        <div className={styles.requestContainer}>
          <h2 className={styles.sectionTitle}>Request This Service</h2>
          <ServiceRequestForm serviceTitle={service.title} />
        </div>
      </section>
    </div>
  );
}