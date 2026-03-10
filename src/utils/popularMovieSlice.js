import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const popularMovieSlice = createSlice({
  name: "popularMovies",
  initialState: {
    addPopularMovies: null
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
  },
});

export const {addPopularMovies} = popularMovieSlice.actions
export default popularMovieSlice.reducer;
