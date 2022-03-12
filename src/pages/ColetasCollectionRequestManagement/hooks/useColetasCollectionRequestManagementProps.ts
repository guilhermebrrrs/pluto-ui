import { useLazyQuery } from "@apollo/client";
import { FIND_ALL_COLLECTION_REQUESTS_IN_STATUS_ARRAY } from "data";
import { CollectionStatus } from "types";
import { useEffect, useMemo } from "react";

const useColetasCollectionRequestManagementProps = () => {
  const [
    fetchQuery,
    {
      data: {
        findAllCollectionRequestsInStatusArray: collectionRequests = [],
      } = {},
      loading,
    },
  ] = useLazyQuery(FIND_ALL_COLLECTION_REQUESTS_IN_STATUS_ARRAY, {
    variables: {
      statusArray: [CollectionStatus.OPENED],
    },
  });

  const filteredCollectionRequests = useMemo(
    () => collectionRequests,
    [collectionRequests]
  );

  useEffect(() => {
    fetchQuery().then();
  }, [fetchQuery]);

  return { filteredCollectionRequests, loading };
};

export { useColetasCollectionRequestManagementProps };
