import { Box, Image } from "@chakra-ui/react";
import { useMovie } from "../../../../../store/useMovie";

export default function ContentImage() {
  const src = useMovie((state) => state.movie.poster_path);

  return (
    <Box height="520px">
      <Image
        objectFit="cover"
        w="100%"
        h="100%"
        src={`https://image.tmdb.org/t/p/original${src}`}
        _hover={{ opacity: "0.8" }}
      />
    </Box>
  );
}
