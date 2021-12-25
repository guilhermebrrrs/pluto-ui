import { ChangeEvent, useCallback, useContext, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import { AUTHENTICATE_USER } from "data";
import { User } from "types";
import { AppRecicloAuthenticationContext } from "contexts";
import { useToast } from "@chakra-ui/react";

const useLoginRecicloProps = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useContext(AppRecicloAuthenticationContext);
  const [email, setEmailState] = useState<string>();
  const [password, setPasswordState] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const [
    getAuthenticateUser,
    { data: { authenticateUser: user = {} as User } = {} },
  ] = useLazyQuery(AUTHENTICATE_USER, {
    variables: {
      authenticateUserInput: { email: email, password: password },
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

  const validate = useMemo(() => user?._id != null, [user]);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    getAuthenticateUser && (await getAuthenticateUser());

    if (validate) {
      setUser && setUser(user);
      navigate("/app/reciclo");
      setLoading(false);
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
  }, [
    email,
    getAuthenticateUser,
    navigate,
    password,
    setUser,
    toast,
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
  };
};

export { useLoginRecicloProps };
