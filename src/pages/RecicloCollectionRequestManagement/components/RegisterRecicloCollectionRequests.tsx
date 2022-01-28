import {
  CollectionRequestMaterialCard,
  CollectionRequestMaterialModal,
} from "./index";
import { useRegisterRecicloCollectionRequestsProps } from "../hooks";
import { Button, Flex, Select, Text, Textarea } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdAdd } from "react-icons/md";
import { definitions } from "utils";

const RegisterRecicloCollectionRequests: FunctionComponent = () => {
  const {
    addCollectionRequestMaterial,
    availableMaterialTypes,
    cleanSelectedCollectionRequestMaterialState,
    closeCollectionRequestMaterialModal,
    collectionRequestMaterials,
    editCollectionRequestMaterial,
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
        flexDirection="column"
        gap={definitions.spacing.small}
        height="calc(100vh - 220px)"
        maxHeight="calc(100vh - 220px)"
        padding={definitions.spacing.small}
        width="100%"
      >
        <Flex flex={1} gap={definitions.spacing.small} width="100%">
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
              height="100%"
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
                gap={definitions.spacing.small}
                height="calc(100vh - 436px)"
                overflowY="auto"
                padding={definitions.spacing.small}
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
                          key={collectionRequestMaterial.materialType}
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
                    <Text
                      fontFamily="Lato"
                      fontWeight={definitions.fontWeight.bold}
                    >
                      Nenhum Material Inserido.
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex backgroundColor="gray.500" height="stretch" width="2px" />
          <Flex
            flex={1}
            flexDirection="column"
            gap={definitions.spacing.micro}
            height="100%"
          >
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Detalhes
            </Text>
            <Textarea
              backgroundColor="gray.50"
              placeholder="Se julgar necessário escreva aqui detalhes importantes para notificar os coletores que realizarão a coleta."
              resize="none"
              height="calc(100vh - 358px)"
              width="100%"
            />
          </Flex>
        </Flex>
        <Flex backgroundColor="gray.500" height="2px" width="100%" />
        <Flex justifyContent={definitions.justifyContent.flexEnd} width="100%">
          <Button colorScheme="green">
            <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
              Cadastrar Solicitação de Coleta
            </Text>
          </Button>
        </Flex>
      </Flex>
      <CollectionRequestMaterialModal
        addCollectionRequestMaterial={addCollectionRequestMaterial}
        availableMaterialTypes={availableMaterialTypes}
        cleanSelectedCollectionRequestMaterialState={
          cleanSelectedCollectionRequestMaterialState
        }
        collectionRequestMaterial={selectedCollectionRequestMaterial}
        editCollectionRequestMaterial={editCollectionRequestMaterial}
        isOpen={isCollectionRequestMaterialModalOpen}
        close={closeCollectionRequestMaterialModal}
        removeCollectionRequestMaterial={removeCollectionRequestMaterial}
      />
    </>
  );
};

export default RegisterRecicloCollectionRequests;