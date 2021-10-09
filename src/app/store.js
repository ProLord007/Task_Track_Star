import { configureStore } from "@reduxjs/toolkit";
import animationReducer from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    animation: animationReducer,
  },
});
