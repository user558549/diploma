import { Button } from "../../../../components/buttons";
import { ButtonLink } from "../../../../components/buttons";
import styles from "./LoginForm.module.css";

export const LoginForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isValid,
}) => {
  return (
    <>
      <form
        className={styles.login_page_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Вход</h1>
        <input type="text" placeholder="Логин" {...register("login")} />
        {errors.login && <span>{errors.login.message}</span>}
        <input type="password" placeholder="Пароль" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        {errors.serverError && <span>{errors.serverError.error}</span>}
        <Button
          operation="Вход"
          disabled={!isValid}
          className={styles.button_login}
        />
      </form>
      <ButtonLink
        operation="Регистрация"
        path="/register"
        className={styles.button_registration}
      />
    </>
  );
};
