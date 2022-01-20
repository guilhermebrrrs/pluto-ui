import { AvailableDayAndTime, AvailableTime, WeekDays } from "types";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Checkbox, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { definitions, getWeekDayLabel } from "utils";

const useUserLocationLocalState = (
  availableDaysAndTimeObj?: AvailableDayAndTime[]
) => {
  const [cep, setCepState] = useState<string>("");
  const [city, setCityState] = useState<string>("");
  const [comments, setCommentsState] = useState<string>("");
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

  const setComments = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
      setCommentsState(value),
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
  >(availableDaysAndTimeObj ? [...availableDaysAndTimeObj] : []);

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
      availableDaysAndTimes.find(
        (availableDayAndTime) => availableDayAndTime.weekDay === weekDay
      ),
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

  return {
    availableDaysAndTimes,
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
    setCep,
    setCity,
    setComments,
    setCountry,
    setComplement,
    setDistrict,
    setNumber,
    setPlacename,
    setStreet,
    setState,
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useUserLocationLocalState };
