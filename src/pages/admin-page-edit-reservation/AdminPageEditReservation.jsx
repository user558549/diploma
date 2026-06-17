import { useFetch } from "../../hooks/useFetch";
import { getReservRooms } from "../../BFF/api/getReservRooms";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import { Modal } from "../../components/modal/Modal";
import { RoomsBlock } from "./components/rooms-block/RoomsBlock";
import { FormEditReservation } from "./components/form-edit-reservation/FormEditReservation";
import styles from "./AdminPageEditReservation.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AdminPageEditReservation = () => {
  const isModalState = useSelector(
    ({ modalWindow }) => modalWindow.isModalState,
  );
  const dispatch = useDispatch();
  const [idRoom, setIdRoom] = useState(null);
  const { data: rooms, isLoading, error, refetch } = useFetch(getReservRooms);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className={styles.admin_page_edit_reservation}>
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
    </div>
  );
};
