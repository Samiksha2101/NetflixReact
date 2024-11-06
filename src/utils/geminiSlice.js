import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    toggleGptSearch: false,
    movieNames: null,
    suggestedMovies: null,
  },
  reducers: {
    toggleAction: (state, action) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
    addMovieSuggestions: (state, action) => {
      const { movieNames, suggestedMovies } = action.payload;
      state.movieNames = movieNames;
      state.suggestedMovies = suggestedMovies;
    },
    removeMovies: (state, action) => {
      state.movieNames = null;
      state.suggestedMovies = null;
    },
  },
});
export const { toggleAction, addMovieSuggestions, removeMovies } =
  geminiSlice.actions;
export default geminiSlice.reducer;
