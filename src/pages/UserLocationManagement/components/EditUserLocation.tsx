import { FunctionComponent } from "react";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { PasswordInput } from "components";
import { UserLocation } from "types";
import { definitions } from "utils";

interface EditUserLocationProps {
  cancelEdit: () => void;
  selectedUserLocation: UserLocation;
}

const EditUserLocation: FunctionComponent<EditUserLocationProps> = ({
  cancelEdit,
  selectedUserLocation,
}) => (
  <>
    <Flex flexDirection="column" gap={definitions.spacing.small} width="100%">
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
        <InputGroup>
          <InputLeftElement color="gray.600" children={<EmailIcon />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="E-mail"
            onChange={() => {}}
            value={undefined}
            width="100%"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement color="gray.600" children={<EmailIcon />} />
          <Input
            backgroundColor="gray.50"
            borderColor="gray.300"
            focusBorderColor="gray.700"
            placeholder="Nome"
            onChange={() => {}}
            value={undefined}
            width="100%"
          />
        </InputGroup>
        <Checkbox
          borderColor="gray.500"
          isChecked={undefined}
          marginLeft={definitions.spacing.small}
          onChange={() => {}}
        >
          Usuário Ativo
        </Checkbox>
        <PasswordInput
          backgroundColor="gray.50"
          borderColor="gray.300"
          focusBorderColor="gray.700"
          onChange={() => {}}
          value={undefined}
        />
      </Flex>
      <Flex
        justifyContent={definitions.justifyContent.spaceBetween}
        width="100%"
      >
        <Button
          colorScheme="blackAlpha"
          onClick={() => {}}
          _hover={{ backgroundColor: "red.500" }}
        >
          Remover Usuário
        </Button>
        <Flex gap={definitions.spacing.small}>
          <Button
            colorScheme="blackAlpha"
            onClick={cancelEdit}
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
  </>
);

export default EditUserLocation;
