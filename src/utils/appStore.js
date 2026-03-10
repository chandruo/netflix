import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import popularMovieReducer from "./popularMovieSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popularMovies: popularMovieReducer
  },
});

export default appStore;
