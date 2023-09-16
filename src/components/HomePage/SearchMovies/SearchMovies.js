import { useState } from "react";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import MovieCard from "../PopularMovies/MovieCard/MovieCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import { useSearchMovies } from "../../../store/useSearchMovies";

export default function SearchMovies() {
  const { searchMovies, pushSearchMovies } = useSearchMovies();
  const [page, setPage] = useState(2);
  const [spinning, setSpinning] = useState(false);

  const getData = async () => {
    pushSearchMovies(page, setSpinning);
  };

  return (
    <Box as="section">
      <Container maxW="1280px" height="inherit">
        <Heading py="20px">Search Result</Heading>
        <SimpleGrid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap="40px"
        >
          {searchMovies.map((movie) => {
            return (
              <MovieCard key={movie.id} id={movie.id} src={movie.poster_path} />
            );
          })}
        </SimpleGrid>
        <ButtonLoadMore
          setPage={setPage}
          page={page}
          spinning={spinning}
          getData={getData}
        />
      </Container>
    </Box>
  );
}
