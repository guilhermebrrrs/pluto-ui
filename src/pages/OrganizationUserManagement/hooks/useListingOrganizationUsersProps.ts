import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID } from "data";
import { Organization, OrganizationUser } from "types";
import { sortByString } from "utils";

const useListingOrganizationUsersProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [selectedOrganizationUser, setSelectedOrganizationUser] =
    useState<OrganizationUser | null>(null);

  const organizationId = useMemo(() => {
    if (loggedUser?.__typename === "OrganizationUser")
      return (loggedUser as OrganizationUser)?.organization;

    return (loggedUser as Organization)?._id;
  }, [loggedUser]);

  const [
    fetchQuery,
    {
      data: {
        findAllOrganizationUsersByOrganizationId:
          organizationUsers = [] as OrganizationUser[],
      } = {},
    },
  ] = useLazyQuery(FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID, {
    variables: { id: organizationId },
  });

  useEffect(() => {
    organizationId && fetchQuery();
  }, [fetchQuery, organizationId]);

  const sortedOrganizationUsers = useMemo(
    () =>
      [...organizationUsers].sort(
        ({ name: a }: OrganizationUser, { name: b }: OrganizationUser) =>
          sortByString(a, b)
      ),
    [organizationUsers]
  );

  const cancelEdit = useCallback(() => setSelectedOrganizationUser(null), []);

  return {
    cancelEdit,
    selectedOrganizationUser,
    setSelectedOrganizationUser,
    sortedOrganizationUsers,
  };
};

export { useListingOrganizationUsersProps };
