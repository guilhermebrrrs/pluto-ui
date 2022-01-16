import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { MaterialType } from "../types";

const capitalizeName = (item: string) => {
  item = item.trim();

  return item
    .split(" ")
    .map((name) => capitalizeString(name))
    .join(" ");
};

const capitalizeString = (item: string) =>
  item.charAt(0).toLocaleUpperCase() + item.substring(1).toLocaleLowerCase();

const initApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_URL}` }),
    cache: new InMemoryCache(),
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

const getMaterialTypeLabel = (materialType: MaterialType) =>
  ({
    GLASS: "Vidros",
    HAZARDOUS_MATERIALS: "Materiais Perigosos",
    HOSPITAL_WASTE: "Lixo Hospitalar",
    METALS: "Metais",
    NON_RECYCLABLE: "Não-reciclável",
    ORGANIC_WASTE: "Lixo Orgânico",
    PAPERS: "Papéis",
    PLASTICS: "Plásticos",
    RADIOACTIVE_MATERIALS: "Materiais Radioativos",
    WOODS: "Madeiras",
  }[materialType.toString()]);

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
  getMaterialTypeLabel,
  getWeekDayLabel,
  initApolloClient,
  isNullOrBlank,
  isSomeItemOfArrayNullOrBlank,
  sortByString,
  transformEnumValueToCapitalizeString,
};
