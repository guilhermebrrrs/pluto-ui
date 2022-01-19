import { FunctionComponent } from "react";
import { MdModeEdit } from "react-icons/md";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { UserLocation } from "types";
import { definitions } from "utils";

interface UserLocationCardProps {
  userLocation: UserLocation;
}

const UserLocationCard: FunctionComponent<UserLocationCardProps> = ({
  userLocation,
}) => {
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
          Nome do Local: {userLocation.placename}
        </Text>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          {`Endereço: ${userLocation.address?.street}, ${userLocation.address?.number} - ${userLocation.address?.district}`}
        </Text>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          {`${userLocation.address?.city} - ${userLocation.address?.state}`}
        </Text>
      </Flex>
      <Flex gap={definitions.spacing.smallest}>
        <Tooltip label="Editar">
          <IconButton
            aria-label="editar local"
            colorScheme="blackAlpha"
            onClick={() => {}}
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

export default UserLocationCard;
