import { useNavigate } from "react-router";
import { useCallback } from "react";

const useDashboardRecicloProps = () => {
  const navigate = useNavigate();

  const toCollectionRequests = useCallback(
    () => navigate("/app/reciclo/collectionrequests"),
    [navigate]
  );

  return { toCollectionRequests };
};

export { useDashboardRecicloProps };
