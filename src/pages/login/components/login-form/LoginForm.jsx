import { Button } from "../../../../components/buttons";
import { ButtonLink } from "../../../../components/buttons";
import styles from "./LoginForm.module.css";

export const LoginForm = ({ register, handleSubmit, onSubmit, errors }) => {
  return (
    <>
      <form
        className={styles.login_page_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Вход</h1>
        <input
          type="text"
          placeholder="Логин"
          {...register("login", { required: true })}
        />
        {errors.login && <span>Не указан логин</span>}
        <input
          type="password"
          placeholder="Пароль"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Не указан пароль</span>}
        <Button operation="Вход" className={styles.button_login} />
      </form>
      <ButtonLink
        operation="Регистрация"
        path="/register"
        className={styles.button_registration}
      />
    </>
  );
};
