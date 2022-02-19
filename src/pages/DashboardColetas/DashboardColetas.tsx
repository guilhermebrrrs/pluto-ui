import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MdSettings } from "react-icons/md";
import { definitions } from "utils";

const DashboardColetas: FunctionComponent = () => {
  return (
    <Flex
      flexDirection="column"
      gap={definitions.spacing.smallest}
      width="100%"
    >
      <Text
        fontFamily={definitions.fontFamily.default}
        fontSize={definitions.fontSize.bigger}
        fontWeight={definitions.fontWeight.bold}
      >
        Dashboard
      </Text>
      <Flex
        alignItems={definitions.alignItems.center}
        backgroundColor="gray.200"
        borderColor="gray.500"
        borderRadius="5px"
        borderWidth="2px"
        gap={definitions.spacing.small}
        justifyContent={definitions.justifyContent.center}
        minHeight="calc(100vh - 180px)"
        padding={definitions.spacing.default}
        width="100%"
      >
        <MdSettings size="48px" />
        <Text fontFamily="Lato" fontSize={definitions.fontSize.big}>
          ... desenvolvimento em progresso
        </Text>
      </Flex>
    </Flex>
  );
};

export default DashboardColetas;
