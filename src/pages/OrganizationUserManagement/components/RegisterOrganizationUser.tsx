import { FunctionComponent } from "react";
import { MdPerson } from "react-icons/md";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { PasswordInput } from "components";
import { definitions } from "utils";
import { useRegisterOrganizationUserProps } from "../hooks";

const RegisterOrganizationUser: FunctionComponent = () => {
  const {
    email,
    handleRegistration,
    password,
    setEmail,
    setPassword,
    setUserName,
    username,
  } = useRegisterOrganizationUserProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="gray.200"
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      borderTopRadius={0}
      gap={definitions.spacing.small}
      height="calc(100vh - 220px)"
      justifyContent={definitions.justifyContent.center}
      maxHeight="calc(100vh - 220px)"
      padding={definitions.spacing.small}
      width="100%"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        flexDirection="column"
        gap={definitions.spacing.smaller}
        width={`calc(50% - ${definitions.spacing.small})`}
      >
        <InputGroup>
          <InputLeftElement color="gray.600" children={<MdPerson />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="Nome de Usuário"
            onChange={setUserName}
            value={username}
            width="100%"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.600" children={<EmailIcon />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="E-mail"
            onChange={setEmail}
            value={email}
            width="100%"
          />
        </InputGroup>
        <PasswordInput
          backgroundColor="gray.50"
          borderColor="gray.300"
          focusBorderColor="gray.700"
          placeholder="Senha"
          onChange={setPassword}
          value={password}
          width="100%"
        />
        <Button colorScheme="green" onClick={handleRegistration} width="100%">
          <Text
            fontFamily="Lato"
            fontSize={definitions.fontSize.small}
            fontWeight={definitions.fontWeight.bold}
          >
            Cadastrar
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterOrganizationUser;
