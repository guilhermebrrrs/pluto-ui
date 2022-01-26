import {
  ListingRecicloCollectionRequests,
  RegisterRecicloCollectionRequests,
} from "./components";
import { useRecicloCollectionRequestManagementProps } from "./hooks";
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

const RecicloCollectionRequestManagement: FunctionComponent = () => {
  const { selectebTabStyle } = useRecicloCollectionRequestManagementProps();

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
        Solicitações de Coletas
      </Text>
      <Flex>
        <Tabs isFitted variant="enclosed" width="100%">
          <TabList>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Listar Solicitações de Coleta
              </Text>
            </Tab>
            <Tab _selected={selectebTabStyle}>
              <Text
                fontFamily={definitions.fontFamily.default}
                fontWeight={definitions.fontWeight.bold}
              >
                Cadastrar Solicitações de Coleta
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>
              <ListingRecicloCollectionRequests />
            </TabPanel>
            <TabPanel padding={0}>
              <RegisterRecicloCollectionRequests />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default RecicloCollectionRequestManagement;
