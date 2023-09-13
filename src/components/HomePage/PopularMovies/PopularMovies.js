import { useContext, useState, useEffect } from "react";
import { Box, Container, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import { AppContext } from "../../../context/AppContext";

import MovieCard from "./MovieCard/MovieCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";

export default function PopularMovies() {
  const { dispatch, movies } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [spinning, setSpinning] = useState(false);

  const getFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e3308cd5b9f367afd8512d59039cc6fe&page=${page}`
    );
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    const saveMovies = async () => {
      setSpinning(true);
      const newMovies = await getFetch();
      dispatch({
        type: "GET_DATA_POPULAR_MOVIES",
        payload: newMovies,
      });
      setSpinning(false);
    };
    saveMovies();
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
            <Spinner></Spinner>
          )}
        </SimpleGrid>
        <ButtonLoadMore setPage={setPage} page={page} spinning={spinning} />
      </Container>
    </Box>
  );
}
