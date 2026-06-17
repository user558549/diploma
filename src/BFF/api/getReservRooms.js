export const getReservRooms = async () => {
  const response = await fetch("http://localhost:3005/rooms");
  const loadedRooms = await response.json();
  const reservRooms = loadedRooms.filter((room) => room.reservation === true);
  return reservRooms;
};
