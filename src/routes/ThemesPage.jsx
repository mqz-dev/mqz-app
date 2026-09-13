import { lazy, Suspense } from "react";
import Seo from "../components/Seo";
import Loader from "../components/Loader";

const ThemesGrid = lazy(() => import("../lazySections/ThemesSection"));

export default function ThemesPage() {
  return (
    <>
      <Seo
        title="Select Theme | MQZ App"
        description="Scroll through our themes and find the one that fits your vibe."
      />
      <main className="pg-0910">
        <div className="pg-ruler-0910"></div>

        <Suspense fallback={<Loader />}>
          <ThemesGrid />
        </Suspense>
      </main>
    </>
  );
}
