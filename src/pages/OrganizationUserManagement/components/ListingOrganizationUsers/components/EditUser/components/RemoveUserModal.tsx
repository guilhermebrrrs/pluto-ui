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

interface RemoveUserModalProps {
  cancel: () => void;
  isOpen: boolean;
  onClose: () => void;
  removeUser: () => void;
}

const RemoveUserModal: FunctionComponent<RemoveUserModalProps> = ({
  cancel,
  isOpen,
  onClose,
  removeUser,
}) => (
  <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Remover Usuário</ModalHeader>
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
            Ao confirmar esta ação o usuário será removido permanentemente.
          </Text>
          <Text
            fontFamily={definitions.fontFamily.default}
            fontSize={definitions.fontSize.small}
            fontWeight={definitions.fontWeight.bold}
            textAlign="center"
          >
            Deseja remover este usuário?
          </Text>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex gap={definitions.spacing.smallest}>
          <Button
            colorScheme="blackAlpha"
            onClick={cancel}
            _hover={{ backgroundColor: "red.500" }}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="blackAlpha"
            onClick={removeUser}
            _hover={{ backgroundColor: "gray.500" }}
          >
            Remover Usuário
          </Button>
        </Flex>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default RemoveUserModal;
