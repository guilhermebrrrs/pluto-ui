import { useCallback, useContext, useState } from "react";
import { AppAuthenticationContext } from "contexts";

const useAppBarProps = () => {
  const { app, loggedUser } = useContext(AppAuthenticationContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return { app, closeDrawer, isOpen, openDrawer, loggedUser };
};

export { useAppBarProps };
