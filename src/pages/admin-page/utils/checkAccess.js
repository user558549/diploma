import { ROLE } from "../../../constants/constants";

export const chekAccess = (userRole) => {
  if (userRole !== ROLE.ADMIN) {
    return false;
  } else {
    return true;
  }
};
