import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createTask } from "../../services/organizations";
import { tokenSelector } from "../../slices/userSlice";
import { colors } from "../../utils/Colors";
import TaskCard from "./TaskCard";

const ListArea = ({ tasklist, tasks }) => {
  const [tasksNew, setTasksNew] = useState(tasks);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const authToken = useSelector(tokenSelector);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await createTask(
        {
          title: title,
          tasklist_id: tasklist._id,
          status: "progress",
          desc: desc,
        },
        authToken
      );
      setTasksNew([...tasksNew, JSON.parse(response).data]);
      console.log(tasksNew);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Header>
        <span>{tasklist.title}</span>
        {!show ? (
          <Icon
            icon="akar-icons:plus"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(!show)}
          />
        ) : (
          <Icon
            icon="akar-icons:minus"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(!show)}
          />
        )}
      </Header>
      {show && (
        <Form onSubmit={handleCreateTask}>
          <Input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button type="submit">Create Task</Button>
        </Form>
      )}

      <Body>
        {tasksNew.map((task, index) => (
          <TaskCard key={index} task={task} index={index} />
        ))}
      </Body>
    </Container>
  );
};

export default ListArea;

const Container = styled(motion.div)`
  background-color: ${colors.secondary};
  margin: 0 7px;
  min-width: 250px;
  height: max-content;
`;

const Header = styled(motion.div)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 8px solid ${colors.secondaryAccent};
  margin-bottom: 5px;
`;

const Body = styled(motion.div)`
  padding: 3px;
  height: 83vh;
  overflow-y: scroll;
`;

const Button = styled(motion.button)`
  margin: 5px 0;
  width: 235px;
  padding: 7px 0;
  font-weight: 500;
  color: ${colors.primaryAccent};
  background-color: ${colors.primary};
  font-size: 15px;
  border: none;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondaryAccent};
  }
`;
const Form = styled(motion.form)``;

const Input = styled(motion.input)`
  width: 235px;
  padding: 8px;
  border: none;
  outline: none;
  margin: 5px;
  color: ${colors.primary};
  border-radius: 3px;
`;
