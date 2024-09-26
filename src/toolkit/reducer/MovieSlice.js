import { AllMOVIES } from "../types/moviesType";
import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getMovieSearch, getPages } from "../../api/MoviesApi";

const initialState = {
  moviesList: [],
  pageCount: 0,
  isLoading: false,
  error: null,
};

export const MoviesSlice = createSlice({
  name: AllMOVIES,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesList = action.payload.data;
        state.pageCount = action.payload.pages;
        state.error = null;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(getMovieSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMovieSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesList = action.payload.data;
        state.pageCount = action.payload.pages;
        state.error = null;
      })
      .addCase(getMovieSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addCase(getPages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesList = action.payload.data;
        state.pageCount = action.payload.pages;
        state.error = null;
      })
      .addCase(getPages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default MoviesSlice.reducer;
