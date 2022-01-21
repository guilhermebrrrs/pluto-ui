import { FunctionComponent } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { definitions } from "utils";

const DashboardReciclo: FunctionComponent = () => {
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
        flexDirection="column"
        justifyContent={definitions.justifyContent.center}
        minHeight="calc(100vh - 180px)"
        padding={definitions.spacing.default}
        width="100%"
      >
        <Flex
          alignItems={definitions.alignItems.center}
          flexDirection="column"
          height="calc(50% - 1px)"
          justifyContent={definitions.justifyContent.end}
          padding={definitions.spacing.default}
          width="100%"
        >
          <Text
            fontFamily={definitions.fontFamily.default}
            fontSize={definitions.fontSize.biggest}
            fontWeight={definitions.fontWeight.bold}
          >
            84
          </Text>
          <Text
            fontFamily={definitions.fontFamily.default}
            fontSize={definitions.fontSize.default}
            fontWeight={definitions.fontWeight.bold}
          >
            Solicitações Criadas
          </Text>
        </Flex>
        <Flex backgroundColor="gray.500" height="2px" width="50%" />
        <Flex
          alignItems={definitions.alignItems.center}
          flexDirection="column"
          height="calc(50% - 1px)"
          justifyContent={definitions.justifyContent.start}
          width="50%"
        >
          <Flex
            alignItems={definitions.alignItems.start}
            padding={definitions.spacing.default}
            width="100%"
          >
            <Flex
              alignItems={definitions.alignItems.center}
              flex={1}
              flexDirection="column"
            >
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.big}
                fontWeight={definitions.fontWeight.bold}
              >
                7
              </Text>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Solicitações Abertas
              </Text>
            </Flex>
            <Flex
              alignItems={definitions.alignItems.center}
              flex={1}
              flexDirection="column"
            >
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.big}
                fontWeight={definitions.fontWeight.bold}
              >
                75
              </Text>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Solicitações Finalizadas
              </Text>
            </Flex>
            <Flex
              alignItems={definitions.alignItems.center}
              flex={1}
              flexDirection="column"
            >
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.big}
                fontWeight={definitions.fontWeight.bold}
              >
                2
              </Text>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Solicitações Canceladas
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" padding={definitions.spacing.default}>
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              gap={definitions.spacing.large}
            >
              <Text
                fontFamily={definitions.fontFamily.default}
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Hoje serão realizadas algumas coletas
              </Text>
              <Button colorScheme="green">
                <Text>Ir para Solicitações</Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardReciclo;
