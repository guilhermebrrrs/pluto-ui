import { FunctionComponent } from "react";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const ServerOffline: FunctionComponent = () => (
  <ChakraProvider>
    <Flex height="100vh" width="100vw">
      <Text fontSize={definitions.fontSize.biggest}>Ooops...</Text>
      <Text fontSize={definitions.fontSize.normal}>
        Acho que este serviço está fora do ar!
      </Text>
    </Flex>
  </ChakraProvider>
);

export default ServerOffline;
