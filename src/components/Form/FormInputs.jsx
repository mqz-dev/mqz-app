import styles from "./FormInputs.module.css";

export function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  name,
}) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export function TextAreaField({
  label,
  placeholder,
  value,
  name,
  onChange,
  rows = 3,
}) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <textarea
        className={styles.textarea}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

export function FieldWithClose({
  value,
  onChange,
  placeholder,
  onClose,
  name,
}) {
  return (
    <div className={styles.btnInputContainer}>
      <input
        type="text"
        name={name}
        className={styles.btnInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />

      <button
        type="button"
        onClick={onClose}
        className={styles.closeBtn}
        aria-label="Remove Section"
      >
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
