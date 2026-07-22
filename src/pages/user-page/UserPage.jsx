import { useFetch } from "../../hooks/useFetch";
import { InfoBlock } from "./components/info-block/InfoBlock";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import { URL } from "../../constants/url";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  const {
    serverData: userRooms,
    isLoading,
    error,
    refetch,
  } = useFetch(URL.USERS_ROOMS);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.user_page}>
      {error ? (
        <Error error={error} />
      ) : userRooms.length ? (
        <InfoBlock userRoom={userRooms} refetch={refetch} />
      ) : (
        <Error error="У вас нет активных броней" />
      )}
    </div>
  );
};
