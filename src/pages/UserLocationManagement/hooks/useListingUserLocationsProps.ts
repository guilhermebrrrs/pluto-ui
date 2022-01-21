import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_USER_LOCATION_BY_USER_ID } from "data";
import { User, UserLocation } from "types";
import { sortByString } from "../../../utils";

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
      loading,
    },
  ] = useLazyQuery(FIND_ALL_USER_LOCATION_BY_USER_ID, {
    variables: { id: userId },
  });

  const cancelEdit = useCallback(() => setSelectedUserLocation(null), []);

  const sortedUserLocations = useMemo(
    () =>
      [...userLocations].sort(
        (
          { placename: placename_a }: UserLocation,
          { placename: placename_b }: UserLocation
        ) => sortByString(placename_a as string, placename_b as string)
      ),
    [userLocations]
  );

  useEffect(() => {
    userId && fetchQuery();
  }, [fetchQuery, userId]);

  return {
    cancelEdit,
    loading,
    selectedUserLocation,
    setSelectedUserLocation,
    sortedUserLocations,
  };
};

export { useListingUserLocationsProps };
