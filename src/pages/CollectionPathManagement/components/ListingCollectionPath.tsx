import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";

const ListingCollectionPath: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    backgroundColor="gray.200"
    borderColor="gray.500"
    borderRadius="5px"
    borderWidth="2px"
    borderTopRadius={0}
    flexDirection="column"
    gap={definitions.spacing.small}
    height="calc(100vh - 220px)"
    justifyContent={definitions.justifyContent.center}
    maxHeight="calc(100vh - 220px)"
    padding={definitions.spacing.small}
    width="100%"
  >
    Teste
  </Flex>
);

export default ListingCollectionPath;
