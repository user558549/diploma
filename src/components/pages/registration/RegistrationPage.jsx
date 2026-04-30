import styles from "./Registration.module.css";
export const RegistrationPage = ({ children }) => {
  return (
    <form className={styles.registration_page}>
      <h1>Регистрация</h1>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      {children}
    </form>
  );
};
