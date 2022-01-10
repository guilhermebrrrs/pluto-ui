import { OrganizationUser } from "types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface useEditUserHookProps {
  selectedOrganizationUser: OrganizationUser;
}

const useEditUserProps = ({
  selectedOrganizationUser,
}: useEditUserHookProps) => {
  const [email, setEmailState] = useState<string>(
    selectedOrganizationUser?.email ?? ""
  );

  const [name, setNameState] = useState<string>(
    selectedOrganizationUser?.name ?? ""
  );

  const [isActive, setIsActiveState] = useState<boolean>(
    selectedOrganizationUser?.isActive ?? false
  );

  const [password, setPasswordState] = useState<string>(
    selectedOrganizationUser?.password ?? ""
  );

  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );

  const setName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setNameState(value),
    []
  );

  const setIsActive = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
      setIsActiveState(checked),
    []
  );

  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );

  useEffect(() => {
    setEmailState(selectedOrganizationUser?.email);
    setNameState(selectedOrganizationUser?.name);
    setPasswordState(selectedOrganizationUser?.password);
    setIsActiveState(selectedOrganizationUser?.isActive ?? false);
  }, [selectedOrganizationUser]);

  return {
    email,
    isActive,
    name,
    password,
    setEmail,
    setIsActive,
    setName,
    setPassword,
  };
};

export { useEditUserProps };
