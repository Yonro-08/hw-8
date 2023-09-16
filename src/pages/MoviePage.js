import { useMovie } from "../store/useMovie";

import MovieMain from "../components/MoviePage/MovieMain/MovieMain";
import MovieHeader from "../components/MoviePage/MovieHeader/MovieHeader";
import MovieBudget from "../components/MoviePage/MovieBudget/MovieBudget";
import ActorsCards from "../components/MoviePage/ActorsCards/ActorsCards";
import SpinnerDefault from "../components/SpinnerDefault/SpinnerDefault";

export default function MoviePage() {
  const { movie } = useMovie();

  return (
    <>
      {movie ? (
        <>
          <MovieHeader />
          <MovieMain />
          <MovieBudget />
          <ActorsCards />
        </>
      ) : (
        <SpinnerDefault />
      )}
    </>
  );
}
