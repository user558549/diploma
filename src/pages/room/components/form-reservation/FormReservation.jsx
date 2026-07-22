import { useState } from "react";
import { useNavigate } from "react-router";
import { reservationRoom } from "../../../../api/reservationRoom";
import { Button } from "../../../../components/buttons";
import styles from "./FormReservation.module.css";
// TODOO
export const FormReservation = ({ user, idRoom, nameRoom, dispatch }) => {
  const [isReservation, setIsReservation] = useState(false);
  const navigate = useNavigate();

  const reservRoom = async () => {
    const resultReservation = await reservationRoom(user, idRoom);
    console.log(resultReservation);

    if (resultReservation) {
      navigate("/user");
      setIsReservation(true);
      dispatch({
        type: "CHANGE_MODAL_STATE",
        payload: { isModalState: false },
      });
    }
  };

  return (
    <div className={styles.form_container}>
      {isReservation ? (
        <div>Номер успешно забронирован,ожидайте...</div>
      ) : (
        <div>{`Вы уверены что хотите забронировать номер: ${nameRoom}?`}</div>
      )}

      <Button operation="Да" onClick={reservRoom} disabled={isReservation} />
    </div>
  );
};
