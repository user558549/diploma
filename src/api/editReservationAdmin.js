export const editReservationAdmin = async (idRoom, userLogin) => {
  if (userLogin) {
    try {
      const response = await fetch(
        `http://94.102.89.76:5000/rooms/edit-reservation-user/${idRoom}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_reservation: {
              userLogin: userLogin,
            },
          }),
        },
      );
      const editedReservation = await response.json();
      return editedReservation;
    } catch (error) {
      console.log(error);
    }
  }
};
