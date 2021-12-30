import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const initApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({ uri: `${process.env.REACT_APP_GRAPHQL_URL}` }),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.REACT_APP_ENV === "development",
  });
};

const transformEnumValue = (item: string) =>
  item
    .split("_")
    .map(
      (item: string) => item.charAt(0) + item.substring(1).toLocaleLowerCase()
    )
    .join(" ");

export { initApolloClient, transformEnumValue };
