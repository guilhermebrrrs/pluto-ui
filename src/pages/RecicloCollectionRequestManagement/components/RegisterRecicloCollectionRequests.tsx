import {
  CollectionRequestMaterialCard,
  CollectionRequestMaterialModal,
} from "./index";
import { useRegisterRecicloCollectionRequestsProps } from "../hooks";
import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdAdd } from "react-icons/md";
import { definitions } from "utils";

const RegisterRecicloCollectionRequests: FunctionComponent = () => {
  const {
    addCollectionRequestMaterial,
    closeCollectionRequestMaterialModal,
    collectionRequestMaterials,
    isCollectionRequestMaterialModalOpen,
    removeCollectionRequestMaterial,
    openCollectionRequestMaterialModal,
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
    userLocationsOptions,
  } = useRegisterRecicloCollectionRequestsProps();

  return (
    <>
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
          gap={definitions.spacing.smallest}
          maxHeight="100%"
          overflowY="auto"
        >
          <Flex
            flexDirection="column"
            gap={definitions.spacing.micro}
            width="100%"
          >
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Local
            </Text>
            <Select
              backgroundColor="gray.50"
              borderColor="gray.300"
              focusBorderColor="gray.700"
              padding="1px"
              placeholder="Selecione um local"
              width="100%"
            >
              {userLocationsOptions}
            </Select>
          </Flex>
          <Flex
            flexDirection="column"
            gap={definitions.spacing.micro}
            width="100%"
          >
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Seleção de Materiais
            </Text>
            <Flex
              backgroundColor="gray.50"
              borderColor="gray.300"
              borderRadius="8px"
              borderWidth="1px"
              flexDirection="column"
              gap={definitions.spacing.smaller}
              padding={`${definitions.spacing.smallest} ${definitions.spacing.small}`}
              width="100%"
            >
              <Button
                colorScheme="green"
                gap={definitions.spacing.micro}
                onClick={openCollectionRequestMaterialModal}
                width="fit-content"
              >
                <MdAdd size="24px" />
                <Text>Adicionar Material</Text>
              </Button>
              {collectionRequestMaterials!.length > 0 ? (
                <>
                  {collectionRequestMaterials!.map(
                    (collectionRequestMaterial) => (
                      <CollectionRequestMaterialCard
                        collectionRequestMaterial={collectionRequestMaterial}
                        openCollectionRequestMaterialModal={
                          openCollectionRequestMaterialModal
                        }
                        setSelectedCollectionRequestMaterial={
                          setSelectedCollectionRequestMaterial
                        }
                      />
                    )
                  )}
                </>
              ) : (
                <Flex
                  justifyContent={definitions.justifyContent.center}
                  width="100%"
                >
                  <Text>Nenhum Material Inserido.</Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex backgroundColor="gray.500" height="100%" width="2px" />
        <Flex flex={1} height="100%">
          <Text>Teste</Text>
        </Flex>
      </Flex>
      <CollectionRequestMaterialModal
        collectionRequestMaterial={selectedCollectionRequestMaterial}
        isOpen={isCollectionRequestMaterialModalOpen}
        onClose={closeCollectionRequestMaterialModal}
      />
    </>
  );
};

export default RegisterRecicloCollectionRequests;
