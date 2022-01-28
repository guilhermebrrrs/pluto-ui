import { ChangeEvent, useCallback, useMemo, useState } from "react";
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
    collectionRequestMaterial || ({} as CollectionRequestMaterial)
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
            value={availableMaterialType}
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
    }

    editCollectionRequestMaterial(selectedCollectionRequestMaterial!);
    close();
  }, [
    addCollectionRequestMaterial,
    collectionRequestMaterial,
    editCollectionRequestMaterial,
    close,
    selectedCollectionRequestMaterial,
  ]);

  const setAmount = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        amount: Number(value),
      })),
    []
  );

  const setDescription = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        description: value,
      })),
    []
  );

  const setMaterialType = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      setSelectedCollectionRequestMaterial((previousState) => ({
        ...previousState,
        materialType: value as MaterialType,
      })),
    []
  );

  return {
    amount: collectionRequestMaterial?.amount,
    description: collectionRequestMaterial?.description,
    handleCleanStateAndCloseModal,
    handleRemoveAndCloseModal,
    handleSaveOrEditCollectionRequestMaterial,
    materialType: collectionRequestMaterial?.materialType,
    materialTypeOptions,
    setAmount,
    setDescription,
    setMaterialType,
  };
};

export { useCollectionRequestMaterialModalProps };
