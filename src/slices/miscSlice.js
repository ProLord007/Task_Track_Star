import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
  loading: false,
  snackbarOpened: false,
  snackbarTitle: "",
  snackbarType: "",
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
    openSnackbar: (state, action) => {
      state.snackbarOpened = true;
      state.snackbarTitle = action.payload.title;
      state.snackbarType = action.payload.type;
    },
    closeSnackbar: (state, action) => {
      state.snackbarOpened = false;
      state.snackbarTitle = "";
      state.snackbarType = "";
    },
  },
});

export const {
  setMemberClick,
  removeMemberClick,
  isLoading,
  openSnackbar,
  closeSnackbar,
} = miscSlice.actions;
export const memberButtonSelector = (state) => state.others.member;
export const loadingSelector = (state) => state.others.loading;
export const snackbarSelector = (state) => {
  return {
    type: state.others.snackbarType,
    status: state.others.snackbarOpened,
    title: state.others.snackbarTitle,
  };
};
export default miscSlice.reducer;
