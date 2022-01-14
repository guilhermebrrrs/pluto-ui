import { FunctionComponent } from "react";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { definitions } from "utils";
import { useUserLocationManagementProps } from "./hooks";

const UserLocationManagement: FunctionComponent = () => {
  const { selectebTabStyle } = useUserLocationManagementProps();

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
        Usuários
      </Text>
      <Flex>
        <Tabs isFitted variant="enclosed" width="100%">
          <TabList>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Listar Usuários
              </Text>
            </Tab>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Cadastrar Usuário
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>Teste</TabPanel>
            <TabPanel padding={0}>Teste</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default UserLocationManagement;
