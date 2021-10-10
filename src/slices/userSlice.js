import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finished: false,
};

export const userSlice = createSlice({
  name: "user",
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

export const { setDone, setNotDone } = userSlice.actions;

export const animationSelector = (state) => state.user.finished;

export default userSlice.reducer;
