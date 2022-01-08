import { FunctionComponent, memo } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { EditUserCard } from "components";
import { OrganizationUser } from "types";
import { definitions } from "utils";
import { useUsersProps } from "./hooks";

const ListingUsers: FunctionComponent = () => {
  const { sortedOrganizationUsers } = useUsersProps();

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
      <Flex flex={1} flexDirection="column" overflowY="auto" maxHeight="100%">
        {sortedOrganizationUsers?.length > 0 ? (
          <Flex flexDirection="column" gap={definitions.spacing.small}>
            {sortedOrganizationUsers.map(
              (organizationUser: OrganizationUser) => (
                <EditUserCard
                  key={organizationUser._id}
                  organizationUser={organizationUser}
                />
              )
            )}
          </Flex>
        ) : (
          <Text fontFamily={definitions.fontFamily.default}>
            Nenhum usuário cadastrado nesta organização.
          </Text>
        )}
      </Flex>
      <Flex backgroundColor="gray.500" height="100%" width="2px" />
      <Flex flex={1} height="100%">
        Desenvolvendo
      </Flex>
    </Flex>
  );
};

export default memo(ListingUsers);
