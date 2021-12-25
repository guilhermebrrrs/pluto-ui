import { FunctionComponent, memo } from "react";
import { Outlet } from "react-router";

const AppColetasMainLayout: FunctionComponent = () => (
  <>
    <Outlet />
  </>
);

export default memo(AppColetasMainLayout);
