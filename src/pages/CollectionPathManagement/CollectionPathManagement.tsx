import { ListingCollectionPath, RegisterCollectionPath } from "./components";
import { useCollectionPathManagementProps } from "./hooks";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { definitions } from "utils";

const CollectionPathManagement: FunctionComponent = () => {
  const { selectebTabStyle } = useCollectionPathManagementProps();

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
        Rotas
      </Text>
      <Flex>
        <Tabs isFitted variant="enclosed" width="100%">
          <TabList>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Listar Rotas
              </Text>
            </Tab>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Cadastrar Rotas
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>
              <ListingCollectionPath />
            </TabPanel>
            <TabPanel padding={0}>
              <RegisterCollectionPath />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default CollectionPathManagement;
