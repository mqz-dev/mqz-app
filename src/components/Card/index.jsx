import styles from "./Card.module.css";

export default function Card({ theme, isSelected, setSelectedTheme }) {
  const { path, title } = theme;
  return (
    <article
      key={path}
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
    >
      <div className={styles.imgWrapper}>
        <img
          src={`/${path}.png`}
          alt={`${title} theme preview`}
          className={`${styles.img}`}
        />
      </div>
      <div className={styles.footer}>
        <span className={styles.title}>{title}</span>
        <button
          onClick={() => setSelectedTheme(path)}
          className={`${styles.btn} ${isSelected ? styles.selectedBtn : ""}`}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </article>
  );
}
