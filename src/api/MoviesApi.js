import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieApi, API_KEY } from "../toolkit/types/moviesType";

export const getAllMovies = createAsyncThunk(
  "movie/getAllMovies",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(MovieApi);
      return {
        data: res.data.results,
        pages: res.data.total_pages,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMovieSearch = createAsyncThunk(
  "movie/getMovieSearch",
  async (word, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${word}&language=ar`
      );
      return {
        data: res.data.results,
        pages: res.data.total_pages,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPages = createAsyncThunk(
  "movie/getPages",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ar&page=${page}`
      );
      return {
        data: res.data.results,
        pages: res.data.total_pages,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
