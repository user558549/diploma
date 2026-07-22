import { ButtonLink } from "../../../../components/buttons";
import { Error } from "../../../../components/error/Error";

export const PanelForNotAuthorizeUser = ({ params }) => {
  return (
    <>
      <Error error="Бронирование доступно только авторизованным пользователям" />
      <ButtonLink
        operation="Зарегистрироваться"
        path="/register"
        state={{ from: `/rooms/${params.number_room}` }}
      />
      <ButtonLink
        operation="Войти"
        path="/login"
        state={{ from: `/rooms/${params.number_room}` }}
      />
    </>
  );
};
