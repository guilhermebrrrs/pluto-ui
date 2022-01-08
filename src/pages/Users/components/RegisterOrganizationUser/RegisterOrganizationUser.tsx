import { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const RegisterOrganizationUser: FunctionComponent = () => (
  <Flex
    backgroundColor="gray.200"
    borderColor="gray.500"
    borderRadius="5px"
    borderWidth="2px"
    borderTopRadius={0}
    gap={definitions.spacing.small}
    height="calc(100vh - 220px)"
    maxHeight="calc(100vh - 220px)"
    padding={definitions.spacing.small}
    width="100%"
  >
    <Text fontFamily={definitions.fontFamily.default}>Em desenvolvimento</Text>
  </Flex>
);

export default RegisterOrganizationUser;
