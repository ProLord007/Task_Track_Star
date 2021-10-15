import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/Colors";

const TaskCard = ({ task, index }) => {
  return (
    <Container>
      <CardHead>
        <span>{index + 1})</span>
        <span> {task.title}</span>
        <Status />
      </CardHead>
      <CardBody>{task.desc}</CardBody>
    </Container>
  );
};

export default TaskCard;

const Container = styled(motion.div)`
  background-color: ${colors.secondaryAccent};
  color: ${colors.primaryAccent};
  margin: 10px 0;
`;

const CardHead = styled(motion.div)`
  border-bottom: 2px solid ${colors.backgroundAccent};
  padding: 10px;
  color: #fafafa;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled(motion.div)`
  padding: 10px;
`;

const Status = styled(motion.div)`
  background-color: ${colors.error};
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;
