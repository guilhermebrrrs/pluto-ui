import { FunctionComponent, memo } from "react";
import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import { AppBar } from "components";
import { definitions } from "utils";

const AppMainLayout: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    flexDirection="column"
    width="100%"
  >
    <AppBar />
    <Flex
      margin={`${definitions.spacing.default} 0`}
      maxWidth="1440px"
      width="100%"
    >
      <Outlet />
    </Flex>
  </Flex>
);

export default memo(AppMainLayout);
