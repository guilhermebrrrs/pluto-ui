import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { CREATE_USER } from "data";
import { isSomeItemOfArrayNullOrBlank } from "utils";

const useRegisterRecicloProps = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmailState] = useState<string>("");
  const [name, setNameState] = useState<string>("");
  const [password, setPasswordState] = useState<string>("");

  const [
    fetchMutation,
    { data: { createUser: wasUserCreated = null as boolean | null } = {} },
  ] = useMutation(CREATE_USER, {
    variables: {
      createUserInput: {
        email,
        name,
        password,
      },
    },
  });

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

  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );

  const setName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setNameState(value),
    []
  );

  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );

  const isFieldsInvalid = useMemo(
    () => !isSomeItemOfArrayNullOrBlank([email, name, password]),
    [email, name, password]
  );

  const handleRegistration = useCallback(async () => {
    if (isFieldsInvalid) {
      toast({
        title: "Não foi possível efetuar o cadastro!",
        description: "Todos os campos precisam estar preenchidos.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      return;
    }
    await fetchMutation();
  }, [fetchMutation, toast, isFieldsInvalid]);

  useEffect(() => {
    if (wasUserCreated) setTimeout(() => navigate("/login/reciclo"), 10000);
  }, [navigate, wasUserCreated]);

  return {
    email,
    handleRegistration,
    name,
    password,
    passwordInputIcon,
    passwordInputLabel,
    setEmail,
    setName,
    setPassword,
    showPassword,
    toggleShowPassword,
    wasUserCreated,
  };
};

export { useRegisterRecicloProps };
