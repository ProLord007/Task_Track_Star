import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finished: false,
};

export const animationSlice = createSlice({
  name: "animation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDone: (state) => {
      state.finished = true;
    },
    setNotDone: (state) => {
      state.finished = false;
    },
  },
});

export const { setDone, setNotDone } = animationSlice.actions;

export const animationSelector = (state) => state.animation.finished;

export default animationSlice.reducer;
