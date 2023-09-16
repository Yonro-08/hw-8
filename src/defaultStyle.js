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
    Heading: {
      variants: {
        h2: {
          as: "h2",
          color: "white",
          fontSize: "32px",
          fontWeight: "600",
        },
        h3: {
          as: "h3",
          marginBottom: "10px",
          fontSize: "18px",
          fontWeight: 600,
          color: "white",
        },
        h4: {
          as: "h4",
          fontSize: "18px",
          fontWeight: 600,
          color: "white",
        },
      },
    },
    Text: {
      variants: {
        fs18: {
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
        },
        fs16: {
          mb: "50px",
          color: "white",
          fontSize: "16px",
          lineHeight: "20px",
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

export const MovieContentStyle = {
  display: "grid",
  alignItems: "center",
  position: "relative",
  maxWidth: "100vw",
};

export const MovieContentInfo = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  height: "max-content",
  padding: "50px",
};

export const RatingBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  margin: "0 auto",
  background: "white",
  fontWeight: 800,
  fontSize: "16px",
  borderRadius: "50%",
};
