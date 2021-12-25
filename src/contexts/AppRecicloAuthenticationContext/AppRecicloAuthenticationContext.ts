import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "types";

interface AppRecicloAuthenticationProps {
  user: User | null | undefined;
  setUser?: Dispatch<SetStateAction<User | null | undefined>>;
}

const AppRecicloAuthenticationContext =
  createContext<AppRecicloAuthenticationProps>({
    user: null,
  });

export default AppRecicloAuthenticationContext;
