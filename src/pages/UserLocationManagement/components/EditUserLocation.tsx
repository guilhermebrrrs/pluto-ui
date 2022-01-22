import { FunctionComponent, memo } from "react";
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
    cep,
    city,
    closeRemoverUserLocationModal,
    comments,
    complement,
    country,
    district,
    handleDelete,
    handleUpdate,
    isRemoverUserLocationModalOpened,
    number,
    openRemoverUserLocationModal,
    placename,
    setCep,
    setCity,
    setComplement,
    setComments,
    setCountry,
    setDistrict,
    setPlacename,
    setState,
    setStreet,
    setNumber,
    state,
    street,
    weekDaysOptions,
    weekDayTimesOptions,
  } = useEditUserLocationProps({ cancel, userLocation: selectedUserLocation });

  // TODO: verify problems when change fields for user location editing
  // TODO: try implementation and usage of react hook form
  return (
    <>
      <Flex flexDirection="column" gap={definitions.spacing.small} width="100%">
        <Flex
          flexDirection="column"
          gap={definitions.spacing.small}
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
                    onChange={setPlacename}
                    value={placename}
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
                    onChange={setStreet}
                    value={street}
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
                    onChange={setComplement}
                    value={complement}
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
                    onChange={setCep}
                    value={cep}
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
                    onChange={setDistrict}
                    value={district}
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
                    onChange={setNumber}
                    value={number}
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
                    onChange={setCity}
                    value={city}
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
                    onChange={setState}
                    value={state}
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
                    onChange={setCountry}
                    value={country}
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
                onChange={setComments}
                value={comments}
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
            Remover Local
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
              onClick={handleUpdate}
              _hover={{ backgroundColor: "green.500" }}
            >
              Salvar Mudanças
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <RemoveUserLocationModal
        isOpen={isRemoverUserLocationModalOpened}
        onClose={closeRemoverUserLocationModal}
        removeUserLocation={handleDelete}
      />
    </>
  );
};

export default memo(EditUserLocation);
