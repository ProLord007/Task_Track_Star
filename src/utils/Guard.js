import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { userSelector } from "../slices/userSlice";

const Guard = ({ children }) => {
  const data = useSelector(userSelector);
  const history = useHistory();
  if (!data) {
    history.push("/auth/login");
  }
  return <>{children} </>;
};

export default Guard;
