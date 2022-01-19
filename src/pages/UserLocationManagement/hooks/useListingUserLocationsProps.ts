import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_USER_LOCATION_BY_USER_ID } from "data";
import { User, UserLocation } from "types";

const useListingUserLocationsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [selectedUserLocation, setSelectedUserLocation] =
    useState<UserLocation | null>(null);

  const userId = useMemo(() => (loggedUser as User)?._id, [loggedUser]);

  const [
    fetchQuery,
    {
      data: {
        findAllUserLocationsByUserId: userLocations = [] as UserLocation[],
      } = {},
    },
  ] = useLazyQuery(FIND_ALL_USER_LOCATION_BY_USER_ID, {
    variables: { id: userId },
  });

  const cancelEdit = useCallback(() => setSelectedUserLocation(null), []);

  useEffect(() => {
    userId && fetchQuery();
  }, [fetchQuery, userId]);

  return {
    cancelEdit,
    selectedUserLocation,
    setSelectedUserLocation,
    userLocations,
  };
};

export { useListingUserLocationsProps };
