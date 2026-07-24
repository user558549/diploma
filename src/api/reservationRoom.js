export const reservationRoom = async (user, idRoom) => {
  if (user) {
    try {
      const response = await fetch(`/api/rooms/${idRoom}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_reservation: {
            userLogin: user.login,
          },

          reservation: true,
        }),
      });
      const reservation = await response.json();
      return reservation;
    } catch (error) {
      return error;
    }
  }
};
