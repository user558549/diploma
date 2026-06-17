import styles from "./ContactsPage.module.css";

export const ContactsPage = () => {
  return (
    <div className={styles.contacts_page}>
      <div>Номер телефона технической поддержки: ***********</div>
      <div>Номер телефона администратора: ***********</div>
      <div>
        Предложения по улучшению сервиса или претензии можно направить по почте:
        *****@******
      </div>
    </div>
  );
};
