import React from "react";
import ReactDOM from "react-dom";
import { App, ServerOffline } from "pages";
import { ChakraProvider } from "@chakra-ui/react";

(async () => {
  try {
    ReactDOM.render(
      <ChakraProvider>
        <App />
      </ChakraProvider>,
      document.getElementById("root")
    );
  } catch (e: any) {
    console.error("[ERROR]", e.message);
    ReactDOM.render(<ServerOffline />, document.getElementById("root"));
  }
})();
