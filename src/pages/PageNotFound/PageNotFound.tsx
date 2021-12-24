import { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const PageNotFound: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    flexDirection="column"
    gap={definitions.spacing.normal}
    height="100vh"
    justifyContent={definitions.justifyContent.center}
    width="100vw"
  >
    <Text
      fontSize={definitions.fontSize.biggest}
      fontWeight={definitions.fontWeight.bold}
    >
      ... 404 :S
    </Text>
    <Text fontSize={definitions.fontSize.normal}>
      Página não encontrada.
      <br />
      Verifique novamente o endereço digitado.
    </Text>
  </Flex>
);

export default PageNotFound;
