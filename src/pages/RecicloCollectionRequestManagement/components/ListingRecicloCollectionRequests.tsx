import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";

const ListingRecicloCollectionRequests: FunctionComponent = () => {
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
        <Text>Teste</Text>
      </Flex>
      <Flex backgroundColor="gray.500" height="100%" width="2px" />
      <Flex flex={1} height="100%">
        <Text>Teste</Text>
      </Flex>
    </Flex>
  );
};

export default ListingRecicloCollectionRequests;
