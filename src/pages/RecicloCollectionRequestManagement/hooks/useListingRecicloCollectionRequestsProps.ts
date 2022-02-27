import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_COLLECTION_REQUESTS_BY_USER_ID_AND_IS_IN_STATUS_ARRAY } from "data";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CollectionRequest, CollectionStatus, User } from "types";

const useListingRecicloCollectionRequestsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [statusArray, setStatusArray] = useState<CollectionStatus[]>([
    CollectionStatus.OPENED,
  ] as CollectionStatus[]);
  const [globalFilter, setGLobalFilterState] = useState<string>("");
  const [selectedCollectionRequest, setSelectedCollectionRequest] =
    useState<CollectionRequest | null>(null);

  const [
    fetchQuery,
    {
      data: {
        findAllCollectionRequestsByUserIdAndIsInStatusArray:
          collectionRequests = [] as CollectionRequest[],
      } = {},
      loading,
    },
  ] = useLazyQuery(
    FIND_ALL_COLLECTION_REQUESTS_BY_USER_ID_AND_IS_IN_STATUS_ARRAY,
    { variables: { id: (loggedUser as User)?._id, statusArray } }
  );

  const setGlobalFilter = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setGLobalFilterState(value),
    []
  );

  const setStatusArrayValuesToCompletedOrCanceledThenFetchQuery =
    useCallback(async () => {
      setStatusArray([CollectionStatus.CANCELED, CollectionStatus.COMPLETED]);
    }, []);

  const setStatusArrayValuesToOpenedThenFetchQuery = useCallback(async () => {
    setStatusArray([CollectionStatus.OPENED]);
  }, []);

  const setStatusArrayValuesToInProgressThenFetchQuery =
    useCallback(async () => {
      setStatusArray([
        CollectionStatus.ACCEPTED,
        CollectionStatus.NOT_STARTED,
        CollectionStatus.PAUSED,
      ]);
    }, []);

  const filteredCollectionRequests = useMemo(() => {
    const matchString = globalFilter.split(" ").join("|");

    return collectionRequests.filter(
      (item: CollectionRequest) =>
        new RegExp(matchString, "ig").test(item?.location?.address?.city!) ||
        new RegExp(matchString, "ig").test(item?.location?.address?.country!) ||
        new RegExp(matchString, "ig").test(
          item?.location?.address?.district!
        ) ||
        new RegExp(matchString, "ig").test(item?.location?.address?.number!) ||
        new RegExp(matchString, "ig").test(item?.location?.placename!) ||
        new RegExp(matchString, "ig").test(item?.location?.address?.state!) ||
        new RegExp(matchString, "ig").test(item?.location?.address?.street!)
    );
  }, [collectionRequests, globalFilter]);

  const cancel = useCallback(() => setSelectedCollectionRequest(null), []);

  useEffect(() => {
    fetchQuery().then();
  }, [fetchQuery, statusArray]);

  return {
    cancel,
    filteredCollectionRequests,
    globalFilter,
    loading,
    selectedCollectionRequest,
    setGlobalFilter,
    setSelectedCollectionRequest,
    setStatusArrayValuesToCompletedOrCanceledThenFetchQuery,
    setStatusArrayValuesToOpenedThenFetchQuery,
    setStatusArrayValuesToInProgressThenFetchQuery,
  };
};

export { useListingRecicloCollectionRequestsProps };
