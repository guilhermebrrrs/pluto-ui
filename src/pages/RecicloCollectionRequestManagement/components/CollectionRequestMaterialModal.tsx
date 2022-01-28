import { useCollectionRequestMaterialModalProps } from "../hooks";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { CollectionRequestMaterial, MaterialType } from "types";
import { definitions } from "utils";

interface CollectionRequestMaterialModalProps {
  addCollectionRequestMaterial: (
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
  availableMaterialTypes: MaterialType[];
  cleanSelectedCollectionRequestMaterialState: () => void;
  close: () => void;
  collectionRequestMaterial?: CollectionRequestMaterial | null;
  editCollectionRequestMaterial: (
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
  isOpen: boolean;
  removeCollectionRequestMaterial: (
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
}

const CollectionRequestMaterialModal: FunctionComponent<
  CollectionRequestMaterialModalProps
> = ({
  addCollectionRequestMaterial,
  availableMaterialTypes,
  cleanSelectedCollectionRequestMaterialState,
  close,
  collectionRequestMaterial,
  editCollectionRequestMaterial,
  isOpen,
  removeCollectionRequestMaterial,
}) => {
  const {
    amount,
    description,
    handleCleanStateAndCloseModal,
    handleRemoveAndCloseModal,
    handleSaveOrEditCollectionRequestMaterial,
    materialType,
    materialTypeOptions,
    setAmount,
    setDescription,
    setMaterialType,
  } = useCollectionRequestMaterialModalProps({
    addCollectionRequestMaterial,
    availableMaterialTypes,
    cleanSelectedCollectionRequestMaterialState,
    close,
    collectionRequestMaterial,
    editCollectionRequestMaterial,
    removeCollectionRequestMaterial,
  });

  return (
    <Modal isCentered isOpen={isOpen} onClose={close} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${
          !collectionRequestMaterial ? "Inserir" : "Editar"
        } Material`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            gap={definitions.spacing.smaller}
            width="100%"
          >
            <Flex
              flexDirection="column"
              gap={definitions.spacing.micro}
              width="100%"
            >
              <Text fontFamily="Lato" fontWeight={definitions.fontWeight.bold}>
                Tipo de Material
              </Text>
              <Select
                backgroundColor="gray.50"
                borderColor="gray.300"
                focusBorderColor="gray.700"
                onChange={setMaterialType}
                padding="1px"
                placeholder="Selecione um Material..."
                value={materialType}
                width="100%"
              >
                {materialTypeOptions}
              </Select>
            </Flex>
            <Flex
              flexDirection="column"
              gap={definitions.spacing.micro}
              width="100%"
            >
              <InputGroup flexDirection="column">
                <Text
                  fontFamily="Lato"
                  fontWeight={definitions.fontWeight.bold}
                >
                  Quantidade em Kgs (quilogramas)
                </Text>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Kgs (quilogramas)"
                  onChange={setAmount}
                  type="number"
                  value={amount}
                  width="100%"
                />
              </InputGroup>
            </Flex>
            <Flex
              flexDirection="column"
              gap={definitions.spacing.micro}
              width="100%"
            >
              <InputGroup flexDirection="column">
                <Text
                  fontFamily="Lato"
                  fontWeight={definitions.fontWeight.bold}
                >
                  Descrição
                </Text>
                <Textarea
                  height="150px"
                  onChange={setDescription}
                  placeholder="Descreva alguma característica ou detalhe importante sobre este material para notificar os coletores que realizarão esta coleta."
                  resize="none"
                  value={description}
                  width="100%"
                />
              </InputGroup>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex
            justifyContent={
              definitions.justifyContent[
                collectionRequestMaterial ? "spaceBetween" : "end"
              ]
            }
            width="100%"
          >
            {collectionRequestMaterial && (
              <Button
                colorScheme="blackAlpha"
                onClick={handleRemoveAndCloseModal}
                _hover={{ backgroundColor: "red.500" }}
              >
                Remover Material
              </Button>
            )}
            <Flex gap={definitions.spacing.smallest}>
              <Button
                colorScheme="blackAlpha"
                onClick={handleCleanStateAndCloseModal}
                _hover={{ backgroundColor: "red.500" }}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="blackAlpha"
                onClick={handleSaveOrEditCollectionRequestMaterial}
                _hover={{ backgroundColor: "green.500" }}
              >
                {`${
                  !collectionRequestMaterial ? "Inserir" : "Salvar"
                } Material`}
              </Button>
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CollectionRequestMaterialModal;
