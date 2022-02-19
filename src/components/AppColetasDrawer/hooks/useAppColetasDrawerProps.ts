import { useCallback } from "react";
import { useNavigate } from "react-router";

const useAppColetasDrawerProps = (closeDrawer: () => void) => {
  const navigate = useNavigate();

  const toCollectionPaths = useCallback(() => {
    navigate("/app/coletas/rotas");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toDashboard = useCallback(() => {
    navigate("/app/coletas/dashboard");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toListingUsers = useCallback(() => {
    navigate("/app/coletas/usuarios");
    closeDrawer();
  }, [closeDrawer, navigate]);

  return { toCollectionPaths, toDashboard, toListingUsers };
};

export { useAppColetasDrawerProps };
