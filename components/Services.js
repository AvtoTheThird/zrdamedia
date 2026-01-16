import styles from "./Services.module.css";

const services = [
  {
    title: "Social Media Management",
    description:
      "Build a strong, consistent presence across platforms with content that engages and converts.",
    icon: "🌎",
  },
  {
    title: "Paid Advertising",
    description:
      "High-performing ad campaigns on Meta, Google, and TikTok designed to drive measurable ROI.",
    icon: "📢",
  },
  {
    title: "Content Creation",
    description:
      "Scroll-stopping visuals, videos, and copy tailored to your brand and audience.",
    icon: "▶️",
  },
  {
    title: "Brand Strategy",
    description:
      "Define your brand's voice, positioning, and message to stand out in a crowded market.",
    icon: "🧭",
  },
  {
    title: "Influencer Marketing",
    description:
      "Partner with creators that align with your brand to build trust and reach new audiences.",
    icon: "👥",
  },
  {
    title: "Analytics & Growth",
    description:
      "Track performance, optimize campaigns, and scale what works using real data.",
    icon: "📊",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <div className={styles.label}>Our Services</div>
        <h2 className={styles.headline}>
          Everything You Need to Succeed Online
        </h2>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <a href="#" className={styles.link}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
