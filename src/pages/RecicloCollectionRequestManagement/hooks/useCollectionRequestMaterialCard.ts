import { Dispatch, SetStateAction, useCallback } from "react";
import { CollectionRequestMaterial } from "types";

interface useCollectionRequestMaterialCardHookProps {
  collectionRequestMaterial: CollectionRequestMaterial;
  setSelectedCollectionRequestMaterial: Dispatch<
    SetStateAction<CollectionRequestMaterial | null>
  >;
  openCollectionRequestMaterialModal: () => void;
}

const useCollectionRequestMaterialCard = ({
  collectionRequestMaterial,
  openCollectionRequestMaterialModal,
  setSelectedCollectionRequestMaterial,
}: useCollectionRequestMaterialCardHookProps) => {
  const setCollectionRequestMaterialThenOpenCollectionRequestMaterialModal =
    useCallback(() => {
      setSelectedCollectionRequestMaterial(collectionRequestMaterial);
      openCollectionRequestMaterialModal();
    }, [
      collectionRequestMaterial,
      openCollectionRequestMaterialModal,
      setSelectedCollectionRequestMaterial,
    ]);

  return { setCollectionRequestMaterialThenOpenCollectionRequestMaterialModal };
};

export { useCollectionRequestMaterialCard };
