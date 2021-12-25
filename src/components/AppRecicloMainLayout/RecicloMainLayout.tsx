import { FunctionComponent, memo } from "react";
import { Outlet } from "react-router";

const AppRecicloMainLayout: FunctionComponent = () => (
  <>
    <Outlet />
  </>
);

export default memo(AppRecicloMainLayout);
