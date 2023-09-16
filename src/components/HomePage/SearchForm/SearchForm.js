import { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { useSearchMovies } from "../../../store/useSearchMovies";

export default function SearchMovie() {
  const { searchValue, changeSearchValue, getSearchMovies } = useSearchMovies();
  const [inputValue, setInputValue] = useState(searchValue);

  const onChangeSearchValue = (event) => {
    setInputValue(event.target.value);
    changeSearchValue(event.target.value);
    getSearchMovies(event.target.value);
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
            onChange={onChangeSearchValue}
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
