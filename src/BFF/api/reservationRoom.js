export const reservationRoom = async (user, idRoom) => {
  if (user) {
    try {
      const response = await fetch(`http://localhost:3005/rooms/${idRoom}`, {
        method: "PATCH",
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
