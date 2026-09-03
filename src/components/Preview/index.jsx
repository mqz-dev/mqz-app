import { useTheme } from "../../context/ThemeContext";
import PreviewHeader from "./PreviewHeader";
import { themes } from "../../utils/getThemes";
import styles from "./Preview.module.css";
import { useState } from "react";
import PostDownloadModal from "../Modals/PostDownloadModal";

export default function Preview({ onClose }) {
  const { selectedTheme, setSelectedTheme } = useTheme();
  const [showPostDownloadModal, setShowPostDownloadModal] = useState(false);

  const handleDownload = () => {
    setShowPostDownloadModal(true);
  };

  const ActiveTemplate = () => {
    return null;
  };

  return (
    <>
      <main className={styles.previewPage}>
        <PreviewHeader
          onClose={onClose}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          themes={themes}
          handleDownload={handleDownload}
          ActiveTemplate={ActiveTemplate}
        />
        <section className={styles.previewContainer}>
          <h1>Hello there 1</h1> <h1>Hello there </h1>
          <h1>Hello there </h1>
          <h1>Hello there </h1>
          <h1>Hello there last</h1>
        </section>
      </main>

      {showPostDownloadModal && (
        <PostDownloadModal onClose={() => setShowPostDownloadModal(false)} />
      )}
    </>
  );
}
