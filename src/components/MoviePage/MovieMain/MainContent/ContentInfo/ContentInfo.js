import { Box, Heading, Text } from "@chakra-ui/react";

import { useMovie } from "../../../../../store/useMovie";

import { MovieContentInfo, RatingBoxStyle } from "../../../../../defaultStyle";

export default function ContentInfo() {
  const { movie, director } = useMovie();

  return (
    <>
      {movie && (
        <Box style={MovieContentInfo}>
          <Heading variant="h2">{movie.title}</Heading>
          <Text variant="fs18">PLOT</Text>
          <Text variant="fs16">{movie.overview}</Text>
          <Box display="flex" gap="100px">
            <Box>
              <Heading variant="h3">RATING</Heading>
              <Box style={RatingBoxStyle}>{movie.vote_average}</Box>
            </Box>
            <Box>
              <Heading variant="h3">DIRECTOR</Heading>
              <Text color="white">{director}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
