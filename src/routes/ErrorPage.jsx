import Seo from "../components/Seo";
import styles from "../styles/ErrorPage.module.css";
import { NextButton, Ruler, Wrapper } from "../components/UIElements";

export default function ErrorPage() {
  return (
    <>
      <Seo
        title="404 - Page Not Found | MQZ"
        description="The page you're looking for doesn't exist."
      />
      <main className={styles.container}>
        <Ruler />
        <Wrapper>
          <h1 className={styles.title}>404</h1>
          <p className={styles.subtitle}>
            We couldn't find the page you're looking for.
          </p>
          <NextButton title="Back to Home" to="/" />
        </Wrapper>
      </main>
    </>
  );
}
