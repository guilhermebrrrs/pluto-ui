import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { CollectionRequestMaterial, MaterialType } from "types";
import { getMaterialTypeLabel, sortByString } from "utils";

interface UseCollectionRequestMaterialModalHookProps {
  addCollectionRequestMaterial: (
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
  availableMaterialTypes: MaterialType[];
  cleanSelectedCollectionRequestMaterialState: () => void;
  close: () => void;
  collectionRequestMaterial?: CollectionRequestMaterial | null | undefined;
  editCollectionRequestMaterial: (
    oldCollectionRequestMaterial: CollectionRequestMaterial,
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
  removeCollectionRequestMaterial: (
    collectionRequestMaterial: CollectionRequestMaterial
  ) => void;
}

const useCollectionRequestMaterialModalProps = ({
  addCollectionRequestMaterial,
  availableMaterialTypes,
  cleanSelectedCollectionRequestMaterialState,
  close,
  collectionRequestMaterial,
  editCollectionRequestMaterial,
  removeCollectionRequestMaterial,
}: UseCollectionRequestMaterialModalHookProps) => {
  const [
    selectedCollectionRequestMaterial,
    setSelectedCollectionRequestMaterial,
  ] = useState<CollectionRequestMaterial | null>(
    !!collectionRequestMaterial
      ? { ...collectionRequestMaterial }
      : ({} as CollectionRequestMaterial)
  );

  const materialTypeOptions = useMemo(
    () =>
      availableMaterialTypes
        .sort((material_a, material_b) =>
          sortByString(
            (getMaterialTypeLabel(material_a) as string) || "",
            (getMaterialTypeLabel(material_b) as string) || ""
          )
        )
        .map((availableMaterialType) => (
          <option
            key={availableMaterialType.toString()}
            value={JSON.stringify(availableMaterialType)}
          >
            {getMaterialTypeLabel(availableMaterialType)}
          </option>
        )),
    [availableMaterialTypes]
  );

  const handleCleanStateAndCloseModal = useCallback(() => {
    if (!!collectionRequestMaterial) {
      cleanSelectedCollectionRequestMaterialState();
    }
    close();
  }, [
    cleanSelectedCollectionRequestMaterialState,
    collectionRequestMaterial,
    close,
  ]);

  const handleRemoveAndCloseModal = useCallback(() => {
    removeCollectionRequestMaterial(collectionRequestMaterial!);
    cleanSelectedCollectionRequestMaterialState();
    close();
  }, [
    cleanSelectedCollectionRequestMaterialState,
    collectionRequestMaterial,
    close,
    removeCollectionRequestMaterial,
  ]);

  const handleSaveOrEditCollectionRequestMaterial = useCallback(() => {
    if (!collectionRequestMaterial) {
      addCollectionRequestMaterial(selectedCollectionRequestMaterial!);
      close();
    } else {
      editCollectionRequestMaterial(
        collectionRequestMaterial,
        selectedCollectionRequestMaterial!
      );
      close();
    }

    setSelectedCollectionRequestMaterial(null);
  }, [
    addCollectionRequestMaterial,
    collectionRequestMaterial,
    editCollectionRequestMaterial,
    close,
    selectedCollectionRequestMaterial,
  ]);

  const amount = useMemo(
    () => selectedCollectionRequestMaterial?.amount,
    [selectedCollectionRequestMaterial]
  );

  const setAmount = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        amount: Number(value),
      })),
    []
  );

  const description = useMemo(
    () => selectedCollectionRequestMaterial?.description,
    [selectedCollectionRequestMaterial]
  );

  const setDescription = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        description: value,
      })),
    []
  );

  const materialType = useMemo(
    () => JSON.stringify(selectedCollectionRequestMaterial?.materialType),
    [selectedCollectionRequestMaterial]
  );

  const setMaterialType = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        materialType: JSON.parse(value),
      })),
    []
  );

  useEffect(
    () => setSelectedCollectionRequestMaterial(collectionRequestMaterial!),
    [collectionRequestMaterial]
  );

  return {
    amount,
    description,
    handleCleanStateAndCloseModal,
    handleRemoveAndCloseModal,
    handleSaveOrEditCollectionRequestMaterial,
    materialType,
    materialTypeOptions,
    setAmount,
    setDescription,
    setMaterialType,
  };
};

export { useCollectionRequestMaterialModalProps };
