import { FunctionComponent } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const LandingPageHeader: FunctionComponent = () => (
  <Flex
    backgroundColor="green.500"
    flexDirection="column"
    height="45vh"
    width="100%"
    padding={definitions.spacing.larger}
  >
    <Flex
      alignItems={definitions.alignItems.center}
      justifyContent={definitions.justifyContent.spaceBetween}
      width="100%"
    >
      <Text
        color="gray.50"
        fontFamily="Lato"
        fontSize={definitions.fontSize.biggest}
        fontWeight={definitions.fontWeight.bold}
      >
        Sistema Pluto
      </Text>
      <Flex gap={definitions.spacing.small}>
        <Button colorScheme="green" variant="solid">
          Cadastrar
        </Button>
        <Button colorScheme="green" variant="solid">
          Login
        </Button>
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.50" height="2px" width="100%" />
  </Flex>
);

export default LandingPageHeader;
