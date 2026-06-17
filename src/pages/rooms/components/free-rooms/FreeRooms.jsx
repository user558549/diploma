import { H2 } from "../../../../components";
import { ButtonLink } from "../../../../components/buttons";
import styles from "./FreeRooms.module.css";

export const FreeRooms = ({ freeRooms }) => {
  return (
    <>
      <div className={styles.inform_about_free_rooms}>
        <H2>Доступные номера</H2>
      </div>
      <div className={styles.rooms_container}>
        {freeRooms.map((room) => (
          <div key={room.id} className={styles.room_container}>
            <span> {room.number_room}</span>
            <div className={styles.room}>
              <img src="" alt="Номер"></img>
              <ButtonLink
                operation="Открыть"
                path={`/room/${room.number_room}`}
                className={styles.button_open_free_room}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
