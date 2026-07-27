import { H2 } from "../../../../components";
import { Button } from "../../../../components/buttons";
import { deleteReservationUser } from "../../../../api/deletedReservationUser";
import styles from "./InfoBlock.module.css";

export const InfoBlock = ({ userRoom, refetch }) => {
  const deleteUserReservation = async (roomId) => {
    const resultDeletedReservation = await deleteReservationUser(roomId);
    if (resultDeletedReservation) {
      refetch();
    }
  };

  return (
    <div className={styles.info_block_container}>
      <H2>Мои брони</H2>
      {userRoom.map((room) => (
        <div className={styles.info_block} key={room._id}>
          <div>Название номера:</div>
          <div>{room.name}</div>
          <div>Описание номера:</div>
          <div>{room.description}</div>

          <div className={styles.delete_container}>
            <Button
              operation="Удалить бронь"
              onClick={() => deleteUserReservation(room._id)}
              className={styles.delete_reservation_button}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
