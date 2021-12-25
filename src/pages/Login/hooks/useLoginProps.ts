import { useNavigate } from "react-router";
import { useCallback } from "react";

const useLoginProps = () => {
  const navigate = useNavigate();

  const toLoginColetas = useCallback(
    () => navigate("/login/coletas"),
    [navigate]
  );
  const toLoginReciclo = useCallback(
    () => navigate("/login/reciclo"),
    [navigate]
  );

  return { toLoginColetas, toLoginReciclo };
};

export { useLoginProps };
