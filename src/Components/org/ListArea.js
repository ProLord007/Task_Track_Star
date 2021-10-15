import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/Colors";
import TaskCard from "./TaskCard";

const ListArea = ({ tasklist, tasks }) => {
  return (
    <Container>
      <Header>{tasklist.title}</Header>
      <Body>
        {tasks.map((task, index) => (
          <TaskCard task={task} index={index} />
        ))}
      </Body>
    </Container>
  );
};

export default ListArea;

const Container = styled(motion.div)`
  background-color: ${colors.secondary};
  margin: 10px;
  min-width: 250px;
  height: max-content;
`;

const Header = styled(motion.div)`
  padding: 10px;
  border-bottom: 8px solid ${colors.secondaryAccent};
`;

const Body = styled(motion.div)`
  padding: 3px;
`;
