import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    toggleAction: (state, action) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});
export const { toggleAction } = gptSlice.actions;
export default gptSlice.reducer;
