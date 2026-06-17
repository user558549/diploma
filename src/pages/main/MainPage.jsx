import { H2 } from "../../components";
import { ButtonLink } from "../../components/buttons";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.main_page_container}>
      <div className={styles.welcome}>
        <H2>Добро пожаловать в сервис бронирования номеров</H2>
      </div>
      <div className={styles.service_features}>
        <H2>
          В нашем сервисе вы можете забронировать номер <br />
          для приятного отдыха и времяпрепровождения
        </H2>
      </div>
      <ButtonLink
        operation="К бронированию"
        path="/rooms"
        className={styles.on_reservation_button}
      />
    </div>
  );
};
