import api from "../axios";

export const createOrg = async (data) => {
  try {
    const response = await api.post("/orgs/create", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};
export const addMemberOrg = async (data) => {
  try {
    const response = await api.post("/orgs/add-member-org", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const removeMemberOrg = async (data) => {
  try {
    const response = await api.post("/orgs/remove-member-org", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const getOrgData = async (data) => {
  try {
    const response = await api.post("/orgs/getOrg", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const createTasklist = async (data) => {
  try {
    const response = await api.post("/orgs/createTasklist", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};

export const createTask = async (data) => {
  try {
    const response = await api.post("/orgs/create-task", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};
