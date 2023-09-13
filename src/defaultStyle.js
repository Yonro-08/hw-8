import { extendTheme } from "@chakra-ui/react";

export const globalChakraStyle = extendTheme({
  components: {
    Container: {
      variants: {
        brand: {
          maxW: ["100%", "1280px"],
          height: "inherit",
          padding: "0px 16px",
        },
      },
    },
  },
});

export const blackoutBackground = {
  content: "''",
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.3)",
};

export const MainMovieSectionStyle = {
  position: "relative",
  height: "500px",
  maxWidth: "100vw",
};

export const MainMovieContentStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  maxW: "700px",
  height: "100%",
  padding: "20px",
  zIndex: "1",
};
