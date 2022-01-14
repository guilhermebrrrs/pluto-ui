import { FunctionComponent } from "react";
import { Link as RTDLink } from "react-router-dom";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { MdFactCheck } from "react-icons/md";
import { PasswordInput, Waves } from "components";
import { definitions } from "utils";
import { useLoginRecicloProps } from "./hooks";

const LoginReciclo: FunctionComponent = () => {
  const {
    email,
    handleLogin,
    loading,
    password,
    setEmail,
    setPassword,
    toRegisterReciclo,
  } = useLoginRecicloProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="green.500"
      height="100vh"
      justifyContent={definitions.justifyContent.center}
      width="100vw"
    >
      <Flex
        backgroundColor="gray.50"
        borderColor="gray.600"
        borderRadius="8px"
        borderWidth="2px"
        padding={definitions.spacing.default}
      >
        <Flex
          alignItems={definitions.alignItems.center}
          flexDirection="column"
          gap={definitions.spacing.smaller}
        >
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            width="100%"
          >
            <Text
              fontFamily={definitions.fontFamily.default}
              fontSize={definitions.fontSize.biggest}
              fontWeight={definitions.fontWeight.bold}
            >
              Pluto
            </Text>
            <Text
              fontFamily={definitions.fontFamily.default}
              fontSize={definitions.fontSize.big}
              fontWeight={definitions.fontWeight.bold}
            >
              Reciclo
            </Text>
          </Flex>
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
          <PasswordInput
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            onChange={setPassword}
            placeholder="Senha"
            value={password}
            width="400px"
          />
          <Flex justifyContent={definitions.justifyContent.end} width="100%">
            <Link>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.small}
              >
                Esqueci minha senha
              </Text>
            </Link>
          </Flex>
          <Button
            colorScheme="green"
            onClick={handleLogin}
            variant="solid"
            width="100%"
          >
            <Text width="75px">{loading ? "..." : "Login"}</Text>
          </Button>
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            gap={definitions.spacing.smallest}
            width="100%"
          >
            <Text
              fontFamily={definitions.fontFamily.default}
              fontSize={definitions.fontSize.small}
            >
              Ainda não tem cadastro no sistema?
            </Text>
            <Button
              borderWidth="2px"
              colorScheme="green"
              leftIcon={<MdFactCheck size="24px" />}
              onClick={toRegisterReciclo}
              variant="outline"
            >
              <Text>Clique aqui para se cadastrar</Text>
            </Button>
          </Flex>
          <Link as={RTDLink} to="/login">
            <Text
              fontFamily={definitions.fontFamily.default}
              fontSize={definitions.fontSize.small}
            >
              Voltar
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Waves />
    </Flex>
  );
};

export default LoginReciclo;
