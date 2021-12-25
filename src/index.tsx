import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "components";
import { App, ServerOffline } from "pages";
import { definitions } from "./utils";
import { ApolloProvider } from "@apollo/client";
import { initApolloClient } from "./apollo/client";

(async () => {
  try {
    ReactDOM.render(
      <ChakraProvider resetCSS theme={definitions.theme}>
        <GlobalStyles />
        <ApolloProvider client={initApolloClient()}>
          <App />
        </ApolloProvider>
      </ChakraProvider>,
      document.getElementById("root")
    );
  } catch (e: any) {
    console.error("[ERROR]", e.message);
    ReactDOM.render(<ServerOffline />, document.getElementById("root"));
  }
})();
