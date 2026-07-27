import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { LoginForm } from "./components/login-form/LoginForm";
import styles from "./LoginPage.module.css";
import { request } from "../../utils/request";
import { URL } from "../../constants/url";
import { useEffect } from "react";
import { Loader } from "../../components";

export const LoginPage = () => {
  const userLogin = useSelector(({ user }) => user.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onchange",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userLogin) {
      navigate("/");
    }
  });

  const onSubmit = async (formData) => {
    const from = location.state?.from || "/";
    const { user } = await request(URL.LOGIN, "POST", {
      login: formData.login,
      password: formData.password,
    });
    if (user.login) {
      localStorage.setItem("User", JSON.stringify(user));
      dispatch({ type: "SET_USER", payload: user });
      navigate(from);
    }
  };

  return isSubmitting ? (
    <Loader />
  ) : (
    <div className={styles.login_page}>
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isValid={isValid}
      />
    </div>
  );
};
