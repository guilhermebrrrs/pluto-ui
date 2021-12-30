import { FunctionComponent } from "react";
import { Link as RTDLink } from "react-router-dom";
import {
  MdContentPaste,
  MdOutlineEmail,
  MdOutlineGroups,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import { LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Waves } from "components";
import { definitions } from "utils";
import { useRegisterColetasOrganizationProps } from "./hooks";

const RegisterColetasOrganization: FunctionComponent = () => {
  const {
    cpfCnpj,
    email,
    handleRegistration,
    organizationName,
    organizationType,
    organizationTypeOptions,
    password,
    passwordInputIcon,
    passwordInputLabel,
    registrationSucceeded,
    setCpfCnpj,
    setEmail,
    setOrganizationName,
    setOrganizationType,
    setPassword,
    showPassword,
    toggleShowPassword,
  } = useRegisterColetasOrganizationProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="green.500"
      height="100vh"
      justifyContent={definitions.justifyContent.flexEnd}
      width="100vw"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        backgroundColor="gray.100"
        borderLeftColor="gray.600"
        borderLeftWidth="2px"
        flexDirection="column"
        gap={definitions.spacing.default}
        height="100vh"
        justifyContent={definitions.justifyContent.center}
        maxWidth="60%"
        padding={definitions.spacing.default}
        width="60%"
        zIndex={5}
      >
        {registrationSucceeded !== true && (
          <>
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              justifyContent={definitions.justifyContent.center}
            >
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.biggest}
                fontWeight={definitions.fontWeight.bold}
              >
                Pluto
              </Text>
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Coletas
              </Text>
            </Flex>
            <form>
              <Flex
                alignItems={definitions.alignItems.center}
                flexDirection="column"
                gap={definitions.spacing.smaller}
              >
                <Text
                  fontFamily="Lato"
                  fontSize={definitions.fontSize.small}
                  fontWeight={definitions.fontWeight.bold}
                >
                  Cadastrar Organização
                </Text>
                <InputGroup>
                  <InputLeftElement
                    color="gray.600"
                    children={<MdOutlineGroups />}
                  />
                  <Input
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    placeholder="Nome da Organização"
                    onChange={setOrganizationName}
                    value={organizationName}
                    width="400px"
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    color="gray.600"
                    children={<MdContentPaste />}
                  />
                  <Input
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    placeholder="CNPJ"
                    onChange={setCpfCnpj}
                    value={cpfCnpj}
                    width="400px"
                  />
                </InputGroup>
                <Select
                  borderColor="gray.300"
                  color="gray.400"
                  onChange={setOrganizationType}
                  placeholder="Selecione um tipo de organização ..."
                  value={organizationType as string}
                  variant="outline"
                >
                  {organizationTypeOptions}
                </Select>
                <InputGroup>
                  <InputLeftElement
                    color="gray.600"
                    children={<MdOutlineEmail />}
                  />
                  <Input
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    placeholder="Email da Organização"
                    onChange={setEmail}
                    value={email}
                    width="400px"
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement color="gray.600" children={<LockIcon />} />
                  <Input
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    placeholder="Senha"
                    onChange={setPassword}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    width="400px"
                  />
                  <InputRightElement color="gray.600">
                    <Tooltip label={passwordInputLabel}>
                      <IconButton
                        aria-label="ver senha"
                        onClick={toggleShowPassword}
                        size="sm"
                      >
                        {passwordInputIcon}
                      </IconButton>
                    </Tooltip>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </form>
            <Button
              colorScheme="green"
              onClick={handleRegistration}
              width="400px"
            >
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Cadastrar Organização
              </Text>
            </Button>
            <Link as={RTDLink} to="/register">
              <Text fontFamily="Lato" fontSize={definitions.fontSize.small}>
                Voltar
              </Text>
            </Link>
          </>
        )}
        {registrationSucceeded === true && (
          <Flex
            flexDirection="column"
            gap={definitions.spacing.default}
            alignItems={definitions.alignItems.center}
          >
            <MdSentimentVerySatisfied size={64} />
            <Text fontFamily="Lato" fontSize={definitions.fontSize.default}>
              Organização criada! Você será redirecionado para página de login!
            </Text>
            <Text fontFamily="Lato" fontSize={definitions.fontSize.default}>
              Aguarde...
            </Text>
          </Flex>
        )}
      </Flex>
      <Waves />
    </Flex>
  );
};

export default RegisterColetasOrganization;
