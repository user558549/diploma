import styles from "./GoToRegistration.module.css";

export const GoToRegistration = ({ operation }) => {
  return <button className={styles.go_to_registration}>{operation}</button>;
};
