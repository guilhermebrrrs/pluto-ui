import { useUserLocationCardProps } from "../hooks";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { CardContainer } from "components";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MdModeEdit } from "react-icons/md";
import { UserLocation } from "types";
import { definitions } from "utils";

interface UserLocationCardProps {
  setSelectedUserLocation: Dispatch<SetStateAction<UserLocation | null>>;
  selectedUserLocation: UserLocation;
}

const UserLocationCard: FunctionComponent<UserLocationCardProps> = ({
  setSelectedUserLocation,
  selectedUserLocation,
}) => {
  const { setUserLocation } = useUserLocationCardProps({
    selectedUserLocation,
    setSelectedUserLocation,
  });

  return (
    <CardContainer>
      <Flex flex={1} flexDirection="column" gap={definitions.spacing.small}>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          Nome do Local: {selectedUserLocation.placename}
        </Text>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          {`Endereço: ${selectedUserLocation.address?.street}, ${selectedUserLocation.address?.number} - ${selectedUserLocation.address?.district}`}
        </Text>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontWeight={definitions.fontWeight.bold}
        >
          {`${selectedUserLocation.address?.city} - ${selectedUserLocation.address?.state}`}
        </Text>
      </Flex>
      <Flex gap={definitions.spacing.smallest}>
        <Tooltip label="Editar">
          <IconButton
            aria-label="editar local"
            colorScheme="blackAlpha"
            onClick={setUserLocation}
            size="sm"
            _hover={{ backgroundColor: "green.500" }}
          >
            <MdModeEdit />
          </IconButton>
        </Tooltip>
      </Flex>
    </CardContainer>
  );
};

export default UserLocationCard;
