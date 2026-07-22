import { deleteReservationAdmin } from "../../../../api/deleteReservationAdmin";
import { Button } from "../../../../components/buttons";
import { H2 } from "../../../../components";
import styles from "./PanelDeleteConfirmation.module.css";

export const PanelDeleteConfirmation = ({
  roomId,
  onDeleteSuccess,
  dispatch,
}) => {
  const deleteReservation = async (id) => {
    const deleteedRoom = await deleteReservationAdmin(id);
    if (deleteedRoom) {
      dispatch({
        type: "CHANGE_MODAL_STATE",
        payload: { isModalState: false },
      });
      onDeleteSuccess();
    }
  };

  return (
    <>
      {" "}
      <H2>Вы уверены что хотите удалить бронь?</H2>
      <Button
        operation="Да"
        onClick={() => deleteReservation(roomId)}
        className={styles.button_delete_reservation}
      />
    </>
  );
};
