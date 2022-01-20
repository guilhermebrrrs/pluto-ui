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
import { UserLocation } from "types";
import { definitions } from "utils";
import { RemoveUserLocationModal } from "./";
import { useEditUserLocationProps } from "../hooks";

interface EditUserLocationProps {
  cancelEdit: () => void;
  selectedUserLocation: UserLocation;
}

const EditUserLocation: FunctionComponent<EditUserLocationProps> = ({
  cancelEdit: cancel,
  selectedUserLocation,
}) => {
  const {
    closeRemoverUserLocationModal,
    isRemoverUserLocationModalOpened,
    openRemoverUserLocationModal,
    weekDaysOptions,
    weekDayTimesOptions,
  } = useEditUserLocationProps({ userLocation: selectedUserLocation });

  return (
    <>
      <Flex flexDirection="column" gap={definitions.spacing.small} width="100%">
        <Flex
          flexDirection="column"
          gap={definitions.spacing.small}
          paddingRight={definitions.spacing.small}
          overflowY="auto"
          width="100%"
        >
          <Flex
            flex={1}
            flexDirection="column"
            gap={definitions.spacing.small}
            width="100%"
          >
            <Text
              alignSelf={definitions.justifyContent.center}
              fontFamily={definitions.fontFamily.default}
              fontWeight={definitions.fontWeight.bold}
            >
              Editar Informações de {selectedUserLocation.placename}
            </Text>
            <Flex backgroundColor="gray.500" height="2px" width="100%" />
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
              <GridItem colSpan={4}>
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
              <GridItem colSpan={1}>
                <InputGroup>
                  <Input
                    backgroundColor="gray.50"
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    margin="1px"
                    placeholder="CEP"
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
              <GridItem colSpan={3}>
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
              <GridItem colSpan={1}>
                <InputGroup>
                  <Input
                    backgroundColor="gray.50"
                    borderColor="gray.300"
                    focusBorderColor="gray.700"
                    margin="1px"
                    placeholder="País"
                    onChange={() => {}}
                    value={undefined}
                    width="100%"
                  />
                </InputGroup>
              </GridItem>
            </Grid>
          </Flex>
          <Flex
            flex={1}
            flexDirection="column"
            gap={definitions.spacing.small}
            height="100%"
          >
            <Flex
              justifyContent={definitions.justifyContent.center}
              width="100%"
            >
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
                  paddingLeft="3px"
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
                height="350px"
                resize="none"
                width="100%"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justifyContent={definitions.justifyContent.spaceBetween}
          width="100%"
        >
          <Button
            colorScheme="blackAlpha"
            onClick={openRemoverUserLocationModal}
            _hover={{ backgroundColor: "red.500" }}
          >
            Remover Usuário
          </Button>
          <Flex gap={definitions.spacing.small}>
            <Button
              colorScheme="blackAlpha"
              onClick={cancel}
              _hover={{ backgroundColor: "red.500" }}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="blackAlpha"
              onClick={() => {}}
              _hover={{ backgroundColor: "green.500" }}
            >
              Salvar Mudanças
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <RemoveUserLocationModal
        cancel={cancel}
        isOpen={isRemoverUserLocationModalOpened}
        onClose={closeRemoverUserLocationModal}
        removeUserLocation={() => {}}
      />
    </>
  );
};

export default EditUserLocation;
