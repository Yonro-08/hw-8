import { Box, Button, Spinner } from "@chakra-ui/react";

export default function ButtonLoadMore({ page, setPage, getData, spinning }) {
  const onClick = () => {
    setPage(page + 1);
    if (getData) {
      getData();
    }
  };
  return (
    <Box display="flex" justifyContent="center" py="20px">
      {spinning ? (
        <Spinner />
      ) : (
        <Button
          maxW="500px"
          w="100%"
          bg="#1c1c1c"
          color="#fff"
          _hover={{
            bg: "rgba(0, 0, 0, 0.75)",
          }}
          onClick={onClick}
        >
          Load More
        </Button>
      )}
    </Box>
  );
}
