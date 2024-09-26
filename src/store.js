import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./toolkit/reducer/MovieSlice";

export const storeApp = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
