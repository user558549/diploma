import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { ReservRooms } from "./components/reserv-rooms/ReservRooms";
import { PanelDeleteConfirmation } from "./components/panel-delete-confirmation/PanelDeleteConfirmation";
import { Error } from "../../components/error/Error";
import { Loader } from "../../components";
import { Modal } from "../../components/modal/Modal";
import { URL } from "../../constants/url";
import styles from "./AdminPageDeleteReservation.module.css";

export const AdminPageDeleteReservation = () => {
  const isModalState = useSelector(
    ({ modalWindow }) => modalWindow.isModalState,
  );
  const dispatch = useDispatch();
  const [roomId, setRoomId] = useState(null);
  const {
    serverData: reservRooms,
    isLoading,
    error,
    refetch,
  } = useFetch(URL.RESERVED_ROOMS_FOR_ADMIN);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className={styles.admin_page_delete_reservation}>
      {!reservRooms.length ? (
        <Error error={"нет комнат доступных к редактированию"} />
      ) : (
        <>
          {" "}
          <ReservRooms
            reservRooms={reservRooms}
            setRoomId={setRoomId}
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
        </>
      )}
    </div>
  );
};
