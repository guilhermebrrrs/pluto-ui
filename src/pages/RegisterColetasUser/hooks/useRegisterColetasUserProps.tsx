import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const useRegisterColetasUserProps = () => {
  const [email, setEmailState] = useState<string>("");
  const [organizationEmail, setOrganizationEmailState] = useState<string>("");
  const [password, setPasswordState] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userName, setUserNameState] = useState<string>("");

  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );
  const setOrganizationEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setOrganizationEmailState(value),
    []
  );
  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );
  const setUserName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setUserNameState(value),
    []
  );

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  );
  const passwordInputIcon = useMemo(
    () => (showPassword ? <ViewIcon /> : <ViewOffIcon />),
    [showPassword]
  );
  const passwordInputLabel = useMemo(
    () => (showPassword ? "Ocultar senha" : "Mostrar senha"),
    [showPassword]
  );

  return {
    email,
    organizationEmail,
    password,
    passwordInputIcon,
    passwordInputLabel,
    setEmail,
    setOrganizationEmail,
    setPassword,
    setUserName,
    showPassword,
    toggleShowPassword,
    userName,
  };
};

export { useRegisterColetasUserProps };
