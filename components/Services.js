import styles from "./Services.module.css";
import Image from "next/image";

const services = [
  {
    title: "პაკეტი I",
    features: [
      "12 პოსტი თვეში (კვირაში 3)",
      "ტექსტის დაწერა",
      "ვიზუალის დიზაინი",
      "რეკლამის ბიუჯეტი ცალკე",
    ],
    icon: "/globe_uk.png",
    width: 26,
    height: 26,
  },
  {
    title: "პაკეტი II",
    features: [
      "Facebook + Instagram + TikTok",
      "16 პოსტი თვეში",
      "4 Reels და Short ვიდეო",
      "(პაკეტი 1 სრულად)",
      "რეკლამის ბიუჯეტი ცალკე.",
    ],
    icon: "/campaign(2).png",
    width: 26,
    height: 21,
  },
  {
    title: "პაკეტი III",
    features: [
      "ყველა სოციალური პლატფორმა",
      "20+ პოსტი",
      "რეკლამის სრული მართვა (Meta + TikTok)",
      "საიტის აწყობა",
      "ჩატბოტის დაყენება",
      "პაკეტი (1,2) სრულად.",
      "რეკლამის ბიუჯეტი ცალკე.",
    ],
    icon: "/smart_display.png",
    width: 26,
    height: 21,
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
            <div className={styles.icon}>
              <Image
                src={service.icon}
                width={service.width}
                height={service.height}
                alt="Icon"
              />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <ul className={styles.cardFeatures}>
              {service.features.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <a href="#" className={styles.link}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
