import { FunctionComponent } from "react";
import { definitions } from "../../utils";
import { Flex, Text } from "@chakra-ui/react";

const ListingUsers: FunctionComponent = () => (
  <Flex flexDirection="column" gap={definitions.spacing.smallest} width="100%">
    <Text
      fontFamily="Lato"
      fontSize={definitions.fontSize.bigger}
      fontWeight={definitions.fontWeight.bold}
    >
      Listagem de Usuários
    </Text>
    <Flex
      backgroundColor="gray.200"
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      minHeight="calc(100vh - 180px)"
      padding={definitions.spacing.default}
      width="100%"
    >
      Wabacule
    </Flex>
  </Flex>
);

export default ListingUsers;
