import { FunctionComponent } from "react";
import { Link as RTDLink } from "react-router-dom";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Waves } from "components";
import { definitions } from "utils";
import { useRegisterProps } from "./hooks";

const Register: FunctionComponent = () => {
  const {
    toRegisterColetasOrganization,
    toRegisterColetasUser,
    toRegisterReciclo,
  } = useRegisterProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="green.500"
      height="100vh"
      justifyContent={definitions.justifyContent.center}
      width="100vw"
    >
      <Flex
        backgroundColor="gray.50"
        borderColor="gray.600"
        borderRadius="8px"
        borderWidth="2px"
        flexDirection="column"
        gap={definitions.spacing.default}
        padding={definitions.spacing.default}
      >
        <Flex gap={definitions.spacing.default}>
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            gap={definitions.spacing.default}
            justifyContent={definitions.justifyContent.spaceBetween}
          >
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              justifyContent={definitions.justifyContent.center}
            >
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.biggest}
                fontWeight={definitions.fontWeight.bold}
              >
                Pluto
              </Text>
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Coletas
              </Text>
            </Flex>
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              gap={definitions.spacing.smaller}
              justifyContent={definitions.justifyContent.center}
              width="100%"
            >
              <Button
                colorScheme="green"
                onClick={toRegisterColetasOrganization}
                width="275px"
              >
                <Text>Cadastrar Organização</Text>
              </Button>
              <Button
                colorScheme="green"
                onClick={toRegisterColetasUser}
                width="275px"
              >
                <Text>Cadastrar Usuário Organização</Text>
              </Button>
            </Flex>
          </Flex>
          <Flex backgroundColor="gray.600" height="available" width="2px" />
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            gap={definitions.spacing.default}
            justifyContent={definitions.justifyContent.spaceBetween}
          >
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              justifyContent={definitions.justifyContent.center}
            >
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.biggest}
                fontWeight={definitions.fontWeight.bold}
              >
                Pluto
              </Text>
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Reciclo
              </Text>
            </Flex>
            <Flex
              alignItems={definitions.alignItems.center}
              flex={1}
              width="100%"
            >
              <Button
                colorScheme="green"
                onClick={toRegisterReciclo}
                width="275px"
              >
                <Text>Quero reciclar!</Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={definitions.justifyContent.center} width="100%">
          <Link as={RTDLink} to="/">
            <Text fontFamily="Lato" fontSize={definitions.fontSize.small}>
              Voltar para Landing Page
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Waves />
    </Flex>
  );
};

export default Register;
