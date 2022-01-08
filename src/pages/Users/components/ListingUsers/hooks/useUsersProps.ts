import { useContext, useMemo } from "react";
import { AppAuthenticationContext } from "contexts";
import { useQuery } from "@apollo/client";
import { FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID } from "data";
import { Organization, OrganizationUser } from "types";

const useUsersProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const organizationId = useMemo(() => {
    if (loggedUser?.__typename === "OrganizationUser")
      return (loggedUser as OrganizationUser)?.organization;

    return (loggedUser as Organization)?._id;
  }, [loggedUser]);

  const {
    data: {
      findAllOrganizationUsersByOrganizationId:
        organizationUsers = [] as OrganizationUser[],
    } = {},
  } = useQuery(FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID, {
    variables: { id: organizationId },
  });

  return { organizationUsers };
};

export { useUsersProps };
