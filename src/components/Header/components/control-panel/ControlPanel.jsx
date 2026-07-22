import { useDispatch } from "react-redux";
import { URL } from "../../../../constants/url";
import { request } from "../../../../utils/request";
import { ButtonLink } from "../../../buttons";
import { Button } from "../../../buttons";
import styles from "./ControlPanel.module.css";

export const ControlPanel = ({ isAdmin, userLogin }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.control_panel}>
      {userLogin ? (
        <>
          <div className={styles.userName}>{userLogin}</div>
          <Button
            operation="Выйти"
            className={`${styles.exit} ${styles.button_header}`}
            onClick={() => {
              request(URL.LOGOUT, "POST");
              dispatch({ type: "DELETE_USER" });
              localStorage.removeItem("User");
            }}
          />
          {!isAdmin && (
            <ButtonLink
              operation="Моя бронь"
              path="/user"
              className={`${styles.all_rooms_button} ${styles.button_header}`}
            />
          )}
          {isAdmin && (
            <ButtonLink
              operation="Все номера"
              path="/admin"
              className={`${styles.all_rooms_button} ${styles.button_header}`}
            />
          )}
        </>
      ) : (
        <>
          <ButtonLink
            className={styles.button_header}
            operation="Вход"
            path="/login"
          />
          <ButtonLink
            className={styles.button_header}
            operation="Регистрация"
            path="/register"
          />
        </>
      )}
    </div>
  );
};
