import { Button, Flex, Text } from "@chakra-ui/react";
import { MaterialTypeContainer } from "components";
import { FunctionComponent } from "react";
import { CollectionRequest, CollectionRequestMaterial } from "types";
import {
  definitions,
  getCollectionStatusLabel,
  getMaterialTypeLabel,
  sortByString,
} from "utils";

interface CollectionRequestDetailsProps {
  cancel: () => void;
  collectionRequest: CollectionRequest;
}

const CollectionRequestDetails: FunctionComponent<
  CollectionRequestDetailsProps
> = ({ cancel, collectionRequest }) => {
  return (
    <Flex
      flexDirection="column"
      gap={definitions.spacing.smaller}
      height="100%"
      width="100%"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        flexDirection="column"
        width="100%"
      >
        <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
          Detalhes da Solicitação de Coleta
        </Text>
        <Flex backgroundColor="gray.500" height="1px" width="100%" />
      </Flex>
      <Flex
        flex={1}
        flexDirection="column"
        gap={definitions.spacing.smallest}
        width="100%"
      >
        <Flex
          justifyContent={definitions.alignItems.end}
          width="100%"
          padding={`0 ${definitions.spacing.smallest}`}
        >
          <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
            {`Status: ${getCollectionStatusLabel(
              collectionRequest.collectionStatus!
            )}`}
          </Text>
        </Flex>
        <Text
          fontFamily="Lato"
          fontWeight={definitions.fontWeight.bold}
        >{`Local: ${collectionRequest.location?.placename}`}</Text>
        <Text
          fontFamily="Lato"
          fontWeight={definitions.fontWeight.bold}
        >{`Endereço: ${collectionRequest.location?.address?.street}, ${collectionRequest.location?.address?.number} - ${collectionRequest.location?.address?.district} - ${collectionRequest.location?.address?.city} - ${collectionRequest.location?.address?.state}`}</Text>
        <Flex gap={definitions.spacing.smallest} width="100%">
          <Flex alignItems={definitions.alignItems.center} height="36px">
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Tipos de Materiais:
            </Text>
          </Flex>
          {collectionRequest?.collectionRequestMaterials &&
          collectionRequest?.collectionRequestMaterials?.length > 0 ? (
            <Flex
              backgroundColor="gray.50"
              borderColor="gray.500"
              borderRadius="8px"
              borderWidth="2px"
              flex={1}
              flexWrap="wrap"
              gap={definitions.spacing.smallest}
              padding={definitions.spacing.smaller}
            >
              {collectionRequest?.collectionRequestMaterials &&
                [...collectionRequest?.collectionRequestMaterials]
                  .sort(
                    (
                      { materialType: type_a }: CollectionRequestMaterial,
                      { materialType: type_b }: CollectionRequestMaterial
                    ) =>
                      sortByString(
                        getMaterialTypeLabel(type_a!),
                        getMaterialTypeLabel(type_b!)
                      )
                  )
                  .map(
                    (item) =>
                      item.materialType && (
                        <MaterialTypeContainer
                          materialType={item.materialType}
                        />
                      )
                  )}
            </Flex>
          ) : (
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Sem materiais cadastrados para esta solicitação de coleta
            </Text>
          )}
        </Flex>
        <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
          {collectionRequest.acceptedBy
            ? `Aceita por: ${collectionRequest.acceptedBy?.name}`
            : "Esta solicitação ainda não foi aceita por nenhuma organização."}
        </Text>
      </Flex>
      <Flex backgroundColor="gray.500" height="2px" width="100%" />
      <Flex
        justifyContent={definitions.justifyContent.spaceBetween}
        width="100%"
      >
        <Button colorScheme="blackAlpha" onClick={cancel}>
          <Text>Fechar painel de detalhes</Text>
        </Button>
        <Button colorScheme="red">
          <Text>Cancelar Solicitação de Coleta</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default CollectionRequestDetails;
