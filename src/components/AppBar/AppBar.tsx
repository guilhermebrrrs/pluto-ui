import { FunctionComponent } from "react";
import { AppBarContent, AppColetasDrawer, AppRecicloDrawer } from "components";
import { AppType, OrganizationUser, User } from "types";
import { useAppBarProps } from "./useAppBarProps";

const AppBar: FunctionComponent = () => {
  const { app, closeDrawer, isOpen, openDrawer, loggedUser } = useAppBarProps();

  return (
    <>
      <AppBarContent
        app={app}
        loggedUser={loggedUser}
        openDrawer={openDrawer}
      />
      {app === AppType.APP_COLETAS && (
        <AppColetasDrawer
          closeDrawer={closeDrawer}
          isOpen={isOpen}
          loggedUser={loggedUser as OrganizationUser}
        />
      )}
      {app === AppType.APP_RECICLO && (
        <AppRecicloDrawer
          closeDrawer={closeDrawer}
          isOpen={isOpen}
          loggedUser={loggedUser as User}
        />
      )}
    </>
  );
};

export default AppBar;
