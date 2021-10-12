import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgData: null,
  tasklists: [],
  members: [],
  tasks: [],
};
export const orgsSlice = createSlice({
  name: "orgs",
  initialState,
  reducers: {
    setOrgData: (state, action) => {
      const data = action.payload;
      console.log(data);
      if (data) {
        state.orgData = data;
        // state.tasklists = data.tasklists;
        // state.members = data.members;
        // state.tasks = data.tasks;
      }
    },
    setAllData: (state, action) => {
      const data = action.payload;
      console.log(data);
      if (data) {
        state.orgData = data.org_data;
        state.tasklists = data.tasklist;
        state.members = data.members;
        state.tasks = data.tasks;
      }
    },
  },
});
export const { setOrgData, setAllData } = orgsSlice.actions;

export const orgSelector = (state) => state.orgs.orgData;
export const tlSelector = (state) => state.orgs.tasklists;
export const membersSelector = (state) => state.orgs.members;
export const tasksSelector = (state) => state.orgs.tasks;
export const allDataSelector = (state) => state.orgs;

export default orgsSlice.reducer;
