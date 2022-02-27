import { useRegisterUserLocationProps } from "../hooks";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Text,
  Textarea,
  useOutsideClick,
} from "@chakra-ui/react";
import { FunctionComponent, useRef } from "react";
import { definitions } from "utils";
import { HereMapsGeocodingLocation } from "types";

const RegisterUserLocation: FunctionComponent = () => {
  const inputRef = useRef(null);

  const {
    cep,
    city,
    closeAddressSuggestion,
    comments,
    complement,
    country,
    district,
    geocodingLocations,
    handleRegister,
    isFocused,
    setLocationDataByAddressSuggestion,
    number,
    onBlur,
    onFocus,
    openAddressSuggestion,
    placename,
    setCep,
    setCity,
    setComments,
    setComplement,
    setCountry,
    setDistrict,
    setNumber,
    setPlacename,
    setState,
    setStreet,
    showAddressSuggestion,
    state,
    street,
    weekDaysOptions,
    weekDayTimesOptions,
  } = useRegisterUserLocationProps();

  useOutsideClick({
    ref: inputRef,
    handler: () => {
      if (isFocused) {
        onBlur();
        closeAddressSuggestion();
      }
    },
  });

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
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            width="100%"
          >
            <Text
              alignSelf={definitions.justifyContent.center}
              fontFamily={definitions.fontFamily.default}
              fontWeight={definitions.fontWeight.bold}
            >
              Dados do Local
            </Text>
            <Flex backgroundColor="gray.500" height="1px" width="100%" />
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
                  onChange={setPlacename}
                  value={placename}
                  width="100%"
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={5}>
              <InputGroup ref={inputRef}>
                <Input
                  backgroundColor="gray.50"
                  borderColor="gray.300"
                  focusBorderColor="gray.700"
                  margin="1px"
                  onChange={(event) => {
                    setStreet(event);
                    openAddressSuggestion();
                  }}
                  onFocus={onFocus}
                  placeholder="Logradouro"
                  position="relative"
                  value={street}
                  width="100%"
                />
                {showAddressSuggestion && geocodingLocations?.length > 0 && (
                  <Flex
                    backgroundColor="gray.50"
                    borderColor="gray.500"
                    borderRadius="7px"
                    borderWidth="2px"
                    flexDirection="column"
                    left="0"
                    position="absolute"
                    padding={definitions.spacing.micro}
                    top="52px"
                    width="100%"
                    zIndex="10"
                    maxHeight="250px"
                    overflowY="auto"
                  >
                    {geocodingLocations?.map(
                      (location: HereMapsGeocodingLocation, index: number) => (
                        <Flex
                          flexDirection="column"
                          key={location?.id}
                          width="100%"
                        >
                          <Flex
                            cursor="pointer"
                            padding={definitions.spacing.micro}
                            onClick={() => {
                              setLocationDataByAddressSuggestion(location);
                              closeAddressSuggestion();
                            }}
                            _hover={{ backgroundColor: "gray.200" }}
                          >
                            <Text fontSize={definitions.fontSize.smaller}>{`${
                              location?.address?.street ?? "n/a"
                            }, ${location?.address?.district ?? "n/a"} - ${
                              location?.address?.city ?? "n/a"
                            } ${location?.address?.state ?? "n/a"}`}</Text>
                          </Flex>
                          {index < geocodingLocations?.length - 1 && (
                            <Flex
                              backgroundColor="gray.500"
                              height="1px"
                              width="100%"
                            />
                          )}
                        </Flex>
                      )
                    )}
                  </Flex>
                )}
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
        <Flex backgroundColor="gray.500" height="100%" width="2px" />
        <Flex
          flex={1}
          flexDirection="column"
          gap={definitions.spacing.small}
          height="100%"
        >
          <Flex
            alignItems={definitions.alignItems.center}
            flexDirection="column"
            width="100%"
          >
            <Text
              alignSelf={definitions.justifyContent.center}
              fontFamily={definitions.fontFamily.default}
              fontWeight={definitions.fontWeight.bold}
            >
              Disponibilidade
            </Text>
            <Flex backgroundColor="gray.500" height="1px" width="100%" />
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
          <Flex flex={1} flexDirection="column" gap={definitions.spacing.small}>
            <Flex
              alignItems={definitions.alignItems.center}
              flexDirection="column"
              width="100%"
            >
              <Text
                alignSelf={definitions.justifyContent.center}
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Observações
              </Text>
              <Flex backgroundColor="gray.500" height="1px" width="100%" />
            </Flex>
            <Textarea
              backgroundColor="gray.100"
              height="100%"
              onChange={setComments}
              resize="none"
              value={comments}
              width="100%"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.500" height="2px" width="100%" />
      <Flex justifyContent={definitions.justifyContent.flexEnd} width="100%">
        <Button
          colorScheme="blackAlpha"
          onClick={handleRegister}
          _hover={{ backgroundColor: "green.500" }}
        >
          Cadastrar Local
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterUserLocation;
