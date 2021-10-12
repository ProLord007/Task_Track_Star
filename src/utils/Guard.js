import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { userSelector } from "../slices/userSlice";
import { orgSelector } from "../slices/orgsSlice";

const Guard = ({ children }) => {
  const data = useSelector(userSelector);
  const org = useSelector(orgSelector);
  const history = useHistory();
  if (!data) {
    history.push("/auth/login");
  }
  if (!org) {
    history.push("/dashboard");
  }

  return <>{children} </>;
};

export default Guard;
