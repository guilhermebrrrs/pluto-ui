import { CollectionRequest } from "types";
import { Dispatch, SetStateAction, useCallback } from "react";

interface useCollectionRequestCardHooksProps {
  collectionRequest: CollectionRequest;
  setSelectedCollectionRequest: Dispatch<
    SetStateAction<CollectionRequest | null>
  >;
}

const useCollectionRequestCardProps = ({
  collectionRequest,
  setSelectedCollectionRequest,
}: useCollectionRequestCardHooksProps) => {
  const setCollectionRequest = useCallback(
    () => setSelectedCollectionRequest(collectionRequest),
    [collectionRequest, setSelectedCollectionRequest]
  );

  return { setCollectionRequest };
};

export { useCollectionRequestCardProps };
