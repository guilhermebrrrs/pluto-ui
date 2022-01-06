import { FunctionComponent } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { User } from "types";
import { definitions } from "utils";

interface AppRecicloDrawerProps {
  closeDrawer: () => void;
  isOpen: boolean;
  loggedUser: User | null;
}

const AppRecicloDrawer: FunctionComponent<AppRecicloDrawerProps> = ({
  closeDrawer,
  isOpen,
  loggedUser,
}) => (
  <Drawer placement="left" isOpen={isOpen} onClose={closeDrawer}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <Flex
        alignItems={definitions.alignItems.center}
        backgroundColor="gray.200"
        borderBottomWidth="2px"
        borderBottomColor="gray.600"
        flexDirection="column"
        height="max-content"
        justifyContent={definitions.justifyContent.center}
        padding={definitions.spacing.small}
        width="100%"
      >
        <Text
          fontFamily="Lato"
          fontSize={definitions.fontSize.biggest}
          fontWeight={definitions.fontWeight.bold}
        >
          Pluto
        </Text>
        <Text
          fontFamily="Lato"
          fontSize={definitions.fontSize.default}
          fontWeight={definitions.fontWeight.bold}
        >
          Reciclo
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        gap={definitions.spacing.small}
        padding={definitions.spacing.small}
        width="100%"
      >
        <Flex
          alignItems={definitions.alignItems.center}
          justifyContent={definitions.justifyContent.center}
          width="100%"
        >
          <Text
            fontFamily="Lato"
            fontSize={definitions.fontSize.small}
            fontWeight={definitions.fontWeight.bold}
            noOfLines={1}
          >
            {`Bem-vindo, ${loggedUser?.name}`}
          </Text>
        </Flex>
        <Flex backgroundColor="gray.500" height="1px" width="100%" />
        <Flex
          alignItems={definitions.alignItems.center}
          flexDirection="column"
          gap={definitions.spacing.smaller}
          justifyContent={definitions.justifyContent.center}
          width="100%"
        >
          <Button colorScheme="green" width="100%">
            <Text>Tela Inicial</Text>
          </Button>
          <Button colorScheme="green" width="100%">
            <Text>Solicitações</Text>
          </Button>
          <Button colorScheme="green" width="100%">
            <Text>Locais</Text>
          </Button>
          <Button colorScheme="green" width="100%">
            <Text>Configurações</Text>
          </Button>
          <Button colorScheme="green" width="100%">
            <Text>Manual de Instruções</Text>
          </Button>
        </Flex>
      </Flex>
    </DrawerContent>
  </Drawer>
);

export default AppRecicloDrawer;