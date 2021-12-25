import { FunctionComponent, useState } from "react";
import { AppRecicloAuthenticationContext } from "contexts";
import { User } from "types";

const AppRecicloAuthenticationProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>();

  return (
    <AppRecicloAuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AppRecicloAuthenticationContext.Provider>
  );
};

export default AppRecicloAuthenticationProvider;
