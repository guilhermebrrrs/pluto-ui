import { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const AppBar: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    borderBottomWidth="2px"
    borderBottomColor="lightgray"
    height="7vh"
    justifyContent={definitions.justifyContent.spaceBetween}
    padding={definitions.spacing.largest}
    width="100vw"
  >
    <Text size={definitions.fontSize.normal}>RecicloApp</Text>
  </Flex>
);

export default AppBar;
