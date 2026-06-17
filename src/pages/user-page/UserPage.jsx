import { useFetch } from "../../hooks/useFetch";
import { getUserRooms } from "../../BFF/api/getUserRooms";
import { useSelector } from "react-redux";
import { InfoBlock } from "./components/info-block/InfoBlock";
import { Loader } from "../../components";
import { Error } from "../../components/error/Error";
import styles from "./UserPage.module.css";

export const UserPage = () => {
  const userLogin = useSelector(({ user }) => user.login);
  const {
    data: userRooms,
    isLoading,
    error,
    refetch,
  } = useFetch(getUserRooms, userLogin);
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
