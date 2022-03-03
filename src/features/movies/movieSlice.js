import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const res = await MovieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";

    const res = await MovieApi.get(
      `?apiKey=${APIkey}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);
const initialState = {
  movies: {},
  series: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", payload);
      return { ...state, series: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
