import { FunctionComponent } from "react";
import { Link as RTDLink } from "react-router-dom";
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
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  MdPerson,
  MdSentimentDissatisfied,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import { Waves } from "components";
import { definitions } from "utils";
import { useRegisterRecicloProps } from "./hooks";

const RegisterReciclo: FunctionComponent = () => {
  const {
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
  } = useRegisterRecicloProps();

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
        {wasUserCreated === null && (
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
                Reciclo
              </Text>
            </Flex>
            <form>
              <Flex
                alignItems={definitions.alignItems.center}
                flexDirection="column"
                gap={definitions.spacing.smaller}
              >
                <InputGroup>
                  <InputLeftElement color="gray.600" children={<MdPerson />} />
                  <Input
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    placeholder="Nome"
                    onChange={setName}
                    value={name}
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
          </>
        )}
        {wasUserCreated === false && (
          <Flex
            flexDirection="column"
            gap={definitions.spacing.default}
            alignItems={definitions.alignItems.center}
          >
            <MdSentimentDissatisfied size={64} />
            <Text fontFamily="Lato" fontSize={definitions.fontSize.default}>
              Por algum motivo não foi possível cadastrar o usuário. Tente
              novamente!
            </Text>
            <Link as={RTDLink} to="/register">
              <Text fontFamily="Lato" fontSize={definitions.fontSize.small}>
                Voltar
              </Text>
            </Link>
          </Flex>
        )}
        {wasUserCreated === true && (
          <Flex
            flexDirection="column"
            gap={definitions.spacing.default}
            alignItems={definitions.alignItems.center}
          >
            <MdSentimentVerySatisfied size={64} />
            <Text fontFamily="Lato" fontSize={definitions.fontSize.default}>
              Usuário criado! Você será redirecionado para página de login!
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

export default RegisterReciclo;
