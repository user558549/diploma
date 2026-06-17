import { Link } from "react-router";
import styles from "./ButtonLink.module.css";

export const ButtonLink = ({ className, operation, path, state, ...props }) => {
  return (
    <Link to={path} state={state}>
      <button {...props} className={`${styles.button_link} ${className || ""}`}>
        {operation}
      </button>
    </Link>
  );
};
