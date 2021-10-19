import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/Colors";

const Tasklist = ({ id, title, tasks }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: -100 }}
    >
      <Container onClick={() => setClicked(!clicked)}>
        <List>{title}</List>
        <Icon
          icon={`akar-icons:${clicked ? "chevron-down" : "chevron-right"}`}
        />
      </Container>
      {clicked &&
        (tasks[id] ? (
          <ContainerTasks>
            {tasks[id]
              .filter((task) => task.tasklist_id === id)
              .map((task, index) => (
                <span key={index}>
                  {index + 1} {task.title}
                </span>
              ))}
          </ContainerTasks>
        ) : (
          <ContainerTasks>No tasks yet!!</ContainerTasks>
        ))}
    </motion.div>
  );
};

export default Tasklist;

const List = styled(motion.span)`
  padding: 3px;
  font-size: 15px;
  flex: 1;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  color: ${colors.primaryAccent};
  :hover {
    background-color: ${colors.secondaryAccent};
    transition: all 0.3s ease;
  }
`;

const ContainerTasks = styled(motion.div)`
  /* overflow-y: scroll; */
  text-align: center;
  font-size: 14px;
  flex-direction: column;
  display: flex;
  color: ${colors.primaryAccent};
`;
