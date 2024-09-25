import { AllMOVIES } from "../types/moviesType";

const initialState = {
          movies: [],
          pageCount: 0,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case AllMOVIES:
      return {
        movies: action.data,
        pageCount: action.pages,
      };
    default:
      return state;
  }
};