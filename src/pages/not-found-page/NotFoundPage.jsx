import { ButtonLink } from "../../components/buttons";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.not_found_page}>
      <div className={styles.code}>404</div>
      <h1>Страница не найдена</h1>
      <p>Такой страницы не существует или она была удалена</p>
      <ButtonLink
        operation="На главную"
        path="/"
        className={styles.button_home}
      />
    </div>
  );
};
