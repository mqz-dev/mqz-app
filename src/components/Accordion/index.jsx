import styles from "./Accordion.module.css";

export default function Accordion({ title, children }) {
  return (
    <details className={styles.accordion} open>
      <summary className={styles.accordionTitle}>
        <span>{title}</span>
        <svg
          className={styles.accordionIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className={styles.accordionContent}>{children}</div>
    </details>
  );
}
