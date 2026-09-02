import styles from "./Preview.module.css";

export default function PreviewHeader({
  onClose,
  themes,
  selectedTheme,
  setSelectedTheme,
  handleDownload,
  ActiveTemplate,
}) {
  return (
    <header className={styles.header}>
      <button className={styles.backBtn} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        <span>Back to Form</span>
      </button>
      <div className={styles.actionsContainer}>
        <select
          value={selectedTheme || ""}
          aria-label="Select Theme"
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="" disabled>
            Select Theme
          </option>
          {themes.map((theme) => (
            <option key={theme.park} value={theme.path}>
              {theme.title.toUpperCase()}
            </option>
          ))}
        </select>
        <button onClick={handleDownload} disabled={!ActiveTemplate}>
          Download Code
        </button>
      </div>
    </header>
  );
}
