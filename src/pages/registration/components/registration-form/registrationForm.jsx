import { Button } from "../../../../components/buttons";
import styles from "./RegistrationForm.module.css";
export const RegistrationForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registration_form}
    >
      <h1>Регистрация</h1>
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
      <Button
        operation="Зарегистрироваться"
        className={styles.button_registration}
      />
    </form>
  );
};
