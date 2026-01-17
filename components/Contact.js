"use client";
import styles from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mojjjyjp");

  if (state.succeeded) {
    return (
      <section className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.label}>Contact Us</div>
          <h2 className={styles.headline}>
            მადლობა! ჩვენ მალე დაგიკავშირდებით.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.label}>Contact Us</div>
        <h2 className={styles.headline}>Let's Work Together</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.labelInput} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Emily"
                className={styles.input}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.labelInput} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. Emily@mail.com"
                className={styles.input}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.labelInput} htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about yourself..."
                className={styles.textarea}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={state.submitting}
            >
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
                <div className={styles.contactValue}>Zrdamedia2@gmail.com</div>
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
