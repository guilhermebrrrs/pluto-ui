import { useCallback } from "react";
import { useNavigate } from "react-router";

const useAppRecicloDrawerProps = (closeDrawer: () => void) => {
  const navigate = useNavigate();

  const toCollectionRequests = useCallback(() => {
    navigate("/app/reciclo/collectionrequests");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toDashboard = useCallback(() => {
    navigate("/app/reciclo/dashboard");
    closeDrawer();
  }, [closeDrawer, navigate]);

  const toLocations = useCallback(() => {
    navigate("/app/reciclo/locations");
    closeDrawer();
  }, [closeDrawer, navigate]);

  return { toCollectionRequests, toDashboard, toLocations };
};

export { useAppRecicloDrawerProps };
