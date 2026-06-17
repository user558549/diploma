import styles from "./Button.module.css";

export const Button = ({ className, operation, children, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${className || ""}`}>
      {operation}
      {children}
    </button>
  );
};
