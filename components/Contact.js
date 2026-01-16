import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.label}>Contact Us</div>
        <h2 className={styles.headline}>Let's Work Together</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.labelInput}>Name</label>
              <input
                type="text"
                placeholder="e.g. Emily"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.labelInput}>Email Address</label>
              <input
                type="email"
                placeholder="e.g. Emily@mail.com"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.labelInput}>Your Message</label>
              <textarea
                placeholder="Tell us about yourself..."
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="button" className={styles.submitBtn}>
              Get In Touch
            </button>
          </form>
        </div>

        <div className={styles.infoContainer}>
          <h3 className={styles.infoTitle}>Get in touch</h3>
          <p className={styles.infoDesc}>
            Have a question or want to work together? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.icon}>📧</div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  Hello.Zrdamedia@gmail.com
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}>📱</div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>+995732723456</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <div className={styles.contactLabel}>Location</div>
                <div className={styles.contactValue}>Tbilisi, Georgia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
