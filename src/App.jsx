import { RegistrationPage, LoginPage } from "./components/pages";
import { RegOrLoginButton } from "./components/buttons";

function App() {
  return (
    <>
      {/* <RegistrationPage>
        <RegOrLoginButton operation="Регистрация" />
      </RegistrationPage> */}
      <LoginPage>
        <RegOrLoginButton operation="Вход" />
      </LoginPage>
    </>
  );
}

export default App;
