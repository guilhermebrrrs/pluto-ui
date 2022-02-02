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
import {
  Address,
  CollectionRequest,
  CollectionStatus,
  User,
  UserLocation,
} from "types";

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
      ({
        location: {
          address: {
            city,
            country,
            district,
            number,
            state,
            street,
          } = {} as Address,
          placename,
        } = {} as UserLocation,
      }: CollectionRequest) =>
        new RegExp(matchString, "ig").test(city!) ||
        new RegExp(matchString, "ig").test(country!) ||
        new RegExp(matchString, "ig").test(district!) ||
        new RegExp(matchString, "ig").test(number!) ||
        new RegExp(matchString, "ig").test(placename!) ||
        new RegExp(matchString, "ig").test(state!) ||
        new RegExp(matchString, "ig").test(street!)
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
