import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { authFunction } from "../../BFF/api/authFunction";
import { LoginForm } from "./components/login-form/LoginForm";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (formData) => {
    const from = location.state?.from || "/";
    const user = await authFunction(formData.login, formData.password);

    if (user) {
      dispatch({ type: "SET_USER", payload: user });
      navigate(from);
    }
  };

  return (
    <div className={styles.login_page}>
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};
