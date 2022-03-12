import { useColetasCollectionRequestManagementProps } from "./hooks";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { CollectionRequest } from "types";
import { definitions } from "utils";
import { CollectionRequestCard } from "./components";

const ColetasCollectionRequestManagement: FunctionComponent = () => {
  const { filteredCollectionRequests, loading } =
    useColetasCollectionRequestManagementProps();

  return (
    <Flex
      flexDirection="column"
      gap={definitions.spacing.smallest}
      width="100%"
    >
      <Text
        fontFamily={definitions.fontFamily.default}
        fontSize={definitions.fontSize.bigger}
        fontWeight={definitions.fontWeight.bold}
      >
        Solicitações de Coletas
      </Text>
      <Flex
        alignItems={definitions.alignItems.center}
        backgroundColor="gray.200"
        borderColor="gray.500"
        borderRadius="5px"
        borderWidth="2px"
        gap={definitions.spacing.small}
        justifyContent={definitions.justifyContent.center}
        minHeight="calc(100vh - 180px)"
        padding={definitions.spacing.default}
        width="100%"
      >
        <Flex flex={1} flexDirection="column" height="100%" width="100%">
          {loading ? (
            <Flex
              alignItems={definitions.alignItems.center}
              height="10%"
              justifyContent={definitions.justifyContent.center}
              width="100%"
            >
              <Spinner size="lg" colorScheme="green" />
            </Flex>
          ) : filteredCollectionRequests?.length > 0 ? (
            <Flex flexDirection="column" gap={definitions.spacing.small}>
              {filteredCollectionRequests.map(
                (collectionRequest: CollectionRequest) => (
                  <CollectionRequestCard
                    collectionRequest={collectionRequest}
                    setSelectedCollectionRequest={() => {}}
                  />
                )
              )}
            </Flex>
          ) : (
            <Flex
              alignItems={definitions.alignItems.center}
              height="10%"
              justifyContent={definitions.justifyContent.center}
              width="100%"
            >
              <Text fontFamily={definitions.fontFamily.default}>
                Nenhuma solicitação de coleta.
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex backgroundColor="gray.500" height="100%" width="2px" />
        <Flex flex={1} height="100%" width="100%">
          Teste
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ColetasCollectionRequestManagement;
