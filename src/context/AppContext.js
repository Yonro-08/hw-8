import { createContext, useReducer } from "react";

const initialState = {
  movies: [],
  searchMovies: [],
  searchValue: "",
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA_POPULAR_MOVIES": {
      const newID = state.movies.map((elem) => elem.id);
      const newMovies = action.payload.filter(
        (movie, index) => movie.id !== newID[index]
      );
      return { ...state, movies: [...state.movies, ...newMovies] };
    }
    case "ADD_SEARCH_MOVIES": {
      return {
        ...state,
        searchMovies: [...action.payload],
      };
    }
    case "CHANGE_PAGE_SEARCH_MOVIES": {
      return {
        ...state,
        searchMovies: [...state.searchMovies, ...action.payload],
      };
    }
    case "ADD_SEARCH_VALUE": {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        movies: state.movies,
        searchMovies: state.searchMovies,
        searchValue: state.searchValue,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
