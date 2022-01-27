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
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { CollectionRequestMaterial } from "types";
import { definitions } from "utils";

interface CollectionRequestMaterialModalProps {
  collectionRequestMaterial?: CollectionRequestMaterial | null;
  isOpen: boolean;
  onClose: () => void;
}

const CollectionRequestMaterialModal: FunctionComponent<
  CollectionRequestMaterialModalProps
> = ({ collectionRequestMaterial, isOpen, onClose }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
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
            <InputGroup flexDirection="column">
              <Text>Quantidade em Kgs (quilogramas)</Text>
              <Input
                backgroundColor="gray.50"
                borderColor="gray.300"
                focusBorderColor="gray.700"
                margin="1px"
                placeholder="Kgs (quilogramas)"
                onChange={() => {}}
                type="number"
                value={undefined}
                width="100%"
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <Text>Descrição</Text>
              <Textarea
                height="50px"
                resize="none"
                placeholder="Descreva alguma característica ou detalhe importante para a empresa que poderá realizar a coleta."
                width="100%"
              />
            </InputGroup>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap={definitions.spacing.smallest}>
            <Button
              colorScheme="blackAlpha"
              onClick={() => {}}
              _hover={{ backgroundColor: "red.500" }}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {}}
              _hover={{ backgroundColor: "gray.500" }}
            >
              Remover Local
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CollectionRequestMaterialModal;
