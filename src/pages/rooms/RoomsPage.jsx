import { useFetch } from "../../hooks/useFetch";
import { FreeRooms } from "./components/free-rooms/FreeRooms";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import { URL } from "../../constants/url";
import styles from "./RoomsPage.module.css";

export const RoomsPage = () => {
  const { serverData: freeRooms, isLoading, error } = useFetch(URL.ROOMS);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.rooms_page}>
      {error ? <Error error={error} /> : <FreeRooms freeRooms={freeRooms} />}
    </div>
  );
};
