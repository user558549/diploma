import styles from "./ColorStatusRooms.module.css";

export const ColorStatusRooms = () => {
  return (
    <div className={styles.color_status_rooms_container}>
      <div className={styles.flex}>
        <div className={styles.color_status_rooms_green}></div>
        <span>-</span>
        <span>Свободно</span>
      </div>

      <div className={styles.flex}>
        {" "}
        <div className={styles.color_status_rooms_red}></div>
        <span>-</span>
        <span>Занято</span>
      </div>
    </div>
  );
};
