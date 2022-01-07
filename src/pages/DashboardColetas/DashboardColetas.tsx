import { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const DashboardColetas: FunctionComponent = () => {
  return (
    <Flex
      flexDirection="column"
      gap={definitions.spacing.smallest}
      width="100%"
    >
      <Text
        fontFamily="Lato"
        fontSize={definitions.fontSize.bigger}
        fontWeight={definitions.fontWeight.bold}
      >
        Dashboard
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
};

export default DashboardColetas;
