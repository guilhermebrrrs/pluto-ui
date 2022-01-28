import { useCollectionRequestMaterialCard } from "../hooks";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MdModeEdit } from "react-icons/md";
import { CollectionRequestMaterial } from "types";
import {
  definitions,
  getMaterialTypeBorderColor,
  getMaterialTypeColor,
  getMaterialTypeLabel,
  getMaterialTypeTextColor,
} from "utils";

interface CollectionRequestMaterialCardProps {
  collectionRequestMaterial: CollectionRequestMaterial;
  openCollectionRequestMaterialModal: () => void;
  setSelectedCollectionRequestMaterial: Dispatch<
    SetStateAction<CollectionRequestMaterial | null>
  >;
}

const CollectionRequestMaterialCard: FunctionComponent<
  CollectionRequestMaterialCardProps
> = ({
  collectionRequestMaterial,
  openCollectionRequestMaterialModal,
  setSelectedCollectionRequestMaterial,
}) => {
  const { setCollectionRequestMaterialThenOpenCollectionRequestMaterialModal } =
    useCollectionRequestMaterialCard({
      collectionRequestMaterial,
      openCollectionRequestMaterialModal,
      setSelectedCollectionRequestMaterial,
    });

  return (
    <Flex
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      justifyContent={definitions.justifyContent.center}
      padding={definitions.spacing.smaller}
      width="100%"
      _hover={{ backgroundColor: "gray.50" }}
    >
      <Flex flex={1} flexDirection="column" gap={definitions.spacing.smaller}>
        <Flex
          alignItems={definitions.alignItems.center}
          gap={definitions.spacing.micro}
        >
          <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
            Tipo:
          </Text>
          <Flex
            alignItems={definitions.alignItems.center}
            backgroundColor={getMaterialTypeColor(
              collectionRequestMaterial.materialType!
            )}
            borderColor={getMaterialTypeBorderColor(
              collectionRequestMaterial.materialType!
            )}
            borderRadius="200px"
            borderWidth="2px"
            justifyContent={definitions.justifyContent.center}
            padding={`${definitions.spacing.micro} ${definitions.spacing.smaller}`}
          >
            <Text
              color={getMaterialTypeTextColor(
                collectionRequestMaterial.materialType!
              )}
              fontFamily="Lato"
              fontWeight={definitions.fontWeight.bold}
            >
              {getMaterialTypeLabel(collectionRequestMaterial.materialType!)}
            </Text>
          </Flex>
        </Flex>
        <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
          {collectionRequestMaterial.amount ? (
            <>
              Peso:{" "}
              {`${collectionRequestMaterial.amount} ${
                collectionRequestMaterial.amount === 1 ? "Kg" : "Kgs"
              }`}
            </>
          ) : (
            "Sem peso inserido"
          )}
        </Text>
      </Flex>
      <Tooltip label="Editar">
        <IconButton
          aria-label="editar material"
          colorScheme="blackAlpha"
          onClick={
            setCollectionRequestMaterialThenOpenCollectionRequestMaterialModal
          }
          size="sm"
          _hover={{ backgroundColor: "green.500" }}
        >
          <MdModeEdit />
        </IconButton>
      </Tooltip>
    </Flex>
  );
};

export default CollectionRequestMaterialCard;
