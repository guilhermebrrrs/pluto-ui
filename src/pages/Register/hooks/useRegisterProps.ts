import { useCallback } from "react";
import { useNavigate } from "react-router";

const useRegisterProps = () => {
  const navigate = useNavigate();

  const toRegisterColetasOrganization = useCallback(
    () => navigate("/register/coletas"),
    [navigate]
  );

  const toRegisterReciclo = useCallback(
    () => navigate("/register/reciclo"),
    [navigate]
  );

  return {
    toRegisterColetasOrganization,
    toRegisterReciclo,
  };
};

export { useRegisterProps };
