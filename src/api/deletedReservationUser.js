export const deleteReservationUser = async (idRoom) => {
  try {
    const response = await fetch(
      `http://94.102.89.76:5000/rooms/deleted-reservation-user/${idRoom}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_reservation: {},
          reservation: false,
        }),
      },
    );
    const deleteReservation = await response.json();
    return deleteReservation;
  } catch (error) {
    return error.message;
  }
};
