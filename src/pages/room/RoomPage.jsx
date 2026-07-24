import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components";
import { Modal } from "../../components/modal/Modal";
import { Error } from "../../components/error/Error";
import { FormReservation } from "./components/form-reservation/FormReservation";
import { OneRoom } from "./components/one-room/OneRoom";
import { PanelForNotAuthorizeUser } from "./components/panel-for-not-authorize-user/PanelForNotAuthorizeUser";
import styles from "./RoomPage.module.css";

export const RoomPage = () => {
  const user = useSelector(({ user }) => user);
  const isModalState = useSelector(
    ({ modalWindow }) => modalWindow.isModalState,
  );
  const dispatch = useDispatch();

  const params = useParams();

  const {
    serverData: oneRoom,
    isLoading,
    error,
  } = useFetch(`http://94.102.89.76:5000/rooms/${params.number_room}`);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.room_page}>
      {error ? (
        <Error error={error} />
      ) : oneRoom.reservation ? (
        <Error error="Номер уже забронирован" />
      ) : (
        <OneRoom oneRoom={oneRoom} dispatch={dispatch} />
      )}
      {isModalState && (
        <Modal>
          {user.login ? (
            <FormReservation
              user={user}
              idRoom={oneRoom._id}
              nameRoom={oneRoom.name}
              dispatch={dispatch}
            />
          ) : (
            <PanelForNotAuthorizeUser params={params} />
          )}
        </Modal>
      )}
    </div>
  );
};
