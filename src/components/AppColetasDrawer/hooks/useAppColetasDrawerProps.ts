import { useNavigate } from "react-router";
import { useCallback } from "react";

const useAppColetasDrawerProps = (closeDrawer: () => void) => {
  const navigate = useNavigate();

  const toDashboard = useCallback(() => {
    navigate("/app/coletas/dashboard");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toListingUsers = useCallback(() => {
    navigate("/app/coletas/usuarios");
    closeDrawer();
  }, [closeDrawer, navigate]);

  return { toDashboard, toListingUsers };
};

export { useAppColetasDrawerProps };
