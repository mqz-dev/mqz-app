import styles from "./Modal.module.css";

export default function ResetModal({ onCancel, onConfirm }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Reset all details</h2>
        <p className={styles.message}>
          This will permanently clear everything you've entered on this form.
          This can't be undone.
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
