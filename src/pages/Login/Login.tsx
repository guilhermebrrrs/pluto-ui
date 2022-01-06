import { FunctionComponent } from "react";
import { Link as RTDLink } from "react-router-dom";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Waves } from "components";
import { definitions } from "utils";
import { useLoginProps } from "./hooks";

const Login: FunctionComponent = () => {
  const { toLoginColetas, toLoginReciclo } = useLoginProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="green.500"
      height="100vh"
      justifyContent={definitions.justifyContent.center}
      width="100vw"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        backgroundColor="gray.100"
        borderColor="gray.600"
        borderRadius="8px"
        borderWidth="2px"
        flexDirection="column"
        gap={definitions.spacing.smaller}
        padding={definitions.spacing.default}
      >
        <Text
          fontFamily="Lato"
          fontSize={definitions.fontSize.biggest}
          fontWeight={definitions.fontWeight.bold}
        >
          Pluto
        </Text>
        <Button colorScheme="green" onClick={toLoginColetas} width="400px">
          <Text>Login Coletas</Text>
        </Button>
        <Button colorScheme="green" onClick={toLoginReciclo} width="400px">
          <Text>Login Reciclo</Text>
        </Button>
        <Link as={RTDLink} to="/">
          <Text>Voltar para Landing Page</Text>
        </Link>
      </Flex>
      <Waves />
    </Flex>
  );
};

export default Login;
