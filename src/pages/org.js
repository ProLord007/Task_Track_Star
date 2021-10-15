import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Sidebar from "../Containers/org/Sidebar";
import Taskarea from "../Containers/org/Taskarea";
import { allDataSelector } from "../slices/orgsSlice";
import { colors } from "../utils/Colors";

const Organization = () => {
  const data = useSelector(allDataSelector);

  return (
    <Container>
      <Sidebar
        tasklists={data.tasklists}
        orgData={data.orgData}
        members={data.members}
        tasks={data.tasks}
      />
      <Taskarea
        tasklists={data.tasklists}
        orgData={data.orgData}
        members={data.members}
        tasks={data.tasks}
      />
    </Container>
  );
};

export default Organization;
export const Container = styled(motion.div)`
  background: ${colors.background};
  height: 100vh;
  display: flex;
`;
