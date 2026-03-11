import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import popularMovieReducer from "./popularMovieSlice";
import gptReducer from "./gptSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popularMovies: popularMovieReducer,
    gptSearch: gptReducer
  },
});

export default appStore;
