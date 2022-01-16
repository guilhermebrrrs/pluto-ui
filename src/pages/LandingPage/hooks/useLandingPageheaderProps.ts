import { useCallback } from "react";
import { useNavigate } from "react-router";

const useLandingPageheaderProps = () => {
  const navigate = useNavigate();
  const toLogin = useCallback(() => navigate("/login"), [navigate]);
  const toRegister = useCallback(() => navigate("/register"), [navigate]);

  return { toLogin, toRegister };
};

export { useLandingPageheaderProps };
