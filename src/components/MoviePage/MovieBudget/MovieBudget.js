import { Box, Container, Flex, Grid } from "@chakra-ui/react";

import { useMovie } from "../../../store/useMovie";

const BudgetStyle = {
  justifyContent: "center",
  padding: "8px",
  background: "#353535",
  borderRadius: "20px",
  color: "white",
};

export default function MovieBudget() {
  const { movie } = useMovie();

  const runningTime = `${Math.trunc(movie.runtime / 60)}h ${
    ((movie.runtime / 60) % 1).toFixed(2).split(".")[1]
  }m`;

  return (
    <Box bg="#1c1c1c" p="10px" mb="20px">
      <Container variant="brand">
        <Grid gridTemplateColumns={[null, "1fr", "repeat(3, 1fr)"]} gap="20px">
          <Flex style={BudgetStyle}>Running Time: {runningTime}</Flex>
          <Flex style={BudgetStyle}>Budget: ₹{movie.budget}</Flex>
          <Flex style={BudgetStyle}>Revenue: ₹{movie.revenue}</Flex>
        </Grid>
      </Container>
    </Box>
  );
}
