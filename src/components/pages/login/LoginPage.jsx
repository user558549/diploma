import { useForm } from "react-hook-form";
import { GoToRegistration, RegOrLoginButton } from "../../buttons";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.login_page_container}>
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
        <RegOrLoginButton operation="Вход" />
      </form>
      <GoToRegistration operation="Зарегистрироваться" />
    </div>
  );
};
