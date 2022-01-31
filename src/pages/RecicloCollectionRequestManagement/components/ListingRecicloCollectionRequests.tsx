import { CollectionRequestCard } from "./index";
import { useListingRecicloCollectionRequestsProps } from "../hooks";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { definitions } from "utils";
import { CollectionRequest } from "types";

const ListingRecicloCollectionRequests: FunctionComponent = () => {
  const {
    filteredCollectionRequests,
    globalFilter,
    loading,
    setGLobalFilter,
    setStatusArrayValuesToCompletedOrCanceledThenFetchQuery,
    setStatusArrayValuesToInProgressThenFetchQuery,
    setStatusArrayValuesToOpenedThenFetchQuery,
  } = useListingRecicloCollectionRequestsProps();

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
      <Flex
        flex={1}
        flexDirection="column"
        gap={definitions.spacing.small}
        maxHeight="100%"
      >
        <Flex gap={definitions.spacing.small} padding="4px" width="100%">
          <Tabs isFitted width="100%">
            <TabList gap={definitions.spacing.smallest}>
              <Tab
                backgroundColor="#CBD5E0"
                borderRadius="5px"
                onClick={setStatusArrayValuesToOpenedThenFetchQuery}
                _selected={{ color: "white", bg: "green.500" }}
              >
                <Text
                  fontFamily="Lato"
                  fontWeight={definitions.fontWeight.bold}
                >
                  Abertas
                </Text>
              </Tab>
              <Tab
                backgroundColor="#CBD5E0"
                borderRadius="5px"
                onClick={setStatusArrayValuesToInProgressThenFetchQuery}
                _selected={{ color: "white", bg: "green.500" }}
              >
                <Text
                  fontFamily="Lato"
                  fontWeight={definitions.fontWeight.bold}
                >
                  Em andamento
                </Text>
              </Tab>
              <Tab
                backgroundColor="#CBD5E0"
                borderRadius="5px"
                onClick={
                  setStatusArrayValuesToCompletedOrCanceledThenFetchQuery
                }
                _selected={{ color: "white", bg: "green.500" }}
              >
                <Text
                  fontFamily="Lato"
                  fontWeight={definitions.fontWeight.bold}
                >
                  Finalizadas ou Canceladas
                </Text>
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MdOutlineSearch size="24px" color="gray.300" />}
          />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="Procurar..."
            onChange={setGLobalFilter}
            value={globalFilter}
            width="100%"
          />
        </InputGroup>
        <Flex
          flexDirection="column"
          height="calc(100vh - 378px)"
          overflowY="auto"
          width="100%"
        >
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
      </Flex>
      <Flex backgroundColor="gray.500" height="100%" width="2px" />
      <Flex flex={1} height="100%">
        <Text>Teste</Text>
      </Flex>
    </Flex>
  );
};

export default ListingRecicloCollectionRequests;
