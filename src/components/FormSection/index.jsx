import styles from "./FormSections.module.css";

export default function FormSection({ title, description, children }) {
  return (
    <section className={styles.sectionContainer}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionSubtitle}>{description}</p>
      </header>
      {children}
    </section>
  );
}
