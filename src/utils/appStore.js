import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiReducer from "./geminiSlice";
import configReuducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gemini: geminiReducer,
    config: configReuducer,
  },
});
export default appStore;
