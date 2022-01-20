import { FunctionComponent } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { MdWarningAmber } from "react-icons/md";
import { definitions } from "utils";

interface RemoveUserLocationModalProps {
  cancel: () => void;
  isOpen: boolean;
  onClose: () => void;
  removeUserLocation: () => void;
}

const RemoveUserLocationModal: FunctionComponent<
  RemoveUserLocationModalProps
> = ({ cancel, isOpen, onClose, removeUserLocation }) => (
  <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Remover Local</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex
          alignItems={definitions.alignItems.center}
          flexDirection="column"
          gap={definitions.spacing.smallest}
          width="100%"
        >
          <MdWarningAmber size="48px" />
          <Text
            fontFamily={definitions.fontFamily.default}
            fontSize={definitions.fontSize.small}
            fontWeight={definitions.fontWeight.bold}
            textAlign="center"
          >
            Ao confirmar esta ação o local será removido permanentemente.
          </Text>
          <Text
            fontFamily={definitions.fontFamily.default}
            fontSize={definitions.fontSize.small}
            fontWeight={definitions.fontWeight.bold}
            textAlign="center"
          >
            Deseja remover este local?
          </Text>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex gap={definitions.spacing.smallest}>
          <Button
            colorScheme="blackAlpha"
            onClick={onClose}
            _hover={{ backgroundColor: "red.500" }}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="blackAlpha"
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

export default RemoveUserLocationModal;
