import styles from "./LoginPage.module.css";

export const LoginPage = ({ children }) => {
  return (
    <form className={styles.login_page}>
      <h1>Вход</h1>
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      {children}
    </form>
  );
};
