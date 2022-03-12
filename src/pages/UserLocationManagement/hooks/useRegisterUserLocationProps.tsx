import { useUserLocationLocalState } from "./useUserLocationLocalState";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import {
  CREATE_USER_LOCATION,
  FIND_ALL_USER_LOCATION_BY_USER_ID,
  FIND_GEOCODING_LOCATION,
} from "data";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AvailableDayAndTime, CreateUserLocationInput } from "types";
import { isSomeItemOfArrayNullOrBlank, removeAccentuation } from "utils";

const useRegisterUserLocationProps = () => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const { loggedUser } = useContext(AppAuthenticationContext);
  const toast = useToast();
  const [isFocused, setIsFocused] = useState<boolean | null>(null);
  const [showAddressSuggestion, setShowAddressSuggestion] =
    useState<boolean>(false);

  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  const {
    availableDaysAndTimes,
    cep,
    city,
    comments,
    coordinates,
    complement,
    country,
    district,
    setLocationDataByAddressSuggestion,
    number,
    placename,
    resetAllStates,
    setCep,
    setCity,
    setComplement,
    setCountry,
    setDistrict,
    setNumber,
    setPlacename,
    setState,
    setStreet,
    state,
    street,
    weekDaysOptions,
    weekDayTimesOptions,
    setComments,
  } = useUserLocationLocalState();

  const [
    executeMutation,
    {
      data: { createUserLocation: wasUserLocationCreated = null } = {},
      error,
      reset,
    },
  ] = useMutation(CREATE_USER_LOCATION, {
    variables: {
      createUserLocationInput: {
        address: {
          cep: cep.trim(),
          city: city.trim(),
          country: country.trim(),
          complement: complement.trim(),
          district: district.trim(),
          number: number.trim(),
          street: street.trim(),
          state: state.trim(),
        },
        availableDaysAndTimes: availableDaysAndTimes.map(
          (availableDayAndTime) =>
            ({
              ...availableDayAndTime,
              maxTime: {
                hour: Number(availableDayAndTime.maxTime.hour),
                minutes: Number(availableDayAndTime.maxTime.minutes),
              },
              minTime: {
                hour: Number(availableDayAndTime.minTime.hour),
                minutes: Number(availableDayAndTime.minTime.minutes),
              },
            } as AvailableDayAndTime)
        ),
        comments: comments.trim(),
        placename,
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        userId: loggedUser?._id,
      } as CreateUserLocationInput,
    },
    refetchQueries: [FIND_ALL_USER_LOCATION_BY_USER_ID],
  });

  const [fetchQuery, { data = {} }] = useLazyQuery(FIND_GEOCODING_LOCATION, {
    variables: {
      typedLocation: removeAccentuation(street),
    },
  });

  const geocodingLocations = useMemo(
    () => data.findGeocodingLocation?.items,
    [data]
  );

  const isFieldsInvalid = useMemo(
    () =>
      isSomeItemOfArrayNullOrBlank([
        cep,
        city,
        comments,
        complement,
        country,
        district,
        number,
        placename,
        street,
        state,
        coordinates?.latitude,
        coordinates?.longitude,
        ...availableDaysAndTimes,
      ]),
    [
      availableDaysAndTimes,
      cep,
      city,
      comments,
      complement,
      coordinates,
      country,
      district,
      number,
      placename,
      state,
      street,
    ]
  );

  const handleRegister = useCallback(async () => {
    if (isFieldsInvalid) {
      toast({
        title: "Não foi possível concluir o cadastro!",
        description: "Verifique os campos e tente novamente.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      return;
    }

    await executeMutation();
    reset();
  }, [executeMutation, isFieldsInvalid, reset, toast]);

  const closeAddressSuggestion = useCallback(
    () => setShowAddressSuggestion(false),
    []
  );

  const openAddressSuggestion = useCallback(() => {
    if (isFocused && (street !== "" || street !== null))
      setShowAddressSuggestion(true);
  }, [isFocused, street]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Não foi possível concluir o cadastro!",
        description: "Verifique os campos e tente novamente.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [error, toast]);

  useEffect(() => {
    if (wasUserLocationCreated) {
      toast({
        title: "Cadastro concluído!",
        description: "O local será listado na lista de locais.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
      resetAllStates();
    }
  }, [resetAllStates, toast, wasUserLocationCreated]);

  useEffect(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(async () => await fetchQuery(), 1000);
  }, [fetchQuery, street]);

  return {
    cep,
    city,
    closeAddressSuggestion,
    comments,
    complement,
    country,
    district,
    geocodingLocations,
    handleRegister,
    isFocused,
    setLocationDataByAddressSuggestion,
    number,
    onBlur,
    onFocus,
    openAddressSuggestion,
    placename,
    street,
    state,
    setCep,
    setCity,
    setComments,
    setComplement,
    setCountry,
    setDistrict,
    setNumber,
    setStreet,
    setState,
    setPlacename,
    showAddressSuggestion,
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useRegisterUserLocationProps };
