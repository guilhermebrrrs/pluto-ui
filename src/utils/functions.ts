import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const initApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_URL}` }),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.REACT_APP_ENV === "development",
  });
};

const isNullOrBlank = (item: Object | string | number | boolean | null) => {
  switch (item) {
    case null:
    case typeof item === "string" && item === "":
      return true;
    default:
      return false;
  }
};

const isSomeItemOfArrayNullOrBlank = (
  items: Array<Object | string | number | boolean | null>
) => items.filter((item) => isNullOrBlank(item)).length > 0;

const transformEnumValue = (item: string) =>
  item
    .split("_")
    .map(
      (item: string) => item.charAt(0) + item.substring(1).toLocaleLowerCase()
    )
    .join(" ");

export {
  initApolloClient,
  isNullOrBlank,
  isSomeItemOfArrayNullOrBlank,
  transformEnumValue,
};
