import { FunctionComponent } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";
import { useLandingPageheaderProps } from "./hooks";

const LandingPageHeader: FunctionComponent = () => {
  const { toLogin, toRegister } = useLandingPageheaderProps();

  return (
    <Flex
      backgroundColor="green.500"
      flexDirection="column"
      padding={definitions.spacing.larger}
      width="100%"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        justifyContent={definitions.justifyContent.spaceBetween}
        width="100%"
      >
        <Text
          color="gray.50"
          fontFamily={definitions.fontFamily.default}
          fontSize={definitions.fontSize.biggest}
          fontWeight={definitions.fontWeight.bold}
        >
          Sistema Pluto
        </Text>
        <Flex gap={definitions.spacing.small}>
          <Button colorScheme="green" onClick={toRegister} variant="solid">
            Cadastrar
          </Button>
          <Button colorScheme="green" onClick={toLogin} variant="solid">
            Login
          </Button>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.50" height="2px" width="100%" />
    </Flex>
  );
};

export default LandingPageHeader;
