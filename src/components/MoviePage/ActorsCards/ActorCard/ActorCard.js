import { Card, Heading, Image, Text } from "@chakra-ui/react";

export default function ActorCard({ actor }) {
  return (
    <Card bg="#1c1c1c" p="5px" borderRadius="20px" textAlign="center">
      <Image
        height="200px"
        objectFit="cover"
        borderRadius="20px"
        src={
          src
            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
            : "./assets/images/NoImage.png"
        }
      />
      <Heading variant="h4" mt="10px">
        {actor.name}
      </Heading>
      <Text fontSize="16px" color="white" my="5px">
        {actor.character}
      </Text>
    </Card>
  );
}
