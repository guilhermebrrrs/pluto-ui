import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@apollo/client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import {
  CREATE_ORGANIZATION_USER,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
} from "data";
import {
  CreateOrganizationUserInput,
  Organization,
  OrganizationUser,
  OrganizationUserRegistrationValidation,
} from "types";
import { isSomeItemOfArrayNullOrBlank } from "utils";

const useRegisterOrganizationUserProps = () => {
  const toast = useToast();
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [email, setEmailState] = useState<string>("");
  const [password, setPasswordState] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsernameState] = useState<string>("");

  const organizationEmail = useMemo(() => {
    if (loggedUser?.__typename === "OrganizationUser") {
      return (loggedUser as OrganizationUser)?.organization?.email;
    }

    return (loggedUser as Organization)?.email;
  }, [loggedUser]);

  const [
    fetchMutation,
    {
      data: {
        createOrganizationUser = {} as OrganizationUserRegistrationValidation,
      } = {},
    },
  ] = useMutation(CREATE_ORGANIZATION_USER, {
    variables: {
      createOrganizationUserInput: {
        email,
        organizationEmail,
        password,
        username,
      } as CreateOrganizationUserInput,
    },
    refetchQueries: [FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID],
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

  const setUserName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setUsernameState(value),
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

  const isFieldsInvalid = useMemo(
    () =>
      isSomeItemOfArrayNullOrBlank([
        email,
        organizationEmail,
        password,
        username,
      ]),
    [email, organizationEmail, password, username]
  );

  const showErrorMessages = useCallback(() => {
    if (createOrganizationUser.organizationWithSameNameAlreadyExists) {
      toast({
        title: "Usuário não pode ter o mesmo nome da Organização.",
        description: "Informe um nome diferente para cadastrar o usuário.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
    if (createOrganizationUser.emailAlreadyExists) {
      toast({
        title: "Este endereço de e-mail já existe!",
        description: "Informe um endereço de e-mail válido.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [toast, createOrganizationUser]);

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
  }, [fetchMutation, isFieldsInvalid, toast]);

  useEffect(() => {
    createOrganizationUser?.registrationSucceeded
      ? toast({
          title: "Cadastro realizado!",
          description: "O usuário será listado na aba de listagem.",
          status: "success",
          duration: 7500,
          isClosable: true,
        })
      : showErrorMessages();
  }, [createOrganizationUser, showErrorMessages, toast]);

  return {
    email,
    handleRegistration,
    password,
    passwordInputIcon,
    passwordInputLabel,
    setEmail,
    setPassword,
    setUserName,
    showPassword,
    toggleShowPassword,
    username,
  };
};

export { useRegisterOrganizationUserProps };
