import { useNavigate, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/registerSchema";
import { useDispatch } from "react-redux";
import { RegistrationForm } from "./components/registration-form/registrationForm";
import { request } from "../../utils/request";
import { URL } from "../../constants/url";
import styles from "./RegistrationPage.module.css";
import { Loader } from "../../components";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const from = location.state?.from || "/";
    const { user } = await request(URL.REGISTER, "POST", {
      login: formData.login,
      password: formData.password,
      role: 2,
    });
    if (user) {
      localStorage.setItem("User", JSON.stringify(user));
      dispatch({ type: "SET_USER", payload: user });
      navigate(from);
    }
  };

  return isSubmitting ? (
    <Loader />
  ) : (
    <div className={styles.registration_page}>
      <RegistrationForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isValid={isValid}
      />
    </div>
  );
};
