import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import { AUTHENTICATE_USER } from "data";
import { AppType, User } from "types";
import { setIntoLocalStorage, LOGGED_USER, APP_TYPE } from "utils";

const useLoginRecicloProps = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { setApp, setLoggedUser } = useContext(AppAuthenticationContext);
  const [email, setEmailState] = useState<string>();
  const [password, setPasswordState] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [triggerRedirect, setTriggerRedirect] = useState<boolean>(false);

  const [fetchQuery, { data: { authenticateUser: user = {} as User } = {} }] =
    useLazyQuery(AUTHENTICATE_USER, {
      variables: {
        authenticateUserInput: { email, password },
      },
    });

  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );

  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );

  const toRegisterReciclo = useCallback(
    () => navigate("/register/reciclo"),
    [navigate]
  );

  const handleLogin = useCallback(async () => {
    setLoading(true);
    fetchQuery && (await fetchQuery());
    setTriggerRedirect(true);
  }, [fetchQuery]);

  const validate = useCallback(() => {
    const isValid = !!user?._id ?? null;

    if (isValid) {
      setLoggedUser && setLoggedUser(user as User);
      setApp && setApp(AppType.APP_RECICLO);
      setIntoLocalStorage(APP_TYPE, AppType.APP_RECICLO);
      setIntoLocalStorage(LOGGED_USER, user);
      navigate("/app/reciclo/dashboard");
      setLoading(false);
      setTriggerRedirect(false);
      return;
    }

    if (!email && password) {
      toast({
        title: "Não foi possível efetuar login.",
        description: "É preciso informar um e-mail.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      setLoading(false);
      setTriggerRedirect(false);
      return;
    }

    if (email && !password) {
      toast({
        title: "Não foi possível efetuar login.",
        description: "É preciso informar uma senha.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      setLoading(false);
      setTriggerRedirect(false);
      return;
    }

    setLoading(false);
    toast({
      title: "Não foi possível efetuar login.",
      description: "Verifique se e-mail e senha fornecidos estão corretos.",
      status: "error",
      duration: 7500,
      isClosable: true,
    });
  }, [email, navigate, password, setApp, setLoggedUser, toast, user]);

  useEffect(() => {
    if (triggerRedirect) validate();
  }, [
    email,
    navigate,
    password,
    setApp,
    setLoggedUser,
    toast,
    triggerRedirect,
    user,
    validate,
  ]);

  return {
    email,
    handleLogin,
    loading,
    password,
    setEmail,
    setPassword,
    toRegisterReciclo,
  };
};

export { useLoginRecicloProps };
