import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

import { useMovie } from "../../../store/useMovie";
import MainContent from "./MainContent/MainContent";

import { MovieContentStyle } from "../../../defaultStyle";

export default function MovieContent() {
  const { movie, getMovie, getMovieCredits } = useMovie();

  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
    getMovieCredits(id);
  }, []);

  return (
    <Box
      as="section"
      height={["max-content", "max-content", "600px"]}
      p="50px 20px"
      style={MovieContentStyle}
      bg={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center/cover`}
    >
      <Container variant="brand" height={["100%", "100%", "520px"]}>
        <MainContent />
      </Container>
    </Box>
  );
}
