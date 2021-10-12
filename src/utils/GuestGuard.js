import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { orgSelector } from "../slices/orgsSlice";

const GuestGuard = ({ children }) => {
  const data = useSelector(orgSelector);
  console.log(data);
  const history = useHistory();
  if (data) {
    history.push(`/org/${data._id}`);
  }
  return <>{children} </>;
};

export default GuestGuard;
