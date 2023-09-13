import { useContext, useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { AppContext } from "../../../context/AppContext";

export default function SearchMovie() {
  const { dispatch, searchValue } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(searchValue);

  const getFetchSearchMovies = async (event) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${event.target.value}&api_key=e3308cd5b9f367afd8512d59039cc6fe&page=1`
    );
    const data = await response.json();
    return data.results;
  };

  const onAddSearchValue = async (event) => {
    setInputValue(event.target.value);
    const newMovies = await getFetchSearchMovies(event);
    dispatch({ type: "ADD_SEARCH_VALUE", payload: event.target.value });
    dispatch({ type: "ADD_SEARCH_MOVIES", payload: newMovies });
  };

  return (
    <Box bg="#1c1c1c" p="15px 20px">
      <Container maxW="1280px">
        <InputGroup w="100%" borderRadius="50px" bg="#353535">
          <InputLeftElement paddingLeft="10px" pointerEvents="none">
            <SearchIcon color="white" width="25px" height="25px" />
          </InputLeftElement>
          <Input
            value={inputValue}
            onChange={onAddSearchValue}
            variant="unstyled"
            height="40px"
            paddingLeft="60px"
            color="white"
            placeholder="Search Movie"
            _placeholder={{ color: "gray" }}
          />
        </InputGroup>
      </Container>
    </Box>
  );
}
