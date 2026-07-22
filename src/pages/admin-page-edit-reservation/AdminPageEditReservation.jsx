import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { FormEditReservation } from "./components/form-edit-reservation/FormEditReservation";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import { Modal } from "../../components/modal/Modal";
import { RoomsBlock } from "./components/rooms-block/RoomsBlock";
import { URL } from "../../constants/url";
import styles from "./AdminPageEditReservation.module.css";

export const AdminPageEditReservation = () => {
  const isModalState = useSelector(
    ({ modalWindow }) => modalWindow.isModalState,
  );
  const dispatch = useDispatch();
  const [idRoom, setIdRoom] = useState(null);
  const {
    serverData: rooms,
    isLoading,
    error,
    refetch,
  } = useFetch(URL.RESERVED_ROOMS_FOR_ADMIN);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className={styles.admin_page_edit_reservation}>
      {!rooms.length ? (
        <Error error={"нет комнат доступных к редактированию"} />
      ) : (
        <>
          <RoomsBlock rooms={rooms} setIdRoom={setIdRoom} dispatch={dispatch} />
          {isModalState && (
            <Modal>
              <FormEditReservation
                idRoom={idRoom}
                setIdRoom={setIdRoom}
                refetch={refetch}
                dispatch={dispatch}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};
