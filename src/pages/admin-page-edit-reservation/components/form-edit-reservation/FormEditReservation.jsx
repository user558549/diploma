import { useState } from "react";
import { editReservationAdmin } from "../../../../BFF/api/editReservationAdmin";
import { Button } from "../../../../components/buttons";

import styles from "./FormEditReservation.module.css";

export const FormEditReservation = ({ idRoom, refetch, dispatch }) => {
  const [login, setLogin] = useState("");

  const editReservation = async (event) => {
    event.preventDefault();
    const resutlEditReservation = await editReservationAdmin(idRoom, login);
    if (resutlEditReservation) {
      refetch();
      dispatch({
        type: "CHANGE_MODAL_STATE",
        payload: { isModalState: false },
      });
    }
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={editReservation} className={styles.form}>
        <input
          type="text"
          name="login"
          value={login}
          placeholder="Введите логин пользовтеля..."
          required
          onChange={({ target }) => setLogin(target.value)}
        />
        <Button operation="Сохранить" />
      </form>
    </div>
  );
};
