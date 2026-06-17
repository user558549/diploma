import { useFetch } from "../../hooks/useFetch";
import { getReservRooms } from "../../BFF/api/getReservRooms";
import { ReservRooms } from "./components/reserv-rooms/ReservRooms";
import { PanelDeleteConfirmation } from "./components/panel-delete-confirmation/PanelDeleteConfirmation";
import { Error } from "../../components/error/Error";
import { Loader } from "../../components";
import { Modal } from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminPageDeleteReservation.module.css";
import { useState } from "react";

export const AdminPageDeleteReservation = () => {
  const isModalState = useSelector(
    ({ modalWindow }) => modalWindow.isModalState,
  );
  const dispatch = useDispatch();
  const [roomId, setIsRoomId] = useState(null);
  const {
    data: reservRooms,
    isLoading,
    error,
    refetch,
  } = useFetch(getReservRooms);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className={styles.admin_page_delete_reservation}>
      <ReservRooms
        reservRooms={reservRooms}
        setIsRoomId={setIsRoomId}
        dispatch={dispatch}
      />
      {isModalState && (
        <Modal>
          <PanelDeleteConfirmation
            roomId={roomId}
            onDeleteSuccess={refetch}
            dispatch={dispatch}
          />
        </Modal>
      )}
    </div>
  );
};
