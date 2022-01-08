import { FunctionComponent } from "react";
import { MdPerson } from "react-icons/md";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { definitions } from "utils";
import { useRegisterOrganizationUserProps } from "./hooks";

const RegisterOrganizationUser: FunctionComponent = () => {
  const {
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
        <InputGroup>
          <InputLeftElement color="gray.600" children={<LockIcon />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="Senha"
            onChange={setPassword}
            type={showPassword ? "text" : "password"}
            value={password}
            width="100%"
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
