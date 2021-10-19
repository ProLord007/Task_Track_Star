import api from "../axios";

export const createOrg = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/create", data, {
      Authorization: `Bearer ${authToken}`,
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const addMemberOrg = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/add-member-org", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const removeMemberOrg = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/remove-member-org", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const getOrgData = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/getOrg", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const createTasklist = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/createTasklist", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const createTask = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/create-task", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const addAssignee = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/add-member-task", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};

export const changeStatus = async (data, authToken) => {
  try {
    const response = await api.post("/orgs/change-status", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e.response.data.error);
  }
};
