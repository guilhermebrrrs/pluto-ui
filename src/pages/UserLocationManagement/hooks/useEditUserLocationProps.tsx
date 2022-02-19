import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_USER_LOCATION_BY_ID,
  FIND_ALL_USER_LOCATION_BY_USER_ID,
  UPDATE_USER_LOCATION,
} from "data";
import { UpdateUserLocationInput, UserLocation } from "types";
import { useUserLocationLocalState } from "./useUserLocationLocalState";
import { useToast } from "@chakra-ui/react";

interface UseEditUserLocationHookProps {
  cancel: () => void;
  userLocation: UserLocation;
}

const useEditUserLocationProps = ({
  cancel,
  userLocation,
}: UseEditUserLocationHookProps) => {
  const toast = useToast();

  const {
    address,
    availableDaysAndTimes,
    cep,
    city,
    comments,
    complement,
    country,
    district,
    placename,
    number,
    resetAllStates,
    setCep,
    setCity,
    setComments,
    setComplement,
    setDistrict,
    setCountry,
    setPlacename,
    setNumber,
    setState,
    setStreet,
    state,
    street,
    weekDaysOptions,
    weekDayTimesOptions,
  } = useUserLocationLocalState(userLocation);

  const [
    isRemoverUserLocationModalOpened,
    setIsRemoverUserLocationModalOpened,
  ] = useState<boolean>(false);

  const openRemoverUserLocationModal = useCallback(
    () => setIsRemoverUserLocationModalOpened(true),
    []
  );

  const closeRemoverUserLocationModal = useCallback(
    () => setIsRemoverUserLocationModalOpened(false),
    []
  );

  const [
    executeSaveMutation,
    {
      data: { updateUserLocation: wasUserLocationUpdated = null } = {},
      error: errorOnSave,
      reset: resetSaveMutation,
    },
  ] = useMutation(UPDATE_USER_LOCATION, {
    variables: {
      updateUserLocationInput: {
        _id: userLocation._id,
        address,
        comments,
        availableDaysAndTimes: availableDaysAndTimes.map((item) => ({
          ...item,
          maxTime: {
            hour: Number(item.maxTime.hour),
            minutes: Number(item.maxTime.minutes),
          },
          minTime: {
            hour: Number(item.minTime.hour),
            minutes: Number(item.minTime.minutes),
          },
        })),
        placename,
      } as UpdateUserLocationInput,
    },
    refetchQueries: [FIND_ALL_USER_LOCATION_BY_USER_ID],
  });

  const [
    executeDelete,
    {
      data: { deleteUserLocationById: wasUserLocationDeleted = null } = {},
      error: errorOnDelete,
      reset: resetDeleteMutation,
    },
  ] = useMutation(DELETE_USER_LOCATION_BY_ID, {
    variables: { id: userLocation._id },
    refetchQueries: [FIND_ALL_USER_LOCATION_BY_USER_ID],
  });

  const handleUpdate = useCallback(async () => {
    await executeSaveMutation();
    resetSaveMutation();
  }, [executeSaveMutation, resetSaveMutation]);

  const handleDelete = useCallback(async () => {
    await executeDelete();
    resetDeleteMutation();
  }, [executeDelete, resetDeleteMutation]);

  useEffect(() => {
    if (wasUserLocationUpdated) {
      cancel();
      toast({
        title: "Dados salvos!",
        description: "Dados salvos com sucesso!.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [cancel, toast, wasUserLocationUpdated]);

  useEffect(() => {
    if (wasUserLocationDeleted) {
      cancel();
      toast({
        title: "Local removido!",
        description: "Local removido com sucesso!.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [cancel, toast, wasUserLocationDeleted]);

  useEffect(() => {
    if (errorOnDelete) {
      toast({
        title: "Erro!",
        description: "Não foi possível remover este local!",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [errorOnDelete, toast]);

  useEffect(() => {
    if (errorOnSave) {
      toast({
        title: "erro!",
        description: "Não foi possível salvar as modificações!",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [errorOnSave, toast]);

  useEffect(() => resetAllStates(userLocation), [resetAllStates, userLocation]);

  return {
    cep,
    city,
    closeRemoverUserLocationModal,
    comments,
    complement,
    country,
    district,
    handleDelete,
    handleUpdate,
    isRemoverUserLocationModalOpened,
    number,
    openRemoverUserLocationModal,
    placename,
    setCep,
    setCity,
    setComplement,
    setComments,
    setCountry,
    setDistrict,
    setPlacename,
    setState,
    setStreet,
    setNumber,
    state,
    street,
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useEditUserLocationProps };
