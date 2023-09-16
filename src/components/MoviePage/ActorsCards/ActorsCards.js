import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useMovie } from "../../../store/useMovie";
import ActorCard from "./ActorCard/ActorCard";

export default function ActorsCards() {
  const { actors } = useMovie();

  console.log(actors);

  return (
    <Container variant="brand">
      <Heading mb="20px" fontSize="32px" color="#353535" fontWeight="600">
        Actors
      </Heading>
      {actors && (
        <SimpleGrid
          spacing="20px"
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {actors.map((actor) => {
            return <ActorCard actor={actor} />;
          })}
        </SimpleGrid>
      )}
    </Container>
  );
}
