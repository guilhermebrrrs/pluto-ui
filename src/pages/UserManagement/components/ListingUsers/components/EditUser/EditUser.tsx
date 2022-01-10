import { FunctionComponent } from "react";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { PasswordInput } from "components";
import { OrganizationUser } from "types";
import { definitions } from "utils";
import { useEditUserProps } from "./hooks";

interface EditUserProps {
  cancelEdit: () => void;
  selectedOrganizationUser: OrganizationUser;
}

const EditUser: FunctionComponent<EditUserProps> = ({
  cancelEdit,
  selectedOrganizationUser,
}) => {
  const {
    email,
    isActive,
    name,
    password,
    setEmail,
    setIsActive,
    setName,
    setPassword,
  } = useEditUserProps({ selectedOrganizationUser });

  return (
    <Flex flexDirection="column" gap={definitions.spacing.small} width="100%">
      <Flex
        flex={1}
        flexDirection="column"
        gap={definitions.spacing.small}
        width="100%"
      >
        <Text
          alignSelf={definitions.justifyContent.center}
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          Editar Informações de {selectedOrganizationUser.name}
        </Text>
        <Flex backgroundColor="gray.500" height="2px" width="100%" />
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
          <InputLeftElement color="gray.600" children={<EmailIcon />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="Nome"
            onChange={setName}
            value={name}
            width="100%"
          />
        </InputGroup>
        <Checkbox
          borderColor="gray.500"
          isChecked={isActive}
          marginLeft={definitions.spacing.small}
          onChange={setIsActive}
        >
          Usuário Ativo
        </Checkbox>
        <PasswordInput
          backgroundColor="gray.50"
          borderColor="gray.300"
          focusBorderColor="gray.700"
          onChange={setPassword}
          value={password}
        />
      </Flex>
      <Flex
        justifyContent={definitions.justifyContent.spaceBetween}
        width="100%"
      >
        <Button
          colorScheme="blackAlpha"
          onClick={() => {}}
          _hover={{ backgroundColor: "red.500" }}
        >
          Remover Usuário
        </Button>
        <Flex gap={definitions.spacing.small}>
          <Button
            colorScheme="blackAlpha"
            onClick={cancelEdit}
            _hover={{ backgroundColor: "red.500" }}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="blackAlpha"
            _hover={{ backgroundColor: "green.500" }}
          >
            Salvar Mudanças
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditUser;
