import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_COLLECTION_PATHS_BY_ORGANIZATION_ID_AND_COLLECTION_PATH_STATUS } from "data";
import { useContext, useEffect, useMemo, useState } from "react";
import { CollectionPathStatus, Organization, OrganizationUser } from "types";

const useListingCollectionPathProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);
  const [collectionPathStatus, setCollectionPathStatus] =
    useState<CollectionPathStatus>(CollectionPathStatus.IN_DEFINITION);

  const [
    fetchquery,
    {
      data: {
        findAllCollectionPathsByOrganizationIdAndCollectionPathStatus:
          collectionPaths = [],
      } = {},
    },
  ] = useLazyQuery(
    FIND_ALL_COLLECTION_PATHS_BY_ORGANIZATION_ID_AND_COLLECTION_PATH_STATUS,
    {
      variables: {
        organizationId:
          loggedUser?.__typename === "Organization"
            ? (loggedUser as Organization)._id
            : (loggedUser as OrganizationUser).organization?._id,
        collectionPathStatus,
      },
    }
  );

  const filteredCollectionPaths = useMemo(
    () => collectionPaths,
    [collectionPaths]
  );

  useEffect(() => {
    fetchquery().then();
  }, [fetchquery]);

  return { filteredCollectionPaths };
};

export { useListingCollectionPathProps };
