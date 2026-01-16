import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Let's Get touch With Us</h3>
          <p className={styles.ctaDesc}>
            Ready to transform your business? Get in touch with our team today.
          </p>
          <div className={styles.logo}>ZrdaMedia</div>
          <button className={styles.ctaBtn}>Call Us</button>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">Custom Software Development</a>
              </li>
              <li>
                <a href="#">Cloud Solutions</a>
              </li>
              <li>
                <a href="#">Cybersecurity</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a href="#">hello@zrdamedia.com</a>
              </li>
              <li>
                <a href="#">+1 (234) 567-890</a>
              </li>
              <li>
                <span className={styles.bold}>Tbilisi, Georgia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          © 2024 ZrdaMedia. All rights reserved.
          <a href="#" className={styles.legalLink}>
            Privacy Policy
          </a>
          <a href="#" className={styles.legalLink}>
            Terms of Service
          </a>
        </div>

        <div className={styles.socials}>
          <a href="#">🌐</a>
          <a href="#">👔</a>
          <a href="#">▶️</a>
          <a href="#">📷</a>
          <a href="#">✖️</a>
        </div>
      </div>
    </footer>
  );
}
