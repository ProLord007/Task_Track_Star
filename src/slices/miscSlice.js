import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
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
  },
});

export const { setMemberClick, removeMemberClick } = miscSlice.actions;
export const memberButtonSelector = (state) => state.others.member;
export default miscSlice.reducer;
