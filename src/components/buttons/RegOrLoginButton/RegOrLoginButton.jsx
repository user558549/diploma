import styles from "../../../styles/ButtonsOnHeader.module.css";

export const RegOrLoginButton = ({ operation, nameComponent }) => {
  return (
    <button
      className={
        nameComponent === "HeaderComponenent" ? styles.buttons_on_header : ""
      }
      type="submit"
    >
      {operation}
    </button>
  );
};
