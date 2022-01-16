import { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const LandingPageFooter: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    backgroundColor="green.500"
    justifyContent={definitions.justifyContent.center}
    padding={definitions.spacing.larger}
    width="100%"
  >
    <Flex maxWidth="1440px" width="1440px">
      <Text
        color="gray.50"
        fontFamily={definitions.fontFamily.default}
        fontSize={definitions.fontSize.small}
        fontWeight={definitions.fontWeight.bold}
      >
        Em desenvolvimento por: Guilherme Barra Orsi
      </Text>
    </Flex>
  </Flex>
);

export default LandingPageFooter;
