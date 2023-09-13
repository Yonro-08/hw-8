import { Link } from "react-router-dom";
import { Card, Image } from "@chakra-ui/react";

export default function MovieCard({ src, id }) {
  return (
    <Card borderRadius="20px" overflow="hidden">
      <Link to={`movie/${id}`} style={{ height: "100%" }}>
        <Image
          height="100%"
          objectFit="cover"
          src={
            src
              ? `https://image.tmdb.org/t/p/original${src}`
              : "./assets/images/NoImage.png"
          }
        />
      </Link>
    </Card>
  );
}
