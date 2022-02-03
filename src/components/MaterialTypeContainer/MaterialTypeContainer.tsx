import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { MaterialType } from "types";
import {
  definitions,
  getMaterialTypeBorderColor,
  getMaterialTypeColor,
  getMaterialTypeLabel,
  getMaterialTypeTextColor,
} from "utils";

interface MaterialTypeContainerProps {
  materialType: MaterialType;
}

const MaterialTypeContainer: FunctionComponent<MaterialTypeContainerProps> = ({
  materialType,
}) => (
  <Flex
    alignItems={definitions.alignItems.center}
    backgroundColor={getMaterialTypeColor(materialType!)}
    borderColor={getMaterialTypeBorderColor(materialType!)}
    borderRadius="200px"
    borderWidth="2px"
    height="36px"
    justifyContent={definitions.justifyContent.center}
    padding={`${definitions.spacing.micro} ${definitions.spacing.smaller}`}
  >
    <Text
      color={getMaterialTypeTextColor(materialType!)}
      fontFamily="Lato"
      fontWeight={definitions.fontWeight.bold}
    >
      {getMaterialTypeLabel(materialType!)}
    </Text>
  </Flex>
);

export default MaterialTypeContainer;
