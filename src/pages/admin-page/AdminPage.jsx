import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { getRooms } from "../../BFF/api";
import { H2, Loader } from "../../components";
import { PanelStatusRooms } from "./components/panel-status-rooms/PanelStausRooms";
import { ColorStatusRooms } from "./components/color-status-rooms/ColorStatusRooms";
import { BlockButtonsAdmin } from "./components/block-buttons-admin/BlockButtonsAdmin";
import { chekAccess } from "./utils/checkAccess";
import { Error } from "../../components/error/Error";
import styles from "./AdminPage.module.css";

export const AdminPage = () => {
  const { data: rooms, isLoading, error } = useFetch(getRooms);
  const userRole = useSelector(({ user }) => user.role);
  const accessStatus = chekAccess(userRole);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.admin_page}>
      {accessStatus ? (
        error ? (
          <Error error={error} />
        ) : (
          <>
            <H2 className={styles.H2_panel_admin}>Панель Администратора</H2>
            <PanelStatusRooms rooms={rooms} />
            <ColorStatusRooms />
            <BlockButtonsAdmin />
          </>
        )
      ) : (
        <Error error="Доступ запрещен" />
      )}
    </div>
  );
};
