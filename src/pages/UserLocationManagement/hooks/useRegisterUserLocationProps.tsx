import { useCallback, useContext, useEffect, useMemo } from "react";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import {
  CREATE_USER_LOCATION,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
} from "data";
import { AvailableDayAndTime } from "types";
import { isSomeItemOfArrayNullOrBlank } from "utils";
import { useUserLocationLocalState } from "./useUserLocationLocalState";

const useRegisterUserLocationProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);
  const toast = useToast();

  const {
    availableDaysAndTimes,
    cep,
    city,
    complement,
    country,
    district,
    number,
    setCep,
    setCity,
    setComplement,
    setCountry,
    setDistrict,
    setNumber,
    setPlacename,
    placename,
    state,
    setState,
    setStreet,
    weekDaysOptions,
    weekDayTimesOptions,
    street,
    comments,
    setComments,
  } = useUserLocationLocalState();

  const [
    fetchMutation,
    { data: { createUserLocation: wasUserLocationCreated = null } = {}, error },
  ] = useMutation(CREATE_USER_LOCATION, {
    variables: {
      createUserLocationInput: {
        address: {
          cep: cep.trim(),
          city: city.trim(),
          country: country.trim(),
          complement: complement.trim(),
          district: district.trim(),
          comments: comments.trim(),
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
        placename,
        userId: loggedUser?._id,
      },
    },
    refetchQueries: [FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID],
  });

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
        ...availableDaysAndTimes,
      ]),
    [
      availableDaysAndTimes,
      cep,
      city,
      comments,
      complement,
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

    await fetchMutation();
  }, [fetchMutation, isFieldsInvalid, toast]);

  useEffect(() => {
    if (error)
      toast({
        title: "Não foi possível concluir o cadastro!",
        description: "Verifique os campos e tente novamente.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
  }, [error, toast, wasUserLocationCreated]);

  useEffect(() => {
    if (wasUserLocationCreated)
      toast({
        title: "Cadastro concluído!",
        description: "O local será listado na lista de locais.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
  }, [toast, wasUserLocationCreated]);

  return {
    cep,
    city,
    comments,
    complement,
    country,
    district,
    handleRegister,
    number,
    street,
    state,
    placename,
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
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useRegisterUserLocationProps };
