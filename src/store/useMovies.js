import { create } from "zustand";

export const useMovies = create((set, get) => ({
  movies: [],

  getMovies: async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e3308cd5b9f367afd8512d59039cc6fe&page=1`
    );
    const data = await response.json();
    set({ movies: data.results });
  },

  pushMovies: async (page, setSpinning) => {
    setSpinning(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e3308cd5b9f367afd8512d59039cc6fe&page=${page}`
    );
    const data = await response.json();
    set({ movies: [...get().movies, ...data.results] });
    setSpinning(false);
  },
}));
