import { lazy, Suspense } from "react";
import Seo from "../components/Seo";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

const ThemesGrid = lazy(
  () => import("../components/LazyComponents/ThemesWrapper"),
);

export default function ThemesPage() {
  return (
    <>
      <Seo
        title="Select Theme | MQZ App"
        description="Scroll through our themes and find the one that fits your vibe."
      />
      <main className="pg-0910">
        <div className="pg-ruler-0910"></div>
        <section className="pg-wrapper-0910">
          <BackButton title="Back to Home" to="/" />
          <h1 className="pg-title-0910">
            Pick a <span>theme</span> for your webpage
          </h1>
          <p className="pg-subtitle-0910">
            Every theme uses the same details. Scroll through and find the one
            that feels like you. When you're ready, click{" "}
            <strong>Next Step - Fill the Details</strong> below.
          </p>

          <Suspense fallback={<Loader />}>
            <ThemesGrid />
          </Suspense>
        </section>
      </main>
    </>
  );
}
