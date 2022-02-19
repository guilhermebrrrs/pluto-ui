import { useRegisterCollectionPathProps } from "../hooks";
import { Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";

const RegisterCollectionPath: FunctionComponent = () => {
  const {
    description,
    handleRegisterCollectionPath,
    loading,
    name,
    setDescription,
    setName,
  } = useRegisterCollectionPathProps();

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
          padding="1px"
          maxHeight="100%"
        >
          <InputGroup flexDirection="column">
            <Text>Nome da Rota:</Text>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              focusBorderColor="gray.700"
              placeholder="Ex: Rota dia 25/02/2022 ou Rota Coleta Madeiras"
              onChange={setName}
              value={name}
              width="100%"
            />
          </InputGroup>
          <InputGroup flexDirection="column">
            <Text>Descrição da Rota:</Text>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              focusBorderColor="gray.700"
              placeholder="Ex: Rota com planejamento p/ 25/05/2022"
              onChange={setDescription}
              value={description}
              width="100%"
            />
          </InputGroup>
        </Flex>
        <Flex height="100%" width="2px" />
        <Flex
          flex={1}
          flexDirection="column"
          gap={definitions.spacing.small}
          height="100%"
        />
      </Flex>
      <Flex backgroundColor="gray.500" height="2px" width="100%" />
      <Flex justifyContent={definitions.justifyContent.flexEnd} width="100%">
        <Button
          colorScheme="blackAlpha"
          isLoading={loading}
          onClick={handleRegisterCollectionPath}
          _hover={{ backgroundColor: "green.500" }}
        >
          Cadastrar Rota
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterCollectionPath;
