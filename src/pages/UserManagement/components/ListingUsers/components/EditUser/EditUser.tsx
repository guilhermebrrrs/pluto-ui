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

interface EditUserProps {
  cancelEdit: () => void;
  selectedOrganizationUser: OrganizationUser;
}

const EditUser: FunctionComponent<EditUserProps> = ({
  cancelEdit,
  selectedOrganizationUser,
}) => (
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
          placeholder="Nome"
          onChange={() => {}}
          value={selectedOrganizationUser.email}
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
          onChange={() => {}}
          value={selectedOrganizationUser.name}
          width="100%"
        />
      </InputGroup>
      <Checkbox borderColor="gray.500" marginLeft={definitions.spacing.small}>
        Usuário Ativo
      </Checkbox>
      <PasswordInput
        backgroundColor="gray.50"
        borderColor="gray.300"
        focusBorderColor="gray.700"
        value={selectedOrganizationUser.password}
      />
    </Flex>
    <Flex
      justifyContent={definitions.justifyContent.flexEnd}
      gap={definitions.spacing.small}
      width="100%"
    >
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
);

export default EditUser;
