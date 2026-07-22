import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLE } from "../constants/constants";

import {
  RegistrationPage,
  LoginPage,
  RoomsPage,
  RoomPage,
  MainPage,
  ContactsPage,
  AboutUsPage,
  UserPage,
  AdminPage,
  AdminPageEditReservation,
  AdminPageDeleteReservation,
  NotFoundPage,
} from "../pages";

export const AppRoutes = () => {
  const role = useSelector(({ user }) => user.role);
  const isAdmin = role === ROLE.ADMIN;
  const isUser = role === ROLE.USER || ROLE.ADMIN;

  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegistrationPage /> },
    { path: "/rooms", element: <RoomsPage /> },
    { path: "/rooms/:number_room", element: <RoomPage /> },
    { path: "/contacts", element: <ContactsPage /> },
    { path: "/about_us", element: <AboutUsPage /> },
    { path: "/", element: <MainPage /> },

    ...(isUser
      ? [
          {
            path: "/user",
            element: <UserPage />,
          },
        ]
      : []),

    ...(isAdmin
      ? [
          {
            path: "/admin",
            element: <AdminPage />,
          },
          {
            path: "/admin/edit",
            element: <AdminPageEditReservation />,
          },
          {
            path: "/admin/delete",
            element: <AdminPageDeleteReservation />,
          },
        ]
      : []),

    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};
