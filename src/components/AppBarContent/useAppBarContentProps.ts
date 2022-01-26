import { AppAuthenticationContext } from "contexts";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import {
  DATA_APP_TYPE,
  DATA_LOGGED_USER,
  removeMultipleFromLocalStorage,
} from "utils";

const UseAppBarContentProps = () => {
  const navigate = useNavigate();
  const { setApp, setLoggedUser } = useContext(AppAuthenticationContext);

  const handleLogout = useCallback(() => {
    setApp && setApp(null);
    setLoggedUser && setLoggedUser(null);
    navigate("/login");
    removeMultipleFromLocalStorage([DATA_APP_TYPE, DATA_LOGGED_USER]);
  }, [navigate, setApp, setLoggedUser]);

  return { handleLogout };
};

export { UseAppBarContentProps };
