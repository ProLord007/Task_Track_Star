import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTasklist } from "../services/organizations";
import { allDataSelector, orgSelector, setTasklist } from "../slices/orgsSlice";
import { colors } from "../utils/Colors";

const Organization = () => {
  const data = useSelector(allDataSelector);

  console.log(data);
  return <Container>hi</Container>;
};

export default Organization;
export const Container = styled(motion.div)`
  background: ${colors.background};
  height: 100vh;
`;
