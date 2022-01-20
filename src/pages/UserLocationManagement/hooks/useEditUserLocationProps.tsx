import { useCallback, useState } from "react";
import { UserLocation } from "types";
import { useUserLocationLocalState } from "./useUserLocationLocalState";

interface UseEditUserLocationHookProps {
  userLocation: UserLocation;
}

const useEditUserLocationProps = ({
  userLocation,
}: UseEditUserLocationHookProps) => {
  const {
    availableDaysAndTimes,
    cep,
    city,
    complement,
    country,
    comments,
    district,
    placename,
    number,
    state,
    setCep,
    setCity,
    setComplement,
    setComments,
    setPlacename,
    setState,
    setStreet,
    setDistrict,
    setNumber,
    street,
    setCountry,
    weekDaysOptions,
    weekDayTimesOptions,
  } = useUserLocationLocalState(userLocation.availableDaysAndTimes);

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

  return {
    availableDaysAndTimes,
    cep,
    city,
    closeRemoverUserLocationModal,
    complement,
    country,
    comments,
    district,
    isRemoverUserLocationModalOpened,
    number,
    openRemoverUserLocationModal,
    placename,
    state,
    setCep,
    setCity,
    setComplement,
    setComments,
    setPlacename,
    setState,
    setStreet,
    setDistrict,
    setNumber,
    street,
    setCountry,
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useEditUserLocationProps };
