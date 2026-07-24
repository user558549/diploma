export const deleteReservationAdmin = async (idRoom) => {
  try {
    const response = await fetch(
      `/api/rooms/deleted-reservation-user-is-admin/${idRoom}`,
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
