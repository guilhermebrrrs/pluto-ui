import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MdModeEdit } from "react-icons/md";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { OrganizationUser } from "types";
import { capitalizeName, definitions } from "utils";
import { useEditUserCardProps } from "./hooks";

interface EditUserCardProps {
  organizationUser: OrganizationUser;
  setSelectedOrganizationUser: Dispatch<
    SetStateAction<OrganizationUser | null>
  >;
}

const UserCard: FunctionComponent<EditUserCardProps> = ({
  organizationUser,
  setSelectedOrganizationUser,
}) => {
  const { setOrganizationUser } = useEditUserCardProps({
    organizationUser,
    setSelectedOrganizationUser,
  });

  return (
    <Flex
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      padding={definitions.spacing.small}
      width="100%"
      _hover={{ backgroundColor: "gray.50" }}
    >
      <Flex flex={1} flexDirection="column" gap={definitions.spacing.small}>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          Nome: {capitalizeName(organizationUser.name)}
        </Text>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          Usuário Ativo: {organizationUser.isActive ? "Sim" : "Não"}
        </Text>
      </Flex>
      <Flex gap={definitions.spacing.smallest}>
        <Tooltip label="Editar">
          <IconButton
            aria-label="editar usuário"
            colorScheme="blackAlpha"
            onClick={setOrganizationUser}
            size="sm"
            _hover={{ backgroundColor: "green.500" }}
          >
            <MdModeEdit />
          </IconButton>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default UserCard;
