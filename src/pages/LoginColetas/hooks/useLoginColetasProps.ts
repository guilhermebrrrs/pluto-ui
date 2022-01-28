import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import { useLazyQuery } from "@apollo/client";
import {
  AUTHENTICATE_ORGANIZATION,
  AUTHENTICATE_ORGANIZATION_USER,
} from "data";
import {
  AppType,
  AuthenticateOrganizationInput,
  AuthenticateOrganizationUserInput,
  Organization,
  OrganizationUser,
} from "types";
import { DATA_APP_TYPE, DATA_LOGGED_USER, setIntoLocalStorage } from "utils";

const useLoginColetasProps = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { setApp, setLoggedUser } = useContext(AppAuthenticationContext);

  const [email, setEmailState] = useState<string>();
  const [organizationEmail, setOrganizationEmailState] = useState<string>();
  const [password, setPasswordState] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [triggerRedirect, setTriggerRedirect] = useState<boolean>(false);

  const [
    fetchAuthenticateOrganizationUserQuery,
    { data: { authenticateOrganizationUser = {} as OrganizationUser } = {} },
  ] = useLazyQuery(AUTHENTICATE_ORGANIZATION_USER, {
    variables: {
      authenticateOrganizationUserInput: {
        email,
        organizationEmail,
        password,
      } as AuthenticateOrganizationUserInput,
    },
  });

  const [
    fetchAuthenticateOrganizationQuery,
    { data: { authenticateOrganization = {} as Organization } = {} },
  ] = useLazyQuery(AUTHENTICATE_ORGANIZATION, {
    variables: {
      authenticateOrganizationInput: {
        organizationEmail,
        password,
      } as AuthenticateOrganizationInput,
    },
  });

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

  const toRegister = useCallback(() => navigate("/register"), [navigate]);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    email && organizationEmail
      ? await fetchAuthenticateOrganizationUserQuery()
      : await fetchAuthenticateOrganizationQuery();
    setTriggerRedirect(true);
  }, [
    email,
    fetchAuthenticateOrganizationQuery,
    fetchAuthenticateOrganizationUserQuery,
    organizationEmail,
  ]);

  const validate = useCallback(() => {
    const isValid =
      !!(authenticateOrganization ?? authenticateOrganizationUser)?._id ?? null;

    if (isValid) {
      setApp && setApp(AppType.APP_COLETAS);
      setIntoLocalStorage(DATA_APP_TYPE, AppType.APP_COLETAS);
      setIntoLocalStorage(
        DATA_LOGGED_USER,
        authenticateOrganization ?? authenticateOrganizationUser
      );
      setLoggedUser &&
        setLoggedUser(authenticateOrganization ?? authenticateOrganizationUser);
      navigate("/app/coletas/dashboard");
      setLoading(false);
      setTriggerRedirect(false);
      return;
    }

    if (!organizationEmail) {
      toast({
        title: "Não foi possível efetuar login.",
        description: "É preciso informar o e-mail da organização.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      setLoading(false);
      setTriggerRedirect(false);
      return;
    }

    if (!password) {
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

    setTriggerRedirect(false);
    setLoading(false);
    toast({
      title: "Não foi possível efetuar login.",
      description: "Verifique se os dados fornecidos estão corretos.",
      status: "error",
      duration: 7500,
      isClosable: true,
    });
  }, [
    authenticateOrganizationUser,
    authenticateOrganization,
    navigate,
    organizationEmail,
    password,
    setApp,
    setLoggedUser,
    toast,
  ]);

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
    validate,
  ]);

  return {
    email,
    handleLogin,
    loading,
    organizationEmail,
    password,
    setEmail,
    setOrganizationEmail,
    setPassword,
    toRegister,
  };
};

export { useLoginColetasProps };
