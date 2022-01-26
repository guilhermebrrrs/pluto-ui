import { useLazyQuery } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { FIND_ALL_USER_LOCATION_BY_USER_ID } from "data";
import { useContext, useEffect, useMemo } from "react";
import { User, UserLocation } from "types";

const useRegisterRecicloCollectionRequestsProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);

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
        >{`${item.placename} - ${item.address?.street}, ${item.address?.number} - ${item.address?.district} - ${item.address?.city}, ${item.address?.state}`}</option>
      )),
    [userLocations]
  );

  return { userLocationsOptions };
};

export { useRegisterRecicloCollectionRequestsProps };
