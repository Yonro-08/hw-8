import { useState, useEffect } from "react";
import { Box, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import MovieCard from "./MovieCard/MovieCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import { useMovies } from "../../../store/useMovies";

export default function PopularMovies() {
  const { movies, pushMovies } = useMovies();
  const [page, setPage] = useState(2);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    pushMovies(page, setSpinning);
  }, [page]);

  return (
    <Box as="section">
      <Container maxW="1280px" height="inherit">
        <Heading py="20px">Popular Movies</Heading>
        <SimpleGrid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap="40px"
        >
          {movies ? (
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  src={movie.poster_path}
                />
              );
            })
          ) : (
            <Box>
              <Spinner></Spinner>
            </Box>
          )}
        </SimpleGrid>
        <ButtonLoadMore setPage={setPage} page={page} spinning={spinning} />
      </Container>
    </Box>
  );
}
