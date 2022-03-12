import { CollectionPathCard } from "./";
import { useListingCollectionPathProps } from "../hooks";
import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";
import { CollectionPath } from "types";

const ListingCollectionPath: FunctionComponent = () => {
  const { filteredCollectionPaths } = useListingCollectionPathProps();

  return (
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
      <Flex
        flexDirection="column"
        gap={definitions.spacing.smaller}
        height="100%"
        width="100%"
      >
        {filteredCollectionPaths.length > 0 &&
          filteredCollectionPaths.map((item: CollectionPath) => (
            <CollectionPathCard collectionPath={item} />
          ))}
      </Flex>
    </Flex>
  );
};

export default ListingCollectionPath;
