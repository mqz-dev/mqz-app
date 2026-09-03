import Card from "../Card";
import { themes } from "../../utils/getThemes";
import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemesWrapper.module.css";

export default function ThemesWrapper() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  let navigate = useNavigate();
  return (
    <>
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
    </>
  );
}
