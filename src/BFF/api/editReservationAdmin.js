export const editReservationAdmin = async (idRoom, userLogin) => {
  if (userLogin) {
    try {
      const response = await fetch(`http://localhost:3005/rooms/${idRoom}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_reservation: {
            userLogin: userLogin,
          },
        }),
      });
      const editedReservation = await response.json();
      return editedReservation;
    } catch (error) {
      console.log(error);
    }
  }
};
