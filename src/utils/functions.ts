import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

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
  initApolloClient,
  isNullOrBlank,
  isSomeItemOfArrayNullOrBlank,
  sortByString,
  transformEnumValueToCapitalizeString,
};
