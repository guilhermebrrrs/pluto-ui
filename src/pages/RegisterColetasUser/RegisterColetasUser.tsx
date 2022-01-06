import { FunctionComponent } from "react";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Waves } from "components";
import { definitions } from "utils";
import { MdOutlineGroups, MdPerson } from "react-icons/md";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useRegisterColetasUserProps } from "./hooks/useRegisterColetasUserProps";
import { Link as RTDLink } from "react-router-dom";

const RegisterColetasUser: FunctionComponent = () => {
  const {
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
  } = useRegisterColetasUserProps();

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
              Cadastrar Usuário Organização
            </Text>
            <InputGroup>
              <InputLeftElement color="gray.600" children={<MdPerson />} />
              <Input
                borderColor="gray.300"
                focusBorderColor="gray.700"
                placeholder="Nome de Usuário"
                onChange={setUserName}
                value={userName}
                width="400px"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement color="gray.600" children={<EmailIcon />} />
              <Input
                borderColor="gray.300"
                focusBorderColor="gray.700"
                placeholder="E-mail"
                onChange={setEmail}
                value={email}
                width="400px"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                color="gray.600"
                children={<MdOutlineGroups />}
              />
              <Input
                borderColor="gray.300"
                focusBorderColor="gray.700"
                placeholder="E-mail da Organização"
                onChange={setOrganizationEmail}
                value={organizationEmail}
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
            <Button colorScheme="green" onClick={() => {}} width="400px">
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Cadastrar
              </Text>
            </Button>
            <Link as={RTDLink} to="/register">
              <Text fontFamily="Lato" fontSize={definitions.fontSize.small}>
                Voltar
              </Text>
            </Link>
          </Flex>
        </form>
      </Flex>
      <Waves />
    </Flex>
  );
};

export default RegisterColetasUser;
