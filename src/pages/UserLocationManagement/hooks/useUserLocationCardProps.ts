import { Dispatch, SetStateAction, useCallback } from "react";
import { UserLocation } from "types";

interface useEditUserLocationHookProps {
  selectedUserLocation: UserLocation;
  setSelectedUserLocation: Dispatch<SetStateAction<UserLocation | null>>;
}

const useUserLocationCardProps = ({
  selectedUserLocation,
  setSelectedUserLocation,
}: useEditUserLocationHookProps) => {
  const setUserLocation = useCallback(
    () => setSelectedUserLocation(selectedUserLocation),
    [selectedUserLocation, setSelectedUserLocation]
  );

  return { setUserLocation };
};

export { useUserLocationCardProps };
