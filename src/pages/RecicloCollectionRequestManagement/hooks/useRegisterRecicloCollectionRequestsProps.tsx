import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_USER_LOCATION_BY_USER_ID } from "data";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  CollectionRequest,
  CollectionRequestMaterial,
  MaterialType,
  User,
  UserLocation,
} from "types";

const useRegisterRecicloCollectionRequestsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [collectionRequest, setCollectionRequestState] =
    useState<CollectionRequest | null>({
      collectionRequestMaterials: [] as CollectionRequestMaterial[],
    } as CollectionRequest);

  const [
    isCollectionRequestMaterialModalOpen,
    setIsCollectionRequestMaterialModalOpen,
  ] = useState<boolean>(false);

  const [
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
  ] = useState<CollectionRequestMaterial | null>(null);

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

  const availableMaterialTypes = useMemo(() => {
    const materialTypes = Object.values(MaterialType) as MaterialType[];

    (collectionRequest?.collectionRequestMaterials || [])?.map(
      ({ materialType }: CollectionRequestMaterial) =>
        materialType && materialTypes.filter((item) => item !== materialType)
    );

    return materialTypes;
  }, [collectionRequest?.collectionRequestMaterials]);

  const cleanSelectedCollectionRequestMaterialState = useCallback(
    () => setSelectedCollectionRequestMaterial(null),
    []
  );

  const closeCollectionRequestMaterialModal = useCallback(
    () => setIsCollectionRequestMaterialModalOpen(false),
    []
  );

  const collectionRequestMaterials = useMemo(
    () => collectionRequest?.collectionRequestMaterials,
    [collectionRequest]
  );

  const editCollectionRequestMaterial = useCallback(
    (collectionRequestMaterial: CollectionRequestMaterial) => {
      const arr = collectionRequest?.collectionRequestMaterials?.filter(
        (item) => item.materialType !== collectionRequestMaterial.materialType
      );

      arr?.push(collectionRequestMaterial);

      setCollectionRequestState((previousState) => ({
        ...previousState,
        collectionRequestMaterials: arr,
      }));
    },
    [collectionRequest]
  );

  const removeCollectionRequestMaterial = useCallback(
    (collectionRequestMaterial: CollectionRequestMaterial) => {
      let arr = !!collectionRequest?.collectionRequestMaterials
        ? [...collectionRequest?.collectionRequestMaterials]
        : ([] as CollectionRequestMaterial[]);

      if (arr && arr?.length > 0) {
        arr = [...arr].filter(
          (item) =>
            item.materialType?.toString() !==
            collectionRequestMaterial.materialType?.toString()
        );

        setCollectionRequestState((previousState) => ({
          ...previousState,
          collectionRequestMaterials: arr,
        }));
      }
    },
    [collectionRequest]
  );

  const openCollectionRequestMaterialModal = useCallback(
    () => setIsCollectionRequestMaterialModalOpen(true),
    []
  );

  const userLocationsOptions = useMemo(
    () =>
      [...userLocations].map((item) => (
        <option
          key={item._id}
          value={item._id}
        >{`(${item.placename}) ${item.address?.street}, ${item.address?.number} - ${item.address?.district} - ${item.address?.city}, ${item.address?.state}`}</option>
      )),
    [userLocations]
  );

  useEffect(() => {
    (loggedUser as User)?._id && fetchQuery();
  }, [fetchQuery, loggedUser]);

  return {
    addCollectionRequestMaterial,
    availableMaterialTypes,
    cleanSelectedCollectionRequestMaterialState,
    closeCollectionRequestMaterialModal,
    collectionRequestMaterials,
    editCollectionRequestMaterial,
    isCollectionRequestMaterialModalOpen,
    removeCollectionRequestMaterial,
    openCollectionRequestMaterialModal,
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
    userLocationsOptions,
  };
};

export { useRegisterRecicloCollectionRequestsProps };
