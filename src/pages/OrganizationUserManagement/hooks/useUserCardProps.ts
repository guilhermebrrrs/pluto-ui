import { Dispatch, SetStateAction, useCallback } from "react";
import { OrganizationUser } from "types";

interface UseEditUserCardHookProps {
  organizationUser: OrganizationUser | null;
  setSelectedOrganizationUser: Dispatch<
    SetStateAction<OrganizationUser | null>
  >;
}

const useUserCardProps = ({
  organizationUser,
  setSelectedOrganizationUser,
}: UseEditUserCardHookProps) => {
  const setOrganizationUser = useCallback(
    () =>
      organizationUser && setSelectedOrganizationUser({ ...organizationUser }),
    [organizationUser, setSelectedOrganizationUser]
  );

  return { setOrganizationUser };
};

export { useUserCardProps };
