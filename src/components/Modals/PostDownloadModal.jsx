import styles from "./Modal.module.css";

export default function PostDownloadModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.downloadModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi
          dolor nihil, repudiandae perspiciatis ex, labore consequatur quaerat
          dolorem sint eveniet cumque necessitatibus, eum itaque reiciendis non
          dicta illo soluta?
        </p>
      </div>
    </div>
  );
}
