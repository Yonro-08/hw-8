import { Box, Container, Heading, Text } from "@chakra-ui/react";
import {
  MainMovieContentStyle,
  MainMovieSectionStyle,
  blackoutBackground,
} from "../../../defaultStyle";
import { useMovies } from "../../../store/useMovies";

export default function MainMovie() {
  const movie = useMovies((state) => state.movies[0]);

  return (
    <>
      {movie ? (
        <Box
          as="section"
          style={MainMovieSectionStyle}
          bg={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center/cover`}
          _before={blackoutBackground}
        >
          <Container variant="brand">
            <Box style={MainMovieContentStyle}>
              <Heading color="white">{movie.title}</Heading>
              <Text color="white">{movie.overview}</Text>
            </Box>
          </Container>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
