import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@apollo/client";
import {
  Checkbox,
  Flex,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";
import {
  CREATE_USER_LOCATION,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
} from "data";
import { AvailableDayAndTime, AvailableTime, WeekDays } from "types";
import {
  definitions,
  getWeekDayLabel,
  isSomeItemOfArrayNullOrBlank,
} from "utils";

const useRegisterUserLocationProps = () => {
  const { loggedUser } = useContext(AppAuthenticationContext);
  const toast = useToast();

  const [cep, setCepState] = useState<string>("");
  const [city, setCityState] = useState<string>("");
  const [complement, setComplementState] = useState<string>("");
  const [country, setCountryState] = useState<string>("");
  const [district, setDistrictState] = useState<string>("");
  const [number, setNumberState] = useState<string>("");
  const [placename, setPlacenameState] = useState<string>("");
  const [state, setStateState] = useState<string>("");
  const [street, setStreetState] = useState<string>("");

  const setCep = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setCepState(value),
    []
  );

  const setCity = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setCityState(value),
    []
  );

  const setComplement = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setComplementState(value),
    []
  );

  const setCountry = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setCountryState(value),
    []
  );

  const setDistrict = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setDistrictState(value),
    []
  );

  const setNumber = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setNumberState(value),
    []
  );

  const setPlacename = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPlacenameState(value),
    []
  );

  const setState = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setStateState(value),
    []
  );

  const setStreet = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setStreetState(value),
    []
  );

  const [availableDaysAndTimes, setAvailableDaysAndTimesState] = useState<
    AvailableDayAndTime[]
  >([]);

  const setAvailableDays = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const arr =
        availableDaysAndTimes.filter(
          (availableDayAndTime) =>
            availableDayAndTime.weekDay === (value as WeekDays)
        ).length < 1
          ? [
              ...availableDaysAndTimes,
              {
                weekDay: value as WeekDays,
                maxTime: { hour: "18", minutes: "00" } as AvailableTime,
                minTime: { hour: "08", minutes: "00" } as AvailableTime,
              },
            ]
          : [...availableDaysAndTimes].filter(
              (availableDayAndTime) =>
                availableDayAndTime.weekDay !== (value as WeekDays)
            );

      setAvailableDaysAndTimesState(arr);
    },
    [availableDaysAndTimes]
  );

  const getPropertyFromAvailableDaysAndTimesArray = useCallback(
    (weekDay: WeekDays) =>
      availableDaysAndTimes.filter(
        (availableDayAndTime) => availableDayAndTime.weekDay === weekDay
      )[0],
    [availableDaysAndTimes]
  );

  const transformHourNumber = useCallback(
    (number: string | number) =>
      Number(number) <= 9
        ? `0${Number(number)}`
        : Number(number) > 23
        ? 23
        : Number(number),
    []
  );

  const transformMinutesNumber = useCallback(
    (number: string | number) =>
      Number(number) <= 9
        ? `0${Number(number)}`
        : Number(number) > 59
        ? 59
        : Number(number),
    []
  );

  const setAvailableMaxTimeHour = useCallback(
    (weekDay: WeekDays) =>
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const arr = [...availableDaysAndTimes];

        arr.map(
          (item) =>
            item.weekDay === (weekDay as WeekDays) &&
            (item.maxTime.hour =
              value !== "" ? transformHourNumber(Number(value)) : "")
        );

        setAvailableDaysAndTimesState(arr);
      },
    [availableDaysAndTimes, transformHourNumber]
  );

  const setAvailableMaxTimeMinutes = useCallback(
    (weekDay: WeekDays) =>
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const arr = [...availableDaysAndTimes];

        arr.map(
          (item) =>
            item.weekDay === (weekDay as WeekDays) &&
            (item.maxTime.minutes =
              value !== "" ? transformMinutesNumber(Number(value)) : "")
        );

        setAvailableDaysAndTimesState(arr);
      },
    [availableDaysAndTimes, transformMinutesNumber]
  );

  const setAvailableMinTimeHour = useCallback(
    (weekDay: WeekDays) =>
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const arr = [...availableDaysAndTimes];

        arr.map(
          (item) =>
            item.weekDay === (weekDay as WeekDays) &&
            (item.minTime.hour =
              value !== "" ? transformHourNumber(Number(value)) : "")
        );

        setAvailableDaysAndTimesState(arr);
      },
    [availableDaysAndTimes, transformHourNumber]
  );

  const setAvailableMinTimeMinutes = useCallback(
    (weekDay: WeekDays) =>
      ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const arr = [...availableDaysAndTimes];

        arr.map(
          (item) =>
            item.weekDay === (weekDay as WeekDays) &&
            (item.minTime.minutes =
              value !== "" ? transformMinutesNumber(Number(value)) : "")
        );

        setAvailableDaysAndTimesState(arr);
      },
    [availableDaysAndTimes, transformMinutesNumber]
  );

  const isDisabled = useCallback(
    (weekDay: WeekDays) =>
      availableDaysAndTimes.filter(
        (availableDayAndTime) => availableDayAndTime.weekDay === weekDay
      ).length < 1,
    [availableDaysAndTimes]
  );

  const weekDaysOptions = useMemo(
    () =>
      Object.values(WeekDays).map((weekDay: WeekDays) => (
        <Flex height="34px" key={weekDay}>
          <Checkbox
            borderColor="gray.500"
            colorScheme="green"
            key={weekDay}
            onChange={setAvailableDays}
            value={weekDay}
          >
            {getWeekDayLabel(weekDay)}
          </Checkbox>
        </Flex>
      )),
    [setAvailableDays]
  );

  const weekDayTimesOptions = useMemo(
    () =>
      Object.values(WeekDays).map((weekDay: WeekDays) => (
        <Flex
          alignItems={definitions.alignItems.center}
          gap={definitions.spacing.micro}
          key={weekDay}
          width="fit-content"
        >
          <Text>Das</Text>
          <InputGroup>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              disabled={isDisabled(weekDay)}
              focusBorderColor="gray.700"
              margin="1px"
              onChange={setAvailableMinTimeHour(weekDay)}
              size="sm"
              type="number"
              value={
                isDisabled(weekDay)
                  ? ""
                  : getPropertyFromAvailableDaysAndTimesArray(weekDay)?.minTime
                      ?.hour
              }
              width="45px"
            />
          </InputGroup>
          <Text>:</Text>
          <InputGroup>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              disabled={isDisabled(weekDay)}
              focusBorderColor="gray.700"
              margin="1px"
              onChange={setAvailableMinTimeMinutes(weekDay)}
              size="sm"
              type="number"
              value={
                isDisabled(weekDay)
                  ? ""
                  : getPropertyFromAvailableDaysAndTimesArray(weekDay)?.minTime
                      ?.minutes
              }
              width="45px"
            />
          </InputGroup>
          <Text>às</Text>
          <InputGroup>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              disabled={isDisabled(weekDay)}
              focusBorderColor="gray.700"
              margin="1px"
              onChange={setAvailableMaxTimeHour(weekDay)}
              size="sm"
              type="number"
              value={
                isDisabled(weekDay)
                  ? ""
                  : getPropertyFromAvailableDaysAndTimesArray(weekDay)?.maxTime
                      ?.hour
              }
              width="45px"
            />
          </InputGroup>
          <Text>:</Text>
          <InputGroup>
            <Input
              backgroundColor="gray.50"
              borderColor="gray.300"
              disabled={isDisabled(weekDay)}
              focusBorderColor="gray.700"
              margin="1px"
              onChange={setAvailableMaxTimeMinutes(weekDay)}
              size="sm"
              type="number"
              value={
                isDisabled(weekDay)
                  ? ""
                  : getPropertyFromAvailableDaysAndTimesArray(weekDay)?.maxTime
                      ?.minutes
              }
              width="45px"
            />
          </InputGroup>
        </Flex>
      )),
    [
      getPropertyFromAvailableDaysAndTimesArray,
      isDisabled,
      setAvailableMaxTimeHour,
      setAvailableMaxTimeMinutes,
      setAvailableMinTimeHour,
      setAvailableMinTimeMinutes,
    ]
  );

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
