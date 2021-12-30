import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import { AppAuthenticationContext } from "contexts";

const UseAppBarContentProps = () => {
  const navigate = useNavigate();
  const { setApp, setLoggedUser } = useContext(AppAuthenticationContext);

  const handleLogout = useCallback(() => {
    setApp && setApp(null);
    setLoggedUser && setLoggedUser(null);
    navigate("/login");
  }, [navigate, setApp, setLoggedUser]);

  return { handleLogout };
};

export { UseAppBarContentProps };
