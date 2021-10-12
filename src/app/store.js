import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import orgsReducer from "../slices/orgsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    orgs: orgsReducer,
  },
});
