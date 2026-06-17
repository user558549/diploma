import styles from "./Error.module.css";

export const Error = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};
