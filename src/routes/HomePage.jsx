import Seo from "../components/Seo";
import { Link } from "react-router";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Seo />
      <main className={styles.container}>
        <span className={styles.badge}>
          <span></span> From profile to site in minutes
        </span>
        <h1 className={styles.title}>
          Turn your profile into a <span>beautiful</span> webpage.
        </h1>
        <p className={styles.desc}>
          Choose a theme, fill your details, and download the code. We'll also
          show you how to put it online for free.
        </p>
        <Link className={styles.btn} to="/themes">
          Let's Start Building
        </Link>
        <p className={styles.footnote}>
          No Credit Card or Sign Up required. By continuing, you agree to our{" "}
          <Link className={styles.termlink} to="/terms-of-use">
            Terms
          </Link>
          .
        </p>
      </main>
    </>
  );
}
