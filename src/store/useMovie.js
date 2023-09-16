import { create } from "zustand";

export const useMovie = create((set, get) => ({
  movie: {},
  director: "",
  actors: [],

  getMovie: async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e3308cd5b9f367afd8512d59039cc6fe`
    );
    const data = await response.json();
    console.log(data);
    set({ movie: data });
  },

  getMovieCredits: async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=e3308cd5b9f367afd8512d59039cc6fe`
    );
    const data = await response.json();
    const director = data.crew.filter((elem) => elem.job === "Director");
    set({ director: director[0].name, actors: data.cast });
  },
}));
