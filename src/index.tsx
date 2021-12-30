import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyles } from "components";
import { App, ServerOffline } from "pages";
import { AppAuthenticationContextProvider } from "providers";
import { definitions, initApolloClient } from "utils";

(async () => {
  try {
    ReactDOM.render(
      <AppAuthenticationContextProvider>
        <ChakraProvider resetCSS theme={definitions.theme}>
          <GlobalStyles />
          <ApolloProvider client={initApolloClient()}>
            <App />
          </ApolloProvider>
        </ChakraProvider>
      </AppAuthenticationContextProvider>,
      document.getElementById("root")
    );
  } catch (e: any) {
    console.error("[ERROR]", e.message);
    ReactDOM.render(<ServerOffline />, document.getElementById("root"));
  }
})();
