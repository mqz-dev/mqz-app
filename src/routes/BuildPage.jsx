import { useState } from "react";
import Seo from "../components/Seo";
import Form from "../components/Form";
import Preview from "../components/Preview";
import ResetModal from "../components/Modals/ResetModal";
import { INITIALFORMDATA, useFormData } from "../context/FormContext";

export default function BuildPage() {
  const [showPreview, setShowPreview] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const { setData } = useFormData();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleResetConfirm = () => {
    setData(INITIALFORMDATA);
    setShowResetModal(false);
  };

  return (
    <>
      <Seo
        title="Fill Your Details | MQZ App"
        description="Enter your work experience, skills, projects and other details to generate a beautiful static personal webpage."
      />
      {!showPreview && (
        <Form
          handleSubmit={onHandleSubmit}
          handleReset={() => setShowResetModal(true)}
        />
      )}
      {showPreview && <Preview onClose={() => setShowPreview(false)} />}
      {showResetModal && (
        <ResetModal
          onCancel={() => setShowResetModal(false)}
          onConfirm={handleResetConfirm}
        />
      )}
    </>
  );
}
