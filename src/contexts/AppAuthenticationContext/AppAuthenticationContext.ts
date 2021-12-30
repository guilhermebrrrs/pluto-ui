import { createContext, Dispatch, SetStateAction } from "react";
import { AppType, OrganizationUser, User } from "types";

interface AppAuthenticationContextProps {
  app: AppType | null;
  loggedUser: User | OrganizationUser | null;
  setApp?: Dispatch<SetStateAction<AppType | null>>;
  setLoggedUser?: Dispatch<SetStateAction<User | OrganizationUser | null>>;
}

const AppAuthenticationContext = createContext<AppAuthenticationContextProps>({
  app: null,
  loggedUser: null,
});

export default AppAuthenticationContext;
