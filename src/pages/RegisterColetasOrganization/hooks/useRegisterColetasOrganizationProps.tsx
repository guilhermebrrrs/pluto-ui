import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { CREATE_ORGANIZATION } from "data";
import {
  CreateOrganizationInput,
  OrganizationRegistrationValidation,
  OrganizationType,
} from "types";
import { transformEnumValue } from "utils";

const useRegisterColetasOrganizationProps = () => {
  const [cpfCnpj, setCpfCnpjState] = useState<string>("");
  const [email, setEmailState] = useState<string>("");
  const [organizationName, setOrganizationNameState] = useState<string>("");
  const [organizationType, setOrganizationTypeState] =
    useState<OrganizationType | null>(null);
  const [password, setPasswordState] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toast = useToast();
  const navigate = useNavigate();
  const [
    fetchMutation,
    {
      data: {
        createOrganization = {} as OrganizationRegistrationValidation,
      } = {},
    },
  ] = useMutation(CREATE_ORGANIZATION, {
    variables: {
      createOrganizationInput: {
        cpfCnpj,
        email,
        name: organizationName,
        organizationType,
        password,
      } as CreateOrganizationInput,
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
  const setCpfCnpj = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setCpfCnpjState(value),
    []
  );
  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );
  const setOrganizationName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setOrganizationNameState(value),
    []
  );
  const setOrganizationType = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      setOrganizationTypeState(value as unknown as OrganizationType),
    []
  );
  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );
  const organizationTypeOptions = useMemo(
    () =>
      Object.values(OrganizationType).map((item: OrganizationType) => (
        <option value={item}>{transformEnumValue(item)}</option>
      )),
    []
  );

  const isFieldsInvalid = useMemo(
    () =>
      !cpfCnpj ||
      cpfCnpj === "" ||
      !email ||
      email === "" ||
      !organizationName ||
      organizationName === "" ||
      !organizationType ||
      !password ||
      password === "",
    [cpfCnpj, email, organizationName, organizationType, password]
  );
  const showErrorMessages = useCallback(() => {
    if (createOrganization.cpfCnpjAlreadyExists) {
      toast({
        title: "Este CPF ou CNPJ já existe!",
        description: "Informe um CPF ou CNPJ válido.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
    if (createOrganization.emailAlreadyExists) {
      toast({
        title: "Este endereço de e-mail já existe!",
        description: "Informe um endereço de e-mail válido.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [toast, createOrganization]);
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
    if (createOrganization?.registrationSucceeded)
      setTimeout(() => navigate("/login/coletas/organization"), 10000);
    else showErrorMessages();
  }, [navigate, showErrorMessages, createOrganization]);

  return {
    cpfCnpj,
    email,
    handleRegistration,
    organizationName,
    organizationType,
    organizationTypeOptions,
    password,
    passwordInputIcon,
    passwordInputLabel,
    setCpfCnpj,
    setEmail,
    setOrganizationName,
    setOrganizationType,
    setPassword,
    showPassword,
    toggleShowPassword,
    registrationSucceeded: createOrganization?.registrationSucceeded ?? null,
  };
};

export { useRegisterColetasOrganizationProps };
