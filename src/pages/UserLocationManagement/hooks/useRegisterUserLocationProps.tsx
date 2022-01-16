import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Checkbox, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { AvailableDayAndTime, AvailableTime, WeekDays } from "types";
import { definitions, getWeekDayLabel } from "utils";

const useRegisterUserLocationProps = () => {
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

  useEffect(() => console.log(availableDaysAndTimes), [availableDaysAndTimes]);

  return {
    weekDaysOptions,
    weekDayTimesOptions,
  };
};

export { useRegisterUserLocationProps };
