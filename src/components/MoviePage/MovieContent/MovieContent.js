import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieContent() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  console.log(movie);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e3308cd5b9f367afd8512d59039cc6fe`
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {movie ? (
        <>{movie.title}</>
      ) : (
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner width="100px" height="100px"></Spinner>
        </Box>
      )}
    </div>
  );
}
