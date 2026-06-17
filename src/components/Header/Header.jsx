import { useSelector } from "react-redux";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { ROLE } from "../../constants/constants";
import styles from "./Header.module.css";

export const Header = () => {
  const userLogin = useSelector(({ user }) => user.login);
  const userRole = useSelector(({ user }) => user.role);
  const isAdmin = userRole === ROLE.ADMIN;

  return (
    <div className={styles.header_container}>
      <ControlPanel userLogin={userLogin} isAdmin={isAdmin} />
    </div>
  );
};
