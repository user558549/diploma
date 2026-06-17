import { useFetch } from "../../hooks/useFetch";
import { FreeRooms } from "./components/free-rooms/FreeRooms";
import { getFreeRooms } from "../../BFF/api";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import styles from "./RoomsPage.module.css";

export const RoomsPage = () => {
  const { data: freeRooms, isLoading, error } = useFetch(getFreeRooms);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.rooms_page}>
      {error ? <Error error={error} /> : <FreeRooms freeRooms={freeRooms} />}
    </div>
  );
};
