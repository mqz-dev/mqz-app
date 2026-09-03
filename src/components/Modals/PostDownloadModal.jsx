import styles from "./Modal.module.css";

export default function PostDownloadModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.downloadModal}>
        <header className={styles.downloadModalHeader}>
          <h2>ONE LAST STEP</h2>
        </header>

        <section className={styles.contentWrapper}>
          <p className={styles.intro}>
            Your website has been saved to your device, but it is not online
            yet. To make it available on the internet, choose one of the options
            below. You can use Netlify's free website address or connect your
            own custom domain. The setup is simple and usually takes just a few
            minutes.
          </p>

          <div className={styles.instructions}>
            <h3>Option 1: Publish for Free with Netlify</h3>

            <ol>
              <li>
                Create a free{" "}
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify account
                </a>{" "}
                or sign in if you already have one. No credit card is required,
                and Netlify's free plan is suitable for most personal websites,
                portfolios, resumes, and landing pages.
              </li>

              <li>
                Open{" "}
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify Drop
                </a>{" "}
                and make sure you are signed in to your Netlify account. Locate
                the HTML file you downloaded from this website and drag it onto
                the Netlify Drop page. Netlify will automatically upload and
                publish your website. If you are not signed in, Netlify will ask
                you to <strong>claim the site</strong>. Simply sign in or create
                a free account to claim ownership. This allows you to manage
                your website, upload future updates, change the website address,
                and connect your own custom domain.
              </li>

              <li>
                After the upload is complete, Netlify will provide a website
                address (URL) where your website is now live. Example:
                <code>https://random-name-123.netlify.app</code>
              </li>

              <li>
                Netlify automatically generates a random website address when
                your site is first published. If you would like a more memorable
                address: Open your site's dashboard in Netlify{" "}
                <strong>
                  {"->"} Site Configuration {"->"} Change Site Name {"->"} Enter
                  the name you want {"->"} Save Changes
                </strong>
                . Your address can become something like:
                <code>https://your-name.netlify.app</code>. Note: If the name
                you want is already taken, Netlify will ask you to choose a
                different one. The <code>.netlify.app</code> part will remain
                unless you connect your own custom domain.
              </li>

              <li>
                To update your website in the future, simply generate a new HTML
                file and upload it to Netlify again. You do not need to create a
                new website each time. Sign in to Netlify, open your site's
                dashboard, and upload the new HTML file. Netlify will replace
                the old version with the updated one while keeping the same
                website address, so any links you have already shared will
                continue to work.
              </li>
            </ol>
          </div>

          <div className={styles.instructions}>
            <h3>Option 2: Publish with Your Own Custom Domain</h3>

            <ol>
              <li>
                Create a free{" "}
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify account
                </a>{" "}
                or sign in if you already have one. No credit card is required,
                and Netlify's free plan is suitable for most personal websites,
                portfolios, resumes, and landing pages.
              </li>

              <li>
                Purchase a domain name if you do not already own one. A domain
                is the website address people type into their browser, such as{" "}
                <code>yourname.com</code>. You can purchase a domain from:
                <a
                  href="YOUR_AFFILIATE_LINK_HERE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy a Domain Name
                </a>
              </li>

              <li>
                Open{" "}
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify Drop
                </a>{" "}
                and make sure you are signed in to your Netlify account. Drag
                the downloaded HTML file onto the page and wait for Netlify to
                publish your website. If you are not signed in, Netlify may ask
                you to <strong>claim the site</strong>. Simply sign in or create
                a free account to claim ownership and manage your website.
              </li>

              <li>
                After your website is published, connect your custom domain to
                your Netlify site by following Netlify's official guide:
                <a
                  href="https://docs.netlify.com/manage/domains/get-started-with-domains/"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to Connect a Custom Domain
                </a>
                . The guide will walk you through the setup process based on
                where your domain was purchased. Netlify automatically provides
                a free SSL certificate, which enables the secure{" "}
                <code>https://</code> version of your website.{" "}
              </li>

              <li>
                Once the domain connection is complete, visitors will be able to
                access your website using your own domain name instead of a{" "}
                <code>.netlify.app</code> address. Example:
                <code>https://mqz.app</code>
              </li>
              <li>
                To update your website in the future, simply generate a new HTML
                file and upload it to Netlify again. You do not need to create a
                new website each time. Sign in to Netlify, open your site's
                dashboard, and upload the new HTML file. Netlify will replace
                the old version with the updated one while keeping the same
                website address, so any links you have already shared will
                continue to work.
              </li>
            </ol>
          </div>
        </section>
        <footer>
          <button className={styles.gotItBtn} onClick={onClose}>
            Got it, thanks!
          </button>
        </footer>
      </div>
    </div>
  );
}
