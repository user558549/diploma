export const getRooms = async () => {
  const response = await fetch(`http://localhost:3005/rooms`);
  const rooms = await response.json();
  return rooms;
};
