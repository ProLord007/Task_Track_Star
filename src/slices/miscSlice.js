import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
  loading: false,
  loadingTitle: "",
};
const miscSlice = createSlice({
  name: "others",
  initialState,
  reducers: {
    setMemberClick: (state, action) => {
      const data = action.payload;
      console.log(data);
      if (data) {
        state.member = data;
      }
    },
    removeMemberClick: (state, action) => {
      state.member = null;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setMemberClick, removeMemberClick, isLoading } =
  miscSlice.actions;
export const memberButtonSelector = (state) => state.others.member;
export const loadingSelector = (state) => state.others.loading;
export default miscSlice.reducer;
