import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ZrdaMedia</div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>
          Home
        </a>
        <a href="#" className={styles.link}>
          Services
        </a>
        <a href="#" className={styles.link}>
          Contact
        </a>
      </nav>
      <button className={styles.cta}>Contact Us</button>
    </header>
  );
}
