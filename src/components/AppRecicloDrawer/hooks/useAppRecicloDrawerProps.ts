import { useCallback } from "react";
import { useNavigate } from "react-router";

const useAppRecicloDrawerProps = (closeDrawer: () => void) => {
  const navigate = useNavigate();

  const toDashboard = useCallback(() => {
    navigate("/app/reciclo/dashboard");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toLocations = useCallback(() => {
    navigate("/app/reciclo/locations");
    closeDrawer();
  }, [closeDrawer, navigate]);

  return { toDashboard, toLocations };
};

export { useAppRecicloDrawerProps };
