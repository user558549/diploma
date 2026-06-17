export const getUserRooms = async (userLogin) => {
  const response = await fetch(`http://localhost:3005/rooms`);
  const rooms = await response.json();
  const userRooms = rooms.filter(
    (room) => room.user_reservation.userLogin === userLogin,
  );

  return userRooms;
};
