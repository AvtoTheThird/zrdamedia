import styles from "./Hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Image src="/Frame 2610308.png" width={32} height={32} alt="Icon 1" />
          <div className={styles.badgeText}>
            <span>50+ Happy Clients</span>
            <span>
              {`Read `}
              <a href="#" className={styles.badgeLink}>
                Our Stories
              </a>
            </span>
          </div>
        </div>

        <h1 className={styles.headline}>
          We Help Brands <br />
          <span className={styles.highlight}>Grow Online</span>
        </h1>
        <hr className={styles.hr} />
        <p className={styles.subheadline}>
          Strategic social media management, targeted advertising, and
          data-driven marketing solutions to elevate your digital presence.
        </p>

        <div className={styles.growthBadge}>
          <Image src="/Frame 2610306.png" width={48} height={48} alt="Icon 1" />
          <div className={styles.growthText}>
            <div className={styles.growthTitle}>Growth Focused</div>
            <div className={styles.growthSubtitle}>Result that matter</div>
          </div>
        </div>
        <hr className={styles.hr} />

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Book A Call</button>
          <a href="#" className={styles.secondaryLink}>
            Explore Our Services →
          </a>
        </div>
      </div>

      <div className={styles.visuals}>
        <div className={styles.floatingIcons}>
          <div className={styles.iconCircle}>
            <Image src="/campaign(1).png" width={40} height={32} alt="Icon 1" />
          </div>
          <div className={styles.iconCircle}>
            <Image src="/trending_up.png" width={40} height={24} alt="Icon 1" />
          </div>
          <div className={styles.iconCircle}>
            <Image src="/bar_chart.png" width={32} height={32} alt="Icon 1" />
          </div>
        </div>

        <div className={styles.processSteps}>
          <span className={styles.stepPill}>Strategy</span>
          <span className={`${styles.stepPill} ${styles.activePill}`}>
            Execute
          </span>
          <span className={styles.stepPill}>Scale</span>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>How can we help your grow?</div>
          <div className={styles.cardOptions}>
            <div className={styles.option}>
              <Image
                src="/campaign_gray.png"
                width={20}
                height={18}
                alt="Icon 1"
              />
              Social Media
            </div>
            <div className={styles.option}>
              <Image
                src="/finance_gray.png"
                width={18}
                height={18}
                alt="Icon 1"
              />
              Social Media
            </div>
          </div>
        </div>

        <div className={styles.platforms}>
          Platforms we work with:
          <div className={styles.platformIcons}>
            <Image src="/Group.png" width={48} height={48} alt="Icon 1" />
            <Image src="/Group(1).png" width={48} height={48} alt="Icon 1" />
            <Image src="/Group(2).png" width={48} height={48} alt="Icon 1" />
            <Image src="/Group(3).png" width={48} height={48} alt="Icon 1" />
          </div>
        </div>
      </div>
    </section>
  );
}
