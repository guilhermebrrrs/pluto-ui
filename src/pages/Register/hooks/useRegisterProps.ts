import { useCallback } from "react";
import { useNavigate } from "react-router";

const useRegisterProps = () => {
  const navigate = useNavigate();

  const toRegisterColetasOrganization = useCallback(
    () => navigate("/register/coletas/organization"),
    [navigate]
  );

  const toRegisterColetasUser = useCallback(
    () => navigate("/register/coletas/user"),
    [navigate]
  );

  const toRegisterReciclo = useCallback(
    () => navigate("/register/reciclo"),
    [navigate]
  );

  return {
    toRegisterColetasOrganization,
    toRegisterColetasUser,
    toRegisterReciclo,
  };
};

export { useRegisterProps };
