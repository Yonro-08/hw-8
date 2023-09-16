import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import { globalChakraStyle } from "./defaultStyle";

console.log(globalChakraStyle);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={globalChakraStyle}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
