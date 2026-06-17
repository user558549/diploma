import { useNavigate, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerFunction } from "../../BFF/api";
import styles from "./RegistrationPage.module.css";
import { RegistrationForm } from "./components/registration-form/registrationForm";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const from = location.state?.from || "/";
    const user = await registerFunction(formData.login, formData.password);
    if (user) {
      dispatch({ type: "SET_USER", payload: user });
      navigate(from);
    }
  };

  return (
    <div className={styles.registration_page}>
      <RegistrationForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </div>
  );
};
