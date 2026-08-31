import {
  BackButton,
  PageTitle,
  Ruler,
  SubTitle,
  Wrapper,
} from "../components/UIElements";
import Seo from "../components/Seo";
import styles from "../styles/TermsPage.module.css";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service | MQZ"
        description="Read the MQZ Terms of Service and Acceptable Use Policy, including user responsibilities, prohibited activities, platform guidelines, requirements and conditions of use."
      />
      <main className={styles.container}>
        <Ruler />
        <Wrapper>
          <BackButton title="Back to Home" to="/" />
          <PageTitle>
            Terms of <span>Service</span>
          </PageTitle>
          <p className={styles.stamp}>Last Updated: 25 July 2026</p>
          <SubTitle>
            These Terms of Service govern your use of MQZ at https://mqz.app. By
            accessing or using the website and its services, you agree to these
            Terms. If you do not agree with these Terms, please do not use the
            website.
          </SubTitle>

          <section className={styles.termSection}>
            <h2>1. What the Service Does</h2>
            <p>
              MQZ (https://mqz.app) lets you enter personal/professional details
              and generates a downloadable, static personal landing page using a
              theme you select. The Service runs entirely in your browser — the
              details you enter are stored locally on your device (via browser
              local storage) and are not transmitted to or stored on any server
              we operate, unless explicitly stated otherwise in-app.
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>2. No Account Required</h2>
            <p>
              The Service does not require you to create an account or provide
              payment information. There is nothing for us to store on your
              behalf beyond what your browser retains locally.
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>3. Your Content</h2>
            <p>
              Any information you enter (name, experience, skills, and similar
              details) remains yours. We claim no ownership over it. You're
              responsible for making sure the information you enter is accurate,
              that you have the right to use it, and that it doesn't infringe on
              anyone else's rights (for example, don't submit someone else's
              personal information without permission).
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>
                Generate pages containing unlawful, hateful, or misleading
                content
              </li>
              <li>Impersonate another person without their consent</li>
              <li>
                Attempt to disrupt, reverse-engineer, or abuse the Service
                beyond normal use
              </li>
              <li>Violate any applicable law in your jurisdiction</li>
            </ul>
          </section>

          <section className={styles.termSection}>
            <h2>5. Themes and Generated Output</h2>
            <p>
              Once you download a generated page, you're free to host, modify,
              and use that specific output for your own personal or commercial
              purposes. You may not resell, redistribute, or repackage the
              underlying theme templates themselves as a standalone product or
              service.
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>6. No Warranty</h2>
            <p>
              The Service is provided "as is," without warranties of any kind,
              express or implied. We don't guarantee the Service will be
              uninterrupted, error-free, or fit for any particular purpose. You
              use it at your own risk.
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>7. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages arising from your use of the Service, including but not
              limited to loss of data stored in your browser's local storage.
            </p>
          </section>

          <section className={styles.termSection}>
            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Service after changes are posted means you accept the updated
              Terms. We'll update the "Last updated" date above when changes are
              made.
            </p>
          </section>
        </Wrapper>
      </main>
    </>
  );
}
