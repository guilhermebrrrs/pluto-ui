import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

const MainLayout: FunctionComponent = () => (
  <Flex height="fit-content" maxWidth="100vw" width="100vw">
    <Outlet />
  </Flex>
);

export default MainLayout;
