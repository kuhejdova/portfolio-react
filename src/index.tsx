import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* tady predat theme viz https://chakra-ui.com/docs/styled-system/theme */}
      <RouterProvider
        router={createBrowserRouter(router)}
      />
    </ChakraProvider>
  </React.StrictMode>
);
