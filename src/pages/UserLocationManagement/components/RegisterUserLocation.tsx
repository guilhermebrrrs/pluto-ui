import { FunctionComponent } from "react";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { definitions } from "utils";
import { useRegisterUserLocationProps } from "../hooks";

const RegisterUserLocation: FunctionComponent = () => {
  const { weekDaysOptions, weekDayTimesOptions } =
    useRegisterUserLocationProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="gray.200"
      borderColor="gray.500"
      borderRadius="5px"
      borderWidth="2px"
      borderTopRadius={0}
      flexDirection="column"
      gap={definitions.spacing.small}
      height="calc(100vh - 220px)"
      justifyContent={definitions.justifyContent.center}
      maxHeight="calc(100vh - 220px)"
      padding={definitions.spacing.small}
      width="100%"
    >
      <Flex gap={definitions.spacing.smaller} height="100%" width="100%">
        <Flex
          flex={1}
          flexDirection="column"
          gap={definitions.spacing.smallest}
          overflowY="auto"
          maxHeight="100%"
        >
          <Flex justifyContent={definitions.justifyContent.center} width="100%">
            <Text
              fontFamily="Lato"
              fontSize={definitions.fontSize.small}
              fontWeight={definitions.fontWeight.bold}
            >
              Dados do Local
            </Text>
          </Flex>
          <Grid
            gap={definitions.spacing.smallest}
            templateColumns="repeat(5, 1fr)"
          >
            <GridItem colSpan={5}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Nome de Local"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={5}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Logradouro"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={5}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Complemento"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={4}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Bairro"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={1}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Número"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={4}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Cidade"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={1}>
              <InputGroup>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  placeholder="Estado"
                  onChange={() => {}}
                  value={undefined}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
          </Grid>
        </Flex>
        <Flex backgroundColor="gray.500" height="100%" width="2px" />
        <Flex
          flex={1}
          flexDirection="column"
          gap={definitions.spacing.small}
          height="100%"
        >
          <Flex justifyContent={definitions.justifyContent.center} width="100%">
            <Text
              fontFamily="Lato"
              fontSize={definitions.fontSize.small}
              fontWeight={definitions.fontWeight.bold}
            >
              Disponibilidade
            </Text>
          </Flex>
          <Flex gap={definitions.spacing.small}>
            <Flex
              flex={1}
              flexDirection="column"
              gap={definitions.spacing.smallest}
            >
              <Flex width="100%">
                <Text
                  fontFamily="Lato"
                  fontSize={definitions.fontSize.small}
                  fontWeight={definitions.fontWeight.bold}
                >
                  Dias da Semana
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap={definitions.spacing.nano}
                width="100%"
              >
                {weekDaysOptions}
              </Flex>
            </Flex>
            <Flex
              flex={1}
              flexDirection="column"
              gap={definitions.spacing.smallest}
            >
              <Flex width="100%">
                <Text
                  fontFamily="Lato"
                  fontSize={definitions.fontSize.small}
                  fontWeight={definitions.fontWeight.bold}
                >
                  Horário disponível
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap={definitions.spacing.nano}
                width="100%"
              >
                {weekDayTimesOptions}
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flex={1}
            flexDirection="column"
            gap={definitions.spacing.smallest}
          >
            <Flex width="100%">
              <Text
                fontFamily="Lato"
                fontSize={definitions.fontSize.small}
                fontWeight={definitions.fontWeight.bold}
              >
                Observações
              </Text>
            </Flex>
            <Textarea
              backgroundColor="gray.100"
              height="100%"
              resize="none"
              width="100%"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.500" height="2px" width="100%" />
      <Flex justifyContent={definitions.justifyContent.flexEnd} width="100%">
        <Button
          colorScheme="blackAlpha"
          _hover={{ backgroundColor: "green.500" }}
        >
          Cadastrar Local
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterUserLocation;
