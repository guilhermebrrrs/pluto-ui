import { useContext, useEffect, useMemo } from "react";
import { AppAuthenticationContext } from "contexts";
import { useLazyQuery } from "@apollo/client";
import { FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID } from "data";
import { Organization, OrganizationUser } from "types";
import { sortByString } from "utils";

const useUsersProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

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

  return {
    sortedOrganizationUsers: [...organizationUsers].sort(
      ({ name: a }: OrganizationUser, { name: b }: OrganizationUser) =>
        sortByString(a, b)
    ),
  };
};

export { useUsersProps };
