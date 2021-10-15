import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { membersSelector } from "../../slices/orgsSlice";
import { colors } from "../../utils/Colors";

const TaskCard = ({ task, index }) => {
  const members = useSelector(membersSelector);
  return (
    <Container>
      <CardHead>
        <span>{index + 1})</span>
        <span> {task.title}</span>
        <Status />
      </CardHead>
      <CardBody>
        <span>{task.desc}</span>
        <TaskMembers>
          <TaskHead>Assignees</TaskHead>

          {task.assignees.length > 0 ? (
            task.assignees.map((member) => (
              <Assigned>
                <span>{members[member].full_name}</span>
                <span>
                  <Icon icon="clarity:remove-solid" />
                </span>
              </Assigned>
            ))
          ) : (
            <Assigned type="empty">No Assignees yet!</Assigned>
          )}
        </TaskMembers>
      </CardBody>
    </Container>
  );
};

export default TaskCard;

const Container = styled(motion.div)`
  background-color: ${colors.secondaryAccent};
  color: ${colors.primaryAccent};
  margin: 10px 5px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Status = styled(motion.div)`
  background-color: ${colors.error};
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

const TaskMembers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed ${colors.backgroundAccent};
  width: 200px;
  margin: 20px;
`;

const Assigned = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  ${({ type }) =>
    type === "empty"
      ? "justify-content: center;"
      : "justify-content: space-between;"}

  padding: 3px 15px;
`;
const TaskHead = styled(motion.span)`
  padding: 10px;
  margin-bottom: 5px;
  border-bottom: 2px dashed ${colors.backgroundAccent};
`;
