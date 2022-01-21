import { FunctionComponent } from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { definitions } from "utils";
import { UserLocation } from "types";
import { EditUserLocation, UserLocationCard } from "./";
import { useListingUserLocationsProps } from "../hooks";

const ListingUserLocations: FunctionComponent = () => {
  const {
    cancelEdit,
    loading,
    selectedUserLocation,
    setSelectedUserLocation,
    sortedUserLocations,
  } = useListingUserLocationsProps();

  return (
    <Flex
      backgroundColor="gray.200"
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      borderTopRadius={0}
      gap={definitions.spacing.small}
      height="calc(100vh - 220px)"
      maxHeight="calc(100vh - 220px)"
      padding={definitions.spacing.small}
      width="100%"
    >
      <Flex flex={1} flexDirection="column" maxHeight="100%" overflowY="auto">
        {loading ? (
          <Flex
            alignItems={definitions.alignItems.center}
            height="30%"
            justifyContent={definitions.justifyContent.center}
            width="100%"
          >
            <Spinner size="lg" colorScheme="green" />
          </Flex>
        ) : sortedUserLocations?.length > 0 ? (
          <Flex flexDirection="column" gap={definitions.spacing.small}>
            {sortedUserLocations.map((userLocation: UserLocation) => (
              <UserLocationCard
                key={userLocation._id}
                selectedUserLocation={userLocation}
                setSelectedUserLocation={setSelectedUserLocation}
              />
            ))}
          </Flex>
        ) : (
          <Text fontFamily={definitions.fontFamily.default}>
            Nenhum local cadastrado.
          </Text>
        )}
      </Flex>
      <Flex backgroundColor="gray.500" height="100%" width="2px" />
      <Flex flex={1} height="100%">
        {selectedUserLocation && (
          <EditUserLocation
            cancelEdit={cancelEdit}
            selectedUserLocation={selectedUserLocation}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ListingUserLocations;
