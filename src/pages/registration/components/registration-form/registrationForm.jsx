import { Button } from "../../../../components/buttons";
import styles from "./RegistrationForm.module.css";
export const RegistrationForm = ({
  handleSubmit,
  onSubmit,
  register,
  isValid,
  errors,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registration_form}
    >
      <h1>Регистрация</h1>
      <input type="text" placeholder="Логин" {...register("login")} />
      {errors.login && <span>{errors.login.message}</span>}
      <input type="password" placeholder="Пароль" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}
      <Button
        operation="Зарегистрироваться"
        disabled={!isValid}
        className={styles.button_registration}
      />
    </form>
  );
};
