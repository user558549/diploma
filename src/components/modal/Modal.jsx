import styles from "./Modal.module.css";
import { Button } from "../buttons";
import { useDispatch } from "react-redux";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch({ type: "CHANGE_MODAL_STATE", payload: { isModalState: false } });
  };
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {children}

          <Button
            className={styles.closed_button}
            operation="Закрыть"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
};
