import { useFormData } from "../../context/FormContext";
import styles from "../../styles/FormPage.module.css";
import {
  Accordion,
  BackButton,
  PageTitle,
  Ruler,
  SubTitle,
  Wrapper,
} from "../UIElements";

import {
  PersonalDetails,
  SocialDetails,
  WorkExperience,
  FeaturedProjects,
  CoreSkills,
  Education,
  LicensesAndCertifications,
  MilestonesAndAwards,
  VolunteerWork,
  OffScreenInterests,
} from "./FormSections";

export default function Form({ handleSubmit, handleReset }) {
  const { data, setData } = useFormData();

  const handleInput = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addItem = (field, template) => {
    setData((prev) => ({
      ...prev,
      [field]: [...prev[field], { ...template, id: crypto.randomUUID() }],
    }));
  };

  const updateItem = (profileSection, id, e) => {
    setData((prev) => {
      return {
        ...prev,
        [profileSection]: prev[profileSection].map((item) =>
          item.id === id
            ? { ...item, [e.target.name]: [e.target.value] }
            : item,
        ),
      };
    });
  };

  const removeItem = (profileSection, id) => {
    setData((prev) => ({
      ...prev,
      [profileSection]: prev[profileSection].filter((item) => item.id !== id),
    }));
  };

  return (
    <main className={styles.container}>
      <Ruler />
      <Wrapper>
        <header className={styles.header}>
          <BackButton title="Back to Themes" to="/themes" />
          <button onClick={handleReset} className={styles.resetBtn}>
            Reset Form
          </button>
        </header>
        <PageTitle>
          The Details <span>Behind the Design</span>
        </PageTitle>
        <SubTitle>
          Fill in the detials below. We'll turn it into a webpage worth sharing.
        </SubTitle>
        <Accordion title="Read this first">
          <p>
            Everything you enter here stays in your browser. Nothing is sent to
            any server. If you're using a shared or public computer, come back
            to this page after downloading and click Reset Form (top right) to
            clear what you've entered.
          </p>
          <p>
            Only the Basics section is required. Everything else is optional, so
            feel free to skip whatever doesn't apply to you.
          </p>
        </Accordion>
        <form onSubmit={handleSubmit}>
          <PersonalDetails data={data} handleInput={handleInput} />
          <SocialDetails
            data={data}
            removeItem={removeItem}
            updateItem={updateItem}
            addItem={addItem}
          />
          <WorkExperience
            data={data}
            removeItem={removeItem}
            updateItem={updateItem}
            addItem={addItem}
          />
          <FeaturedProjects
            data={data}
            removeItem={removeItem}
            updateItem={updateItem}
            addItem={addItem}
          />
          <CoreSkills
            data={data}
            addItem={addItem}
            updateItem={updateItem}
            removeItem={removeItem}
          />
          <Education
            data={data}
            updateItem={updateItem}
            addItem={addItem}
            removeItem={removeItem}
          />
          <LicensesAndCertifications
            data={data}
            addItem={addItem}
            updateItem={updateItem}
            removeItem={removeItem}
          />
          <MilestonesAndAwards
            data={data}
            removeItem={removeItem}
            addItem={addItem}
            updateItem={updateItem}
          />
          <VolunteerWork
            data={data}
            removeItem={removeItem}
            updateItem={updateItem}
            addItem={addItem}
          />
          <OffScreenInterests
            data={data}
            removeItem={removeItem}
            updateItem={updateItem}
            addItem={addItem}
          />
          <footer className={styles.formFooter}>
            <button type="submit" className={styles.nextBtn}>
              Preview Portfolio
            </button>
          </footer>
        </form>
      </Wrapper>
    </main>
  );
}
