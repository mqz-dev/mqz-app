import { lazy, Suspense, useState } from "react";
import Seo from "../components/Seo";
import Preview from "../components/Preview";
import Loader from "../components/Loader";

const FormPage = lazy(() => import("../lazySections/FormSection"));

export default function BuildPage() {
  const [showPreview, setShowPreview] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  return (
    <>
      <Seo
        title="Fill Your Details | MQZ App"
        description="Enter your work experience, skills, projects and other details to generate a beautiful static personal webpage."
      />
      {!showPreview && (
        <main className="pg-0910">
          <div className="pg-ruler-0910"></div>
          <Suspense fallback={<Loader />}>
            <FormPage onFormSubmit={onFormSubmit} />
          </Suspense>
        </main>
      )}

      {showPreview && <Preview onClose={() => setShowPreview(false)} />}
    </>
  );
}
