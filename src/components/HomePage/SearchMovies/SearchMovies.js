import { useContext, useState } from "react";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import { AppContext } from "../../../context/AppContext";

import MovieCard from "../PopularMovies/MovieCard/MovieCard";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";

export default function SearchMovies() {
  const { dispatch, searchMovies, searchValue } = useContext(AppContext);
  const [page, setPage] = useState(2);
  const [spinning, setSpinning] = useState(false);

  const getFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=e3308cd5b9f367afd8512d59039cc6fe&page=${page}`
    );
    const data = await response.json();
    return data.results;
  };

  const getData = async () => {
    setSpinning(true);
    const newMovies = await getFetch();
    dispatch({
      type: "CHANGE_PAGE_SEARCH_MOVIES",
      payload: newMovies,
    });
    setSpinning(false);
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
