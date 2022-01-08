import { FunctionComponent } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { OrganizationUser } from "types";
import { definitions } from "utils";

interface EditUserCardProps {
  organizationUser: OrganizationUser;
}

const EditUserCard: FunctionComponent<EditUserCardProps> = ({
  organizationUser,
}) => (
  <Flex
    _hover={{ backgroundColor: "gray.50" }}
    borderColor="gray.500"
    borderRadius="5px"
    borderWidth="2px"
    padding={definitions.spacing.small}
    width="100%"
  >
    <Flex flex={1} flexDirection="column" gap={definitions.spacing.small}>
      <Text
        fontFamily={definitions.fontFamily.default}
        fontWeight={definitions.fontWeight.bold}
      >
        Nome: {organizationUser.name}
      </Text>
      <Text
        fontFamily={definitions.fontFamily.default}
        fontWeight={definitions.fontWeight.bold}
      >
        Usuário Ativo: {organizationUser.isActive ? "Sim" : "Não"}
      </Text>
    </Flex>
    <Flex gap={definitions.spacing.smallest}>
      <Tooltip label="Remover">
        <IconButton
          aria-label="remover usuário"
          colorScheme="blackAlpha"
          _hover={{ backgroundColor: "red.500" }}
          onClick={() => {}}
          size="sm"
        >
          <FaTrashAlt />
        </IconButton>
      </Tooltip>
      <Tooltip label="Editar">
        <IconButton
          aria-label="editar usuário"
          colorScheme="blackAlpha"
          _hover={{ backgroundColor: "green.500" }}
          onClick={() => {}}
          size="sm"
        >
          <MdModeEdit />
        </IconButton>
      </Tooltip>
    </Flex>
  </Flex>
);

export default EditUserCard;
