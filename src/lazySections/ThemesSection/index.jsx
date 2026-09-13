import { useNavigate } from "react-router";
import Card from "../../components/Card";
import { themes } from "../../utils/getThemes";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemesSection.module.css";
import BackButton from "../../components/BackButton";

export default function ThemesWrapper() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  let navigate = useNavigate();

  return (
    <section className="pg-wrapper-0910">
      <BackButton title="Back to Home" to="/" />
      <h1 className="pg-title-0910">
        Pick a <span>theme</span> for your webpage
      </h1>
      <p className="pg-subtitle-0910">
        Every theme uses the same details. Scroll through and find the one that
        feels like you. When you're ready, click{" "}
        <strong>Next Step - Fill the Details</strong> below.
      </p>
      <div className={styles.grid}>
        {themes.map((theme) => {
          const isSelected = theme.path === selectedTheme;
          return (
            <Card
              key={theme.path}
              theme={theme}
              isSelected={isSelected}
              setSelectedTheme={setSelectedTheme}
            />
          );
        })}
      </div>
      <div className={styles.footer}>
        <button
          type="button"
          className="pg-button-0910"
          disabled={!selectedTheme}
          onClick={() => navigate("/build")}
        >
          Next Step - Fill the Details
        </button>
      </div>
    </section>
  );
}
