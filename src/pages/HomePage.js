import { useEffect } from "react";

import MainMovie from "../components/HomePage/MainMovie/MainMovie";
import PopularMovies from "../components/HomePage/PopularMovies/PopularMovies";
import SearchForm from "../components/HomePage/SearchForm/SearchForm";
import SearchMovies from "../components/HomePage/SearchMovies/SearchMovies";
import { useMovies } from "../store/useMovies";
import { useSearchMovies } from "../store/useSearchMovies";

export default function HomePage() {
  const { getMovies } = useMovies();
  const { searchValue } = useSearchMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      {searchValue !== "" ? null : <MainMovie />}
      <SearchForm />
      {searchValue !== "" ? <SearchMovies /> : <PopularMovies />}
    </main>
  );
}
