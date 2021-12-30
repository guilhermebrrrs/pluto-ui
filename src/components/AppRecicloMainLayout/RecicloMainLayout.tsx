import { FunctionComponent, memo } from "react";
import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import { AppBar } from "components";

const AppRecicloMainLayout: FunctionComponent = () => (
  <Flex flexDirection="column" width="100%">
    <AppBar />
    <Outlet />
  </Flex>
);

export default memo(AppRecicloMainLayout);
