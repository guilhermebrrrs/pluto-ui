import { Dispatch, SetStateAction, useCallback } from "react";
import { OrganizationUser } from "types";

interface useEditUserCardHookProps {
  organizationUser: OrganizationUser | null;
  setSelectedOrganizationUser: Dispatch<
    SetStateAction<OrganizationUser | null>
  >;
}

const useEditUserCardProps = ({
  organizationUser,
  setSelectedOrganizationUser,
}: useEditUserCardHookProps) => {
  const setOrganizationUser = useCallback(
    () =>
      organizationUser && setSelectedOrganizationUser({ ...organizationUser }),
    [organizationUser, setSelectedOrganizationUser]
  );

  return { setOrganizationUser };
};

export { useEditUserCardProps };
