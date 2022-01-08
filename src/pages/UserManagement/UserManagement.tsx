import { FunctionComponent } from "react";
import { definitions } from "utils";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ListingUsers, RegisterOrganizationUser } from "./components";
import { useUsersProps } from "./hooks";

const UserManagement: FunctionComponent = () => {
  const { selectebTabStyle } = useUsersProps();

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
            <TabPanel padding={0}>
              <ListingUsers />
            </TabPanel>
            <TabPanel padding={0}>
              <RegisterOrganizationUser />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default UserManagement;
