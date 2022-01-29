import { useLazyQuery, useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import {
  CREATE_COLLECTION_REQUEST,
  FIND_ALL_USER_LOCATION_BY_USER_ID,
} from "data";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CollectionRequest,
  CollectionRequestMaterial,
  MaterialType,
  User,
  UserLocation,
} from "types";

const useRegisterRecicloCollectionRequestsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);
  const toast = useToast();

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

      setSelectedCollectionRequestMaterial(null);
    },
    [collectionRequest]
  );

  const availableMaterialTypes = useMemo(() => {
    let materialTypes = [...(Object.values(MaterialType) as MaterialType[])];

    (collectionRequest?.collectionRequestMaterials || [])?.map(
      ({ materialType }: CollectionRequestMaterial) =>
        (materialTypes = [
          ...materialTypes.filter((item) => item !== materialType),
        ])
    );

    !!selectedCollectionRequestMaterial?.materialType &&
      materialTypes.push(selectedCollectionRequestMaterial?.materialType!);

    return materialTypes;
  }, [collectionRequest, selectedCollectionRequestMaterial]);

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

  const details = useMemo(
    () => collectionRequest?.details,
    [collectionRequest]
  );

  const editCollectionRequestMaterial = useCallback(
    (
      oldCollectionRequestMaterial: CollectionRequestMaterial,
      collectionRequestMaterial: CollectionRequestMaterial
    ) => {
      let arr = !!collectionRequest?.collectionRequestMaterials
        ? [...collectionRequest?.collectionRequestMaterials]
        : ([] as CollectionRequestMaterial[]);

      if (arr && arr?.length > 0) {
        arr = [...arr].filter(
          (item) =>
            item.materialType?.toString() !==
            oldCollectionRequestMaterial.materialType?.toString()
        );

        arr?.push(collectionRequestMaterial);

        setCollectionRequestState((previousState) => ({
          ...previousState,
          collectionRequestMaterials: arr,
        }));

        setSelectedCollectionRequestMaterial(null);
      }
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

  const setDetails = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
      setCollectionRequestState((previousState) => ({
        ...previousState,
        details: value,
      })),
    []
  );

  const setUserLocation = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      value &&
      setCollectionRequestState((previousState) => ({
        ...previousState,
        location: JSON.parse(value),
      })),
    []
  );

  const userLocation = useMemo(
    () =>
      !!collectionRequest?.location
        ? JSON.stringify(collectionRequest?.location)
        : undefined,
    [collectionRequest]
  );

  const userLocationsOptions = useMemo(
    () =>
      [...userLocations].map((item: UserLocation) => (
        <option
          key={item._id}
          value={JSON.stringify(item)}
        >{`(${item.placename}) ${item.address?.street}, ${item.address?.number} - ${item.address?.district} - ${item.address?.city}, ${item.address?.state}`}</option>
      )),
    [userLocations]
  );

  const [
    fetchMutation,
    {
      data: {
        createCollectionRequest: wasSaved = undefined as boolean | undefined,
      } = {},
      error,
    },
  ] = useMutation(CREATE_COLLECTION_REQUEST, {
    variables: {
      createCollectionRequestInput: {
        collectionRequestMaterials:
          collectionRequest?.collectionRequestMaterials,
        details,
        locationId: collectionRequest?.location?._id,
        userId: (loggedUser as User)?._id,
      },
    },
  });

  const handleRegisterCollectionRequest = useCallback(
    () => fetchMutation(),
    [fetchMutation]
  );

  useEffect(() => {
    if (wasSaved === true) {
      toast({
        title: "Solicitação de coleta registrada!",
        description: "Solicitação de coleta registrada com sucesso!.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });

      setCollectionRequestState({
        collectionRequestMaterials: [] as CollectionRequestMaterial[],
      } as CollectionRequest);
    }
  }, [toast, wasSaved]);

  useEffect(() => {
    if (error || wasSaved === false) {
      toast({
        title: "Erro!",
        description: "Não foi possível salvar a solicitação de coleta.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [error, toast, wasSaved]);

  useEffect(() => {
    (loggedUser as User)?._id && fetchQuery();
  }, [fetchQuery, loggedUser]);

  return {
    addCollectionRequestMaterial,
    availableMaterialTypes,
    cleanSelectedCollectionRequestMaterialState,
    closeCollectionRequestMaterialModal,
    collectionRequestMaterials,
    details,
    editCollectionRequestMaterial,
    handleRegisterCollectionRequest,
    isCollectionRequestMaterialModalOpen,
    removeCollectionRequestMaterial,
    openCollectionRequestMaterialModal,
    selectedCollectionRequestMaterial,
    setDetails,
    setUserLocation,
    setSelectedCollectionRequestMaterial,
    userLocation,
    userLocationsOptions,
  };
};

export { useRegisterRecicloCollectionRequestsProps };
