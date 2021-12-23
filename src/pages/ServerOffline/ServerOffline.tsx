import { FunctionComponent } from "react";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { definitions } from "../../utils/definitions";

const ServerOffline: FunctionComponent = () => (
  <ChakraProvider>
    <Flex h="100vh" w="100vw">
      <Text size={definitions.fontSize.bigger}>Ooops...</Text>
      <Text size={definitions.fontSize.normal}>
        Acho que este serviço está fora do ar!
      </Text>
    </Flex>
  </ChakraProvider>
);

export default ServerOffline;
