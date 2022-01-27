import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_USER_LOCATION_BY_USER_ID } from "data";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  CollectionRequest,
  CollectionRequestMaterial,
  User,
  UserLocation,
} from "types";

const useRegisterRecicloCollectionRequestsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [
    isCollectionRequestMaterialModalOpen,
    setIsCollectionRequestMaterialModalOpen,
  ] = useState<boolean>(false);

  const [collectionRequest, setCollectionRequestState] =
    useState<CollectionRequest | null>({
      collectionRequestMaterials: [] as CollectionRequestMaterial[],
    } as CollectionRequest);

  const [
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
  ] = useState<CollectionRequestMaterial | null>(null);

  const addCollectionRequestMaterial = useCallback(
    (collectionRequestMaterial: CollectionRequestMaterial) => {
      const arr = collectionRequest?.collectionRequestMaterials
        ? [...collectionRequest?.collectionRequestMaterials]
        : ([] as CollectionRequestMaterial[]);

      arr.push(collectionRequestMaterial);

      setCollectionRequestState((previousState) => ({
        ...previousState,
        collectionRequestMaterials: arr,
      }));
    },
    [collectionRequest]
  );

  const removeCollectionRequestMaterial = useCallback(
    (collectionRequestMaterial: CollectionRequestMaterial) => {
      const arr = collectionRequest?.collectionRequestMaterials && [
        ...collectionRequest?.collectionRequestMaterials,
      ];

      if (arr && arr?.length > 0) {
        arr.filter(
          (item) => item.materialType !== collectionRequestMaterial.materialType
        );

        setCollectionRequestState((previousState) => ({
          ...previousState,
          collectionRequestMaterials: arr,
        }));
      }
    },
    [collectionRequest?.collectionRequestMaterials]
  );

  const [
    fetchQuery,
    {
      data: {
        findAllUserLocationsByUserId: userLocations = [] as UserLocation[],
      } = {},
    },
  ] = useLazyQuery(FIND_ALL_USER_LOCATION_BY_USER_ID, {
    variables: { id: (loggedUser as User)?._id },
  });

  useEffect(() => {
    (loggedUser as User)?._id && fetchQuery();
  }, [fetchQuery, loggedUser]);

  const userLocationsOptions = useMemo(
    () =>
      [...userLocations].map((item) => (
        <option
          value={item._id}
        >{`(${item.placename}) ${item.address?.street}, ${item.address?.number} - ${item.address?.district} - ${item.address?.city}, ${item.address?.state}`}</option>
      )),
    [userLocations]
  );

  const openCollectionRequestMaterialModal = useCallback(
    () => setIsCollectionRequestMaterialModalOpen(true),
    []
  );

  const closeCollectionRequestMaterialModal = useCallback(
    () => setIsCollectionRequestMaterialModalOpen(false),
    []
  );

  return {
    addCollectionRequestMaterial,
    closeCollectionRequestMaterialModal,
    collectionRequestMaterials: collectionRequest?.collectionRequestMaterials,
    isCollectionRequestMaterialModalOpen,
    removeCollectionRequestMaterial,
    openCollectionRequestMaterialModal,
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
    userLocationsOptions,
  };
};

export { useRegisterRecicloCollectionRequestsProps };
