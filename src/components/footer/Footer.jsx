import { Link, useNavigate } from "react-router";
import { Button } from "../buttons";
import { formateDate } from "./utils/formateDate";
import styles from "./Footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();
  const formateTodayDate = formateDate(new Date());

  return (
    <div className={styles.footer_container}>
      <div className={styles.info_block}>
        <Link to="/about_us">О нас</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/">Главная страница</Link>
      </div>
      <div className={styles.container_date_and_button}>
        {formateTodayDate}
        <Button
          className={styles.button_footer}
          operation="Назад"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};
