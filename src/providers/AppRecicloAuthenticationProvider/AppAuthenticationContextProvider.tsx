import { FunctionComponent, useState } from "react";
import { AppAuthenticationContext } from "contexts";
import { AppType, OrganizationUser, User } from "types";
import { APP_TYPE, getFromLocalStorage, LOGGED_USER } from "utils";

const AppAuthenticationContextProvider: FunctionComponent = ({ children }) => {
  const [app, setApp] = useState<AppType | null>(
    () => getFromLocalStorage(APP_TYPE) ?? null
  );
  const [loggedUser, setLoggedUser] = useState<User | OrganizationUser | null>(
    () => getFromLocalStorage(LOGGED_USER) ?? null
  );

  return (
    <AppAuthenticationContext.Provider
      value={{ app, loggedUser, setApp, setLoggedUser }}
    >
      {children}
    </AppAuthenticationContext.Provider>
  );
};

export default AppAuthenticationContextProvider;
