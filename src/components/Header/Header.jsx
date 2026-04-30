import { RegOrLoginButton } from "../buttons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.container_buttons_on_header}>
        <RegOrLoginButton operation="Вход" nameComponent="HeaderComponenent" />/
        <RegOrLoginButton
          operation="Регистрация"
          nameComponent="HeaderComponenent"
        />
      </div>
    </div>
  );
};
