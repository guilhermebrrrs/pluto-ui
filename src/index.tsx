import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "components";
import { App, ServerOffline } from "pages";
import { definitions } from "./utils";

(async () => {
  try {
    ReactDOM.render(
      <ChakraProvider resetCSS theme={definitions.theme}>
        <GlobalStyles />
        <App />
      </ChakraProvider>,
      document.getElementById("root")
    );
  } catch (e: any) {
    console.error("[ERROR]", e.message);
    ReactDOM.render(<ServerOffline />, document.getElementById("root"));
  }
})();
