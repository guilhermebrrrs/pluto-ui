import { useCollectionRequestMaterialCard } from "../hooks";
import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MdModeEdit } from "react-icons/md";
import { CollectionRequestMaterial } from "types";
import { definitions } from "utils";

interface CollectionRequestMaterialCardProps {
  collectionRequestMaterial: CollectionRequestMaterial;
  setSelectedCollectionRequestMaterial: Dispatch<
    SetStateAction<CollectionRequestMaterial | null>
  >;
  openCollectionRequestMaterialModal: () => void;
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
      padding={definitions.spacing.small}
      width="100%"
      _hover={{ backgroundColor: "gray.50" }}
    >
      {collectionRequestMaterial.materialType}
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
