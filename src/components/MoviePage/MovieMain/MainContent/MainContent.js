import { Flex, Grid } from "@chakra-ui/react";

import ContentImage from "./ContentImage/ContentImage";
import ContentInfo from "./ContentInfo/ContentInfo";

export default function MainContent() {
  return (
    <Grid
      gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
      height="inherit"
      background="rgba(0, 0, 0, 0.7)"
    >
      <ContentImage />
      <ContentInfo />
    </Grid>
  );
}
