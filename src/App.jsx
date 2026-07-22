import { AppRoutes } from "./routes/AppRoutes";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import { request } from "./utils/request";
import { URL } from "./constants/url";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      dispatch({ type: "SET_USER", payload: user });
    } else {
      navigate("/login");
    }

    const checkAuth = async () => {
      const { user: userOnServer } = await request(URL.CHECK_TOKEN);
      if (userOnServer) {
        dispatch({ type: "SET_USER", payload: userOnServer });
        localStorage.setItem("User", JSON.stringify(userOnServer));
      } else {
        localStorage.removeItem("User");
        dispatch({ type: "DELETE_USER" });
        navigate("/login");
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
