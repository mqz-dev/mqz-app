import styles from "./Form.module.css";
import { INITIALFORMDATA, useFormData } from "../../context/FormContext";
import ResetModal from "../../components/Modals/ResetModal";
import Accordion from "../Accordion";
import FormSection from "../FormSection";
import BackButton from "../BackButton";
import { useState } from "react";
import { FieldWithClose, InputField, TextAreaField } from "../FormInputs";

export default function EntireForm({ onFormSubmit }) {
  const { data, setData } = useFormData();
  const [showResetModal, setShowResetModal] = useState(false);

  const handleResetConfirm = () => {
    setData(INITIALFORMDATA);
    setShowResetModal(false);
  };

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
    <>
      <section className="pg-wrapper-0910">
        <header className={styles.header}>
          <BackButton title="Back to Themes" to="/themes" />
          <button
            onClick={() => setShowResetModal(true)}
            className={styles.resetBtn}
          >
            Reset Form
          </button>
        </header>
        <h1 className="pg-title-0910">
          The Details <span>Behind the Design</span>
        </h1>
        <p className="pg-subtitle-0910">
          Fill in the detials below. We'll turn it into a webpage worth sharing.
        </p>
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
        <form onSubmit={onFormSubmit}>
          {/* Personal Detailes */}
          <FormSection
            title="The Basics"
            description="Name, title, and the elevator pitch. This sets the tone for your whole page."
          >
            <div className={styles.inputsContainer}>
              <InputField
                label="Name"
                name="name"
                placeholder="Full name"
                value={data.name}
                onChange={handleInput}
                required
              />
              <InputField
                label="Professional title"
                name="title"
                placeholder="Current role or title"
                value={data.title}
                onChange={handleInput}
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={data.email}
                onChange={handleInput}
                required
              />
              <InputField
                name="location"
                label="Location"
                placeholder="City, Country (or just Country)"
                value={data.location}
                onChange={handleInput}
                required
              />
              <TextAreaField
                label="About Yourself"
                name="about"
                placeholder="A couple sentences on who you are and what you do."
                value={data.about}
                onChange={handleInput}
                required
              />
            </div>
          </FormSection>

          {/* Social Detailes */}
          <FormSection
            title="Your Socials"
            description="Where else do you live on the internet? Add your LinkedIn and social profiles."
          >
            <>
              {data.links.map((link) => (
                <div className={styles.card} key={link.id}>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => removeItem("links", link.id)}
                    aria-label="Remove link"
                  >
                    X
                  </button>
                  <div className={styles.inputsContainer}>
                    <InputField
                      label="Platform"
                      name="label"
                      placeholder="Platform name (e.g., LinkedIn)"
                      value={link.label}
                      onChange={(e) => updateItem("links", link.id, e)}
                      required
                    />
                    <InputField
                      label="URL"
                      name="url"
                      type="url"
                      placeholder="https://"
                      value={link.url}
                      onChange={(e) => updateItem("links", link.id, e)}
                      required
                    />
                  </div>
                </div>
              ))}
            </>
            <button
              type="button"
              className={styles.addBtn}
              onClick={() => addItem("links", { label: "", url: "" })}
            >
              + Add Link
            </button>
          </FormSection>

          {/* Work Detailes */}
          <FormSection
            title="Work Experience"
            description="Where you've been and what you've done. This is usually what people read first."
          >
            <>
              <div className={styles.flex}>
                {data.experience.map((exp) => (
                  <div className={styles.card} key={exp.id}>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeItem("experience", exp.id)}
                      aria-label="Remove experience"
                    >
                      ×
                    </button>
                    <div className={styles.inputsContainer}>
                      <InputField
                        label="Company"
                        name="company"
                        placeholder="Company name"
                        value={exp.company}
                        onChange={(e) => updateItem("experience", exp.id, e)}
                        required
                      />
                      <InputField
                        label="Role"
                        name="role"
                        placeholder="Job title"
                        value={exp.role}
                        onChange={(e) => updateItem("experience", exp.id, e)}
                        required
                      />
                      <InputField
                        label="Start Date"
                        name="startDate"
                        placeholder="Month Year"
                        value={exp.startDate}
                        onChange={(e) => updateItem("experience", exp.id, e)}
                        required
                      />
                      <InputField
                        label="End Date"
                        name="endDate"
                        placeholder="Month Year or Present"
                        value={exp.endDate}
                        onChange={(e) =>
                          updateItem("experience", exp.id, "endDate", e)
                        }
                        required
                      />
                      <TextAreaField
                        label="Responsibilities"
                        name="description"
                        placeholder="Describe your responsibilities and impact."
                        value={exp.description}
                        rows={3}
                        onChange={(e) => updateItem("experience", exp.id, e)}
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={styles.addBtn}
                onClick={() =>
                  addItem("experience", {
                    id: "",
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
              >
                + Add Experience
              </button>
            </>
          </FormSection>

          {/* Project Detailes */}
          <FormSection
            title="Featured Projects"
            description="Show, don't just tell. Highlight the work or initiatives you're most proud of."
          >
            <>
              {data.projects.map((proj) => (
                <div className={styles.card} key={proj.id}>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => removeItem("projects", proj.id)}
                    aria-label="Remove project"
                  >
                    ×
                  </button>
                  <div className={styles.inputsContainer}>
                    <InputField
                      label="Name"
                      name="name"
                      placeholder="Project name"
                      value={proj.name}
                      onChange={(e) => updateItem("projects", proj.id, e)}
                      required
                    />
                    <InputField
                      label="Role"
                      name="role"
                      placeholder="Your role, or how you were involved"
                      value={proj.role || ""}
                      onChange={(e) => updateItem("projects", proj.id, e)}
                      required
                    />
                    <TextAreaField
                      label="Summary"
                      name="description"
                      placeholder="Describe the project and what you accomplished."
                      value={proj.description}
                      rows={3}
                      onChange={(e) => updateItem("projects", proj.id, e)}
                      required
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                className={styles.addBtn}
                onClick={() =>
                  addItem("projects", {
                    id: "",
                    name: "",
                    description: "",
                    role: "",
                  })
                }
              >
                + Add project
              </button>
            </>
          </FormSection>

          {/* Skill Details */}
          <FormSection
            title="Core Skills"
            description="Outline your key skills, specialties, and professional strengths."
          >
            <div className={`${styles.inputsContainer} ${styles.mb}`}>
              {data.skills.map((skill) => (
                <FieldWithClose
                  key={skill.id}
                  value={skill.name}
                  name="name"
                  placeholder="e.g., Public Speaking, Adobe Photoshop"
                  onChange={(e) => updateItem("skills", skill.id, e)}
                  onClose={() => removeItem("skills", skill.id)}
                  required
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.addBtn}
              onClick={() => addItem("skills", { id: "", name: "" })}
            >
              + Add skill
            </button>
          </FormSection>

          {/* Education Details */}
          <FormSection
            title="Education"
            description="Your formal education, degrees, courses, and where you studied."
          >
            <div>
              {data.education.map((edu) => (
                <div className={styles.card} key={edu.id}>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => removeItem("education", edu.id)}
                    aria-label="Remove education"
                  >
                    ×
                  </button>
                  <div className={styles.inputsContainer}>
                    <InputField
                      label="School"
                      name="school"
                      placeholder="School or University name"
                      value={edu.school}
                      onChange={(e) => updateItem("education", edu.id, e)}
                      required
                    />
                    <InputField
                      label="Degree"
                      name="degree"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => updateItem("education", edu.id, e)}
                      required
                    />
                    <InputField
                      label="Start date"
                      name="startDate"
                      placeholder="Year"
                      value={edu.startDate}
                      onChange={(e) => updateItem("education", edu.id, e)}
                      required
                    />
                    <InputField
                      label="End date"
                      name="endDate"
                      placeholder="Year"
                      value={edu.endDate}
                      onChange={(e) => updateItem("education", edu.id, e)}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className={styles.addBtn}
              onClick={() =>
                addItem("education", {
                  school: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                })
              }
            >
              + Add education
            </button>
          </FormSection>

          {/* Certification Details */}
          <FormSection
            title="Licenses & Certifications"
            description="The official papers that prove you know your stuff."
          >
            <>
              {data.certifications.map((cert) => (
                <div className={styles.card} key={cert.id}>
                  <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={() => removeItem("certifications", cert.id)}
                    aria-label="Remove certification"
                  >
                    ×
                  </button>
                  <div className={styles.inputsContainer}>
                    <InputField
                      label="Name"
                      placeholder="Certification name"
                      name="name"
                      value={cert.name}
                      onChange={(e) => updateItem("certifications", cert.id, e)}
                      required
                    />
                    <InputField
                      label="Issuer"
                      placeholder="Issuing organization"
                      value={cert.issuer}
                      name="issuer"
                      onChange={(e) => updateItem("certifications", cert.id, e)}
                      required
                    />
                    <InputField
                      label="Date"
                      placeholder="Year"
                      value={cert.date}
                      name="date"
                      onChange={(e) => updateItem("certifications", cert.id, e)}
                      required
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                className={styles.addBtn}
                onClick={() =>
                  addItem("certifications", { name: "", issuer: "", date: "" })
                }
              >
                + Add certification
              </button>
            </>
          </FormSection>

          {/* Award Details */}
          <FormSection
            title="Milestones & Awards"
            description="Speaking gigs, publications, awards, or big wins that make you stand out."
          >
            <div className={`${styles.inputsContainer} ${styles.mb}`}>
              {data.achievements.map((achievement) => (
                <FieldWithClose
                  key={achievement.id}
                  value={achievement.name}
                  name="name"
                  placeholder="Award name or milestone"
                  onChange={(e) =>
                    updateItem("achievements", achievement.id, e)
                  }
                  onClose={() => removeItem("achievements", achievement.id)}
                  required
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.addBtn}
              onClick={() => addItem("achievements", { id: "", name: "" })}
            >
              + Add achievement
            </button>
          </FormSection>

          {/* Volunteer Work Details */}
          <FormSection
            title="Volunteer Work"
            description="How you give back to the community."
          >
            {data.volunteer.map((vol) => (
              <div className={styles.card} key={vol.id}>
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeItem("volunteer", vol.id)}
                  aria-label="Remove volunteer work"
                >
                  ×
                </button>
                <div className={styles.inputsContainer}>
                  <InputField
                    label="Organization"
                    name="organization"
                    placeholder="Organization name"
                    value={vol.organization}
                    onChange={(e) => updateItem("volunteer", vol.id, e)}
                    required
                  />
                  <InputField
                    label="Role"
                    name="role"
                    placeholder="Your role"
                    value={vol.role}
                    onChange={(e) => updateItem("volunteer", vol.id, e)}
                    required
                  />
                  <InputField
                    label="Start Date"
                    name="startDate"
                    placeholder="Month Year"
                    value={vol.startDate}
                    onChange={(e) => updateItem("volunteer", vol.id, e)}
                    required
                  />
                  <InputField
                    label="End Date"
                    name="endDate"
                    placeholder="Month Year or Present"
                    value={vol.endDate}
                    onChange={(e) => updateItem("volunteer", vol.id, e)}
                    required
                  />
                  <TextAreaField
                    label="Contribution"
                    name="description"
                    placeholder="Describe what you did and the impact you made."
                    value={vol.description}
                    rows={3}
                    onChange={(e) => updateItem("volunteer", vol.id, e)}
                    required
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              className={styles.addBtn}
              onClick={() =>
                addItem("volunteer", {
                  organization: "",
                  role: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              + Add Volunteer Work
            </button>
          </FormSection>

          {/* Hobby Details */}
          <FormSection
            title="Off-Screen Interests"
            description="What keeps you busy when you're off the clock?"
          >
            <div className={`${styles.inputsContainer} ${styles.mb}`}>
              {data.interests.map((interest) => (
                <FieldWithClose
                  key={interest.id}
                  value={interest.name}
                  name="name"
                  placeholder="e.g., Hiking, Photography, Chess"
                  onChange={(e) => updateItem("interests", interest.id, e)}
                  onClose={() => removeItem("interests", interest.id)}
                  required
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.addBtn}
              onClick={() => addItem("interests", { id: "", name: "" })}
            >
              + Add Interest
            </button>
          </FormSection>

          <footer className={styles.formFooter}>
            <button type="submit" className="pg-button-0910">
              Preview Portfolio
            </button>
          </footer>
        </form>
      </section>

      {showResetModal && (
        <ResetModal
          onCancel={() => setShowResetModal(false)}
          onConfirm={handleResetConfirm}
        />
      )}
    </>
  );
}
