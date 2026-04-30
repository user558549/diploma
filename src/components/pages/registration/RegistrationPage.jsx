import { RegOrLoginButton } from "../../buttons";
import { useForm } from "react-hook-form";
import styles from "./Registration.module.css";
export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form
      className={styles.registration_page}
      onSubmit={handleSubmit(onSubmit)}
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
      <RegOrLoginButton operation="Регистрация" />
    </form>
  );
};
