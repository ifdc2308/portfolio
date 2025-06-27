// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Petrov Sans', Arial`,
    body: `'Petrov Sans', Arial`,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  colors: {
    brand: {
      secondary: "#D66916",
      primaryText: "#206AA5",
      bodyText: "#333333",
      darkText: "#113659",
    },
  },
  styles: {
    global: {
      body: {
        color: "#fff", // texto padrão
        bg: "black",
      },
      h1: {
        fontSize: "3xl",
        fontWeight: "bold",
        color: "#fff",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "semibold",
        color: "#fff",
      },
      p: {
        color: "gray",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "#D66916",
          color: "white",
          _hover: {
            bg: "#b55711",
          },
        },
        outline: {
          borderColor: "#D66916",
          color: "#D66916",
          _hover: {
            bg: "#fef0e7",
          },
        },
      },
    },
  },
});

export default theme;
