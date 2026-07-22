export const request = async (url, method = "GET", data) => {
  try {
    const response = await fetch(url, {
      method: method,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (response.ok) {
      return await response.json();
    }
    const errorData = await response.json();
    throw new Error(errorData.error || `Ошибка сервера: ${response.status}`);
  } catch (error) {
    return error.message;
  }
};
