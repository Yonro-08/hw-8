import { create } from "zustand";

export const useSearchMovies = create((set, get) => ({
  searchMovies: [],
  searchValue: "",

  getSearchMovies: async (value) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=e3308cd5b9f367afd8512d59039cc6fe&page=1`
    );
    const data = await response.json();
    set({ searchMovies: data.results });
  },

  pushSearchMovies: async (page, setSpinning) => {
    setSpinning(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${
        get().searchValue
      }&api_key=e3308cd5b9f367afd8512d59039cc6fe&page=${page}`
    );
    const data = await response.json();
    set({ searchMovies: [...get().searchMovies, ...data.results] });
    setSpinning(false);
  },

  changeSearchValue: (value) =>
    set(() => {
      console.log(value);
      return { searchValue: value };
    }),
}));
