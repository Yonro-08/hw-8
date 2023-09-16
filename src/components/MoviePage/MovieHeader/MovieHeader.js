import { Link } from "react-router-dom";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

import { useMovie } from "../../../store/useMovie";
import { useSearchMovies } from "../../../store/useSearchMovies";

export default function MoviePageHeader() {
  const { movie } = useMovie();
  const { changeSearchValue } = useSearchMovies();

  return (
    <Box bg="#353535" h="50px">
      <Container variant="brand">
        <Flex gap="10px" h="inherit" alignItems="center">
          <Link to="/" onClick={() => changeSearchValue("")}>
            <Text color="white">Home</Text>
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Text color="white">{movie && movie.title}</Text>
        </Flex>
      </Container>
    </Box>
  );
}
