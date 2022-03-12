import { useCollectionRequestCardProps } from "../hooks";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { CardContainer } from "components";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MdModeEdit } from "react-icons/md";
import { CollectionRequest } from "types";
import { definitions, getCollectionStatusLabel } from "utils";

interface CollectionRequestCardProps {
  collectionRequest: CollectionRequest;
  setSelectedCollectionRequest: Dispatch<
    SetStateAction<CollectionRequest | null>
  >;
}

const CollectionRequestCard: FunctionComponent<CollectionRequestCardProps> = ({
  collectionRequest,
  setSelectedCollectionRequest,
}) => {
  const { setCollectionRequest } = useCollectionRequestCardProps({
    collectionRequest,
    setSelectedCollectionRequest,
  });

  return (
    <CardContainer>
      <Flex
        flexDirection="column"
        gap={definitions.spacing.smallest}
        width="100%"
      >
        <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
          {`Local: ${collectionRequest.location?.placename}`}
        </Text>
        <Text
          fontFamily="Lato"
          fontWeight={definitions.fontWeight.bold}
          noOfLines={2}
        >
          {`Endereço: ${collectionRequest.location?.address?.street}, ${collectionRequest.location?.address?.number} - ${collectionRequest.location?.address?.district} - ${collectionRequest.location?.address?.city} - ${collectionRequest.location?.address?.state}`}
        </Text>
        <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
          {`Status: ${getCollectionStatusLabel(
            collectionRequest.collectionStatus!
          )}`}
        </Text>
      </Flex>
      <Flex gap={definitions.spacing.smallest}>
        <Tooltip label="Exibir detalhes">
          <IconButton
            aria-label="exibir detalhes"
            colorScheme="blackAlpha"
            onClick={setCollectionRequest}
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

export default CollectionRequestCard;