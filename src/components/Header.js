import { Box, Container, Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" bg="black" height="80px">
      <Container maxW="1280px" height="inherit">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="inherit"
        >
          <Image
            src="/assets/images/react-movie-logo.e88a4cae.svg"
            width={["150px", "200px"]}
          />
          <Image
            src="/assets/images/tmdb_logo.2ecbb19c.svg"
            width={["80px", "100px"]}
          />
        </Flex>
      </Container>
    </Box>
  );
}
