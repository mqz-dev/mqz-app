import { Link } from "react-router";
import Seo from "../components/Seo";
import styles from "../styles/ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="404 - Page Not Found | MQZ"
        description="The page you're looking for doesn't exist."
      />
      <main className="pg-0910">
        <div className="pg-ruler-0910"></div>
        <section className="pg-wrapper-0910">
          <h1 className={styles.title}>404</h1>
          <p className={styles.subtitle}>
            We couldn't find the page you're looking for.
          </p>
          <div className={styles.btnContainer}>
            <Link to="/" className="pg-button-0910">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
