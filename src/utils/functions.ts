import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { CollectionStatus, MaterialType } from "types";

const capitalizeName = (item: string) => {
  item = item.trim();

  return item
    .split(" ")
    .map((name) => capitalizeString(name))
    .join(" ");
};

const capitalizeString = (item: string) =>
  item.charAt(0).toLocaleUpperCase() + item.substring(1).toLocaleLowerCase();

const getCollectionStatusLabel = (collectionStatus: CollectionStatus) =>
  ({
    ACCEPTED: "Aberta",
    CANCELED: "Cancelada",
    COMPLETED: "Finalizada",
    NOT_STARTED: "Não iniciada",
    OPENED: "Aberta",
    PAUSED: "Pausada",
  }[collectionStatus.toString()]);

const getMaterialTypeBorderColor = (materialType: MaterialType) =>
  ({
    GLASS: "green.600",
    HAZARDOUS_MATERIALS: "orange.400",
    HOSPITAL_WASTE: "gray.900",
    METALS: "yellow.500",
    NON_RECYCLABLE: "gray.500",
    ORGANIC_WASTE: "yellow.900",
    OTHERS: "gray.500",
    PAPERS: "blue.500",
    PLASTICS: "red.500",
    RADIOACTIVE_MATERIALS: "purple.600",
    SEVERALS: "gray.900",
    WOODS: "gray.800",
  }[materialType.toString()]);

const getMaterialTypeColor = (materialType: MaterialType) =>
  ({
    GLASS: "green.600",
    HAZARDOUS_MATERIALS: "orange.400",
    HOSPITAL_WASTE: "gray.50",
    METALS: "yellow.500",
    NON_RECYCLABLE: "gray.500",
    ORGANIC_WASTE: "yellow.900",
    OTHERS: "gray.500",
    PAPERS: "blue.500",
    PLASTICS: "red.500",
    RADIOACTIVE_MATERIALS: "purple.600",
    SEVERALS: "gray.100",
    WOODS: "gray.800",
  }[materialType]);

const getMaterialTypeTextColor = (materialType: MaterialType) =>
  ({
    GLASS: "gray.50",
    HAZARDOUS_MATERIALS: "gray.50",
    HOSPITAL_WASTE: "gray.900",
    METALS: "gray.50",
    NON_RECYCLABLE: "gray.50",
    ORGANIC_WASTE: "gray.50",
    OTHERS: "gray.50",
    PAPERS: "gray.50",
    PLASTICS: "gray.50",
    RADIOACTIVE_MATERIALS: "gray.50",
    SEVERALS: "gray.900",
    WOODS: "gray.50",
  }[materialType]);

const getMaterialTypeLabel = (materialType: MaterialType) =>
  ({
    GLASS: "Vidros",
    HAZARDOUS_MATERIALS: "Materiais Perigosos",
    HOSPITAL_WASTE: "Lixo Hospitalar",
    METALS: "Metais",
    NON_RECYCLABLE: "Não-reciclável",
    ORGANIC_WASTE: "Lixo Orgânico",
    OTHERS: "Outros",
    PAPERS: "Papéis",
    PLASTICS: "Plásticos",
    RADIOACTIVE_MATERIALS: "Materiais Radioativos",
    SEVERALS: "Diversos",
    WOODS: "Madeiras",
  }[materialType]);

const getWeekDayLabel = (weekDay: string) =>
  ({
    SUNDAY: "Domingo",
    MONDAY: "Segunda-feira",
    TUESDAY: "Terça-feira",
    WEDNESDAY: "Quarta-feira",
    THURSDAY: "Quinta-feira",
    FRIDAY: "Sexta-feira",
    SATURDAY: "Sábado",
  }[weekDay]);

const initApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_URL}` }),
    cache: new InMemoryCache({
      addTypename: false,
    }),
    connectToDevTools: process.env.REACT_APP_ENV === "development",
  });
};

const isNullOrBlank = (item: any) => {
  switch (item) {
    case null:
    case typeof item === "string" && item === "":
      return true;
    default:
      return false;
  }
};

const isSomeItemOfArrayNullOrBlank = (items: any[]) =>
  items.filter((item) => isNullOrBlank(item)).length > 0;

const sortByString = (a: string, b: string) => {
  a = a.toLocaleUpperCase();
  b = b.toLocaleUpperCase();

  return a > b ? (a < b ? 1 : 0) : -1;
};

const transformEnumValueToCapitalizeString = (item: string) =>
  item
    .split("_")
    .map((item: string) => capitalizeString(item))
    .join(" ");

export {
  capitalizeName,
  capitalizeString,
  getCollectionStatusLabel,
  getMaterialTypeBorderColor,
  getMaterialTypeColor,
  getMaterialTypeLabel,
  getMaterialTypeTextColor,
  getWeekDayLabel,
  initApolloClient,
  isNullOrBlank,
  isSomeItemOfArrayNullOrBlank,
  sortByString,
  transformEnumValueToCapitalizeString,
};
