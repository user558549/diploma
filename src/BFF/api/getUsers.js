export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3005/users");

    if (response.ok) {
      const users = await response.json();

      return users;
    }
  } catch (error) {
    return error.message;
  }
};
