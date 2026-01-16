import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ZrdaMedia</div>
      <nav className={styles.nav}>
        <a href="#Home" className={styles.link}>
          სახლი
        </a>
        <a href="#Services" className={styles.link}>
          სერვისები
        </a>
        <a href="#Contact" className={styles.link}>
          კონტაქტი
        </a>
      </nav>
      <a href="#Contact" className={styles.cta}>
        დაგვიკავშირდით
      </a>
    </header>
  );
}
