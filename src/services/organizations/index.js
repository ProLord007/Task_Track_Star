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
export const addOrg = async (data) => {
  try {
    const response = await api.post("/orgs/addMemberOrg", data, {
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

export const getTasklist = async (data) => {
  try {
    const response = await api.post("/orgs/getTasklist", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response);
  }
};
