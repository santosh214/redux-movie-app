import { createSlice } from "@reduxjs/toolkit";

console.log("init");
const initialState = {
  movies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export default movieSlice.reducer;
