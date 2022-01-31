import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";

const CardContainer: FunctionComponent = ({ children }) => (
  <Flex
    borderColor="gray.500"
    borderRadius="6px"
    borderWidth="2px"
    justifyContent={definitions.justifyContent.center}
    padding={definitions.spacing.smaller}
    width="100%"
    _hover={{ backgroundColor: "gray.50" }}
  >
    {children}
  </Flex>
);

export default CardContainer;
