export const authFunction = async (authLogin, authPassword) => {
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
        return {
          id: user.id,
          login: user.login,
          role: user.role,
        };
      }
    } else {
      return error;
    }
  } catch (error) {
    return { status: "network error", error: error.message };
  }
};
