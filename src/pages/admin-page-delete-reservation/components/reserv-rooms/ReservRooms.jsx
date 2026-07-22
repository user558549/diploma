import { Button } from "../../../../components/buttons";
import styles from "./ReservRooms.module.css";

export const ReservRooms = ({ reservRooms, setRoomId, dispatch }) => {
  return (
    <div className={styles.reserv_rooms_container}>
      {reservRooms.map((room) => (
        <div key={room._id} className={styles.one_reserved_room}>
          <div>{room.number_room}</div>
          <div className={styles.name_room_and_button}>
            <div className={styles.name_room}> {room.name}</div>
            {room.user_reservation.userLogin ? (
              <div>{`Забронировано: ${room.user_reservation.userLogin}`}</div>
            ) : (
              ""
            )}
            <Button
              operation="Удалить бронь"
              onClick={() => {
                setRoomId(room._id);
                dispatch({
                  type: "CHANGE_MODAL_STATE",
                  payload: { isModalState: true },
                });
              }}
              className={styles.button_delete_reservation}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
