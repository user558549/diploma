import { getUsers } from "./getUsers";

export const registerFunction = async (regLogin, regPassword) => {
  const users = await getUsers();
  const isRegister = users.some((user) => user.login === regLogin);

  if (!isRegister) {
    try {
      const response = await fetch("http://localhost:3005/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: regLogin,
          password: regPassword,
          role: 2,
        }),
      });
      const registerUser = await response.json();
      return registerUser;
    } catch (error) {
      console.log(error);
    }
  }
};
