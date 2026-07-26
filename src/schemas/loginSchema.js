import * as yup from "yup";

export const loginSchema = yup.object({
  login: yup
    .string()
    .required("Логин обязателен")
    .min(3, "Логин должен быть минимум 3 символа")
    .max(20, "Логин не может быть длиннее 20 символов")
    .matches(/^[a-zA-Z0-9]+$/, "Логин может содержать только буквы, цифры"),

  password: yup
    .string()
    .required("Пароль обязателен")
    .min(6, "Пароль должен быть минимум 6 символов")
    .max(30, "Пароль не может быть длиннее 30 символов"),
});
