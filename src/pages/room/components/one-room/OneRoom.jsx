import { H2 } from "../../../../components";
import { Button } from "../../../../components/buttons";
import { useNavigate } from "react-router";
import styles from "./OneRoom.module.css";

export const OneRoom = ({ oneRoom, dispatch }) => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className={styles.info_room_container}>
        <H2>{oneRoom.name}</H2>
        <div className={styles.info_room}>
          <div className={styles.photo}>
            <img src={oneRoom.image_url} alt="Номер" />
          </div>
          <div className={styles.room_description}>{oneRoom.description}</div>
        </div>
        <div className={styles.button_panel}>
          <Button
            operation="Назад"
            onClick={() => navigate("/rooms")}
            className={styles.button_one_room}
          />
          <Button
            operation="Забронировать"
            onClick={() =>
              dispatch({
                type: "CHANGE_MODAL_STATE",
                payload: { isModalState: true },
              })
            }
            className={styles.button_one_room}
          />
        </div>
      </div>
    </>
  );
};
