export const loginFunction = async (authLogin, authPassword) => {
  const error = {
    status: "authError",
    message: "Авторизация не удалась",
  };
  try {
    const response = await fetch("http://localhost:3005/users");
    if (response.ok) {
      const json = await response.json();

      const user = json.find(
        (user) => user.login === authLogin && user.password === authPassword,
      );
      if (user) {
        return user;
      }
    } else {
      return error;
    }
  } catch (error) {
    return { status: "network error", error: error.message };
  }
};

export const registrationFunction = async (regLogin, regPassword) => {
  try {
    const response = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "001",
        login: regLogin,
        password: regPassword,
        role: "002",
      }),
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
