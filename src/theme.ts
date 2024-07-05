import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.200" : "gray.800",
      },
    }),
  },
});
