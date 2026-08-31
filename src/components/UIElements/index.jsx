import { Link } from "react-router";
import styles from "./UIElements.module.css";

export function Ruler() {
  return <div className={styles.ruler}></div>;
}

export function Wrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}

export function BackButton({ title, to }) {
  return (
    <Link to={to} className={styles.backBtn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8L2 12L6 16" />
        <path d="M2 12H22" />
      </svg>
      <span>{title}</span>
    </Link>
  );
}

export function PageTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export function SubTitle({ children }) {
  return <p className={styles.subtitle}>{children}</p>;
}

export function NextButton({ title, to }) {
  return (
    <Link className={styles.nextBtn} to={to}>
      {title}
    </Link>
  );
}
