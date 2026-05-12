import styles from "./Hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <div className={styles.iconBubble}>
            <Image src="/ori_kaci.png" width={16.5} height={12} alt="Icon 1" />
          </div>
          <div className={styles.badgeText}>
            <span>50+ კმაყოფილი კლიენტი</span>
            <span>
              {`ჭაიკითხე `}
              <a href="#" className={styles.badgeLink}>
                ჩვენი ისტორიები
              </a>
            </span>
          </div>
        </div>

        <h1 className={styles.headline}>
          ჩვენ ვეხმარებით ბრენდებს <br />
          <span className={styles.highlight}>გაიზარდონ ონლაინ</span>
        </h1>
        <hr className={styles.hr} />

        <div className={styles.growthBadge}>
          <div className={styles.iconBubble}>
            <Image
              src="/finance_mode(1).png"
              width={19}
              height={19}
              alt="Icon 1"
            />
          </div>
          <div className={styles.growthText}>
            <div className={styles.growthTitle}>ზრდაზე ორიენტირებული</div>
            <div className={styles.growthSubtitle}>
              შედეგები რომელიც მნიშვნელოვანია
            </div>
          </div>
        </div>
        <hr className={styles.hr} />

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>დაჯავშნე ზარი</button>
          <a href="#" className={styles.secondaryLink}>
            ჩვენი სერვისები →
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
          <span className={styles.stepPill}>დაგეგმე</span>
          <span className={`${styles.stepPill} ${styles.activePill}`}>
            განახორციელე
          </span>
          <span className={styles.stepPill}>Scale</span>
        </div>

        <div className={styles.card}>
          <p className={styles.subheadline}>
            სოც-მედიის სტრატეგიული მართვა, targeted advertising, and data-driven
            marketing solutions to elevate your digital presence.
          </p>
        </div>

        <div className={styles.platforms}>
          ჩვენ ვმუშაობთ პლათფორმებთან:
          <div className={styles.platformIcons}>
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <Image src="/Group.png" width={48} height={48} alt="Icon 1" />
            </a>
            <a href="https://www.tiktok.com/@zrdamedia/" target="_blank">
              <Image src="/Group(1).png" width={48} height={48} alt="Icon 1" />
            </a>
            <Image src="/Group(3).png" width={48} height={48} alt="Icon 1" />
          </div>
        </div>
      </div>
    </section>
  );
}
