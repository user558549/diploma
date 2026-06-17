import { ButtonLink } from "../../../../components/buttons";
import styles from "./BlockButtonsAdmin.module.css";

export const BlockButtonsAdmin = () => {
  return (
    <div className={styles.block_buttons_admin}>
      <ButtonLink operation="Редактировать бронь" path="/admin/edit" />
      <ButtonLink operation="Удалить бронь" path="/admin/delete" />
    </div>
  );
};
