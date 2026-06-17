import { H2 } from "../../../../components";
import styles from "./PanelStatusRooms.module.css";

export const PanelStatusRooms = ({ rooms }) => {
  return (
    <div className={styles.panel_status_rooms_container}>
      <H2>Статус Номеров</H2>
      <div className={styles.panel_status_rooms}>
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`${styles.room} ${room.reservation === false ? styles.free : ""}`}
          >
            {room.number_room}
          </div>
        ))}
      </div>
    </div>
  );
};
