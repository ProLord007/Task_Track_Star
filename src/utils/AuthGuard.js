import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { userSelector } from "../slices/userSlice.js";

const Guard = ({ children }) => {
  const data = useSelector(userSelector);
  const history = useHistory();

  if (data) {
    history.push("/dashboard");
  }
  return <>{children} </>;
};

export default Guard;
