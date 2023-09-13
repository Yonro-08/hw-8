import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import MainMovie from "../components/HomePage/MainMovie/MainMovie";
import PopularMovies from "../components/HomePage/PopularMovies/PopularMovies";
import SearchForm from "../components/HomePage/SearchForm/SearchForm";
import SearchMovies from "../components/HomePage/SearchMovies/SearchMovies";

export default function HomePage() {
  const { searchValue, movies } = useContext(AppContext);

  return (
    <main>
      {searchValue !== "" ? null : <MainMovie movie={movies[0]} />}
      <SearchForm />
      {searchValue !== "" ? <SearchMovies /> : <PopularMovies />}
    </main>
  );
}
