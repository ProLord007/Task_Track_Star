import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import orgsReducer from "../slices/orgsSlice";
import othersReducer from "../slices/miscSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    orgs: orgsReducer,
    others: othersReducer,
  },
});
