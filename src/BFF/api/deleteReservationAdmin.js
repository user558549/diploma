export const deleteReservationAdmin = async (idRoom) => {
  try {
    const response = await fetch(`http://localhost:3005/rooms/${idRoom}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_reservation: {},
        reservation: false,
      }),
    });
    const deleteReservation = await response.json();
    return deleteReservation;
  } catch (error) {
    console.log(error);
  }
};
