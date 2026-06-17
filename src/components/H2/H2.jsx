import styles from "./H2.module.css";

export const H2 = ({ className, children }) => {
  return <h2 className={`${styles.H2} ${className}`}>{children}</h2>;
};
