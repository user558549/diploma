export const getRoom = async (params) => {
  const response = await fetch(`http://localhost:3005/rooms`);
  const rooms = await response.json();
  const findRoom = rooms.find((room) => room.number_room === params);
  return findRoom;
};
