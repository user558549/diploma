export const getFreeRooms = async () => {
  const response = await fetch("http://localhost:3005/rooms");
  const loadedRooms = await response.json();
  const freeRooms = loadedRooms.filter((room) => room.reservation === false);
  return freeRooms;
};
