import { FunctionComponent, useState } from "react";
import { AppAuthenticationContext } from "contexts";
import { AppType, OrganizationUser, User } from "types";
import { DATA_APP_TYPE, DATA_LOGGED_USER, getFromLocalStorage } from "utils";

const AppAuthenticationContextProvider: FunctionComponent = ({ children }) => {
  const [app, setApp] = useState<AppType | null>(
    () => getFromLocalStorage(DATA_APP_TYPE) ?? null
  );
  const [loggedUser, setLoggedUser] = useState<User | OrganizationUser | null>(
    () => getFromLocalStorage(DATA_LOGGED_USER) ?? null
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
