import React from "react";
import styled from "styled-components";
import ListArea from "../../Components/org/ListArea";
import { colors } from "../../utils/Colors";

const Taskarea = ({ tasklists, orgData, members, tasks }) => {
  return (
    <TaskareaContainer>
      {tasklists.map((tasklist, index) => {
        return (
          <ListArea
            tasklist={tasklist}
            key={index}
            tasks={tasks[tasklist._id]}
          />
        );
      })}
    </TaskareaContainer>
  );
};

export default Taskarea;

const TaskareaContainer = styled.div`
  flex: 1;
  /* background-color: ${colors.primary}; */
  display: flex;
  color: ${colors.primary};
  overflow-y: scroll;
  text-align: center;
  padding: 20px;
`;
