import { Button } from "../../../../components/buttons";
import styles from "./RoomsBlock.module.css";

export const RoomsBlock = ({ rooms, setIdRoom, dispatch }) => {
  return (
    <div className={styles.edit_container}>
      {rooms.map((room) => (
        <div key={room._id}>
          <div> {room.number_room}</div>
          <div> {room.name}</div>
          <div>{`Забронировано: ${room.user_reservation.userLogin}`}</div>
          <Button
            operation="Редактировать бронь"
            onClick={() => {
              setIdRoom(room._id);
              dispatch({
                type: "CHANGE_MODAL_STATE",
                payload: { isModalState: true },
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};
