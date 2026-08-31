import Seo from "../components/Seo";
import {
  BackButton,
  PageTitle,
  Ruler,
  SubTitle,
  Wrapper,
} from "../components/UIElements";
import styles from "../styles/ThemesPage.module.css";
import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../utils/getThemes";
import Card from "../components/Card";

export default function ThemesPage() {
  const { selectedTheme, setSelectedTheme } = useTheme();

  let navigate = useNavigate();

  return (
    <>
      <Seo
        title="Select Theme | MQZ App"
        description="Scroll through our themes and find the one that fits your vibe."
      />
      <main className={styles.container}>
        <Ruler />
        <Wrapper>
          <BackButton title="Back to Home" to="/" />
          <PageTitle>
            Pick a <span>theme</span> for your webpage
          </PageTitle>
          <SubTitle>
            Every theme uses the same details. Scroll through and find the one
            that feels like you. When you're ready, click{" "}
            <strong>Next Step - Fill the Details</strong> below.
          </SubTitle>
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
              className={styles.btn}
              disabled={!selectedTheme}
              onClick={() => navigate("/build")}
            >
              Next Step - Fill the Details
            </button>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
