import { Box, Spinner } from "@chakra-ui/react";

export default function SpinnerDefault() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner width="100px" height="100px"></Spinner>
    </Box>
  );
}
