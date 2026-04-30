import { RegistrationPage, LoginPage } from "./components/pages";
import { RegOrLoginButton, GoToRegistration } from "./components/buttons";

function App() {
  return (
    <>
      <RegistrationPage>
        <RegOrLoginButton operation="Регистрация" />
      </RegistrationPage>
      <LoginPage>
        <RegOrLoginButton operation="Вход" />
        <GoToRegistration operation="Зарегистрироваться" />
      </LoginPage>
    </>
  );
}

export default App;
