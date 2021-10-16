import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { createTask } from "../../services/organizations";
import { colors } from "../../utils/Colors";
import TaskCard from "./TaskCard";

const ListArea = ({ tasklist, tasks }) => {
  const [tasksNew, setTasksNew] = useState(tasks);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await createTask({
        title: title,
        tasklist_id: tasklist._id,
        status: "progress",
        desc: desc,
      });
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 8px solid ${colors.secondaryAccent};
  margin-bottom: 10px;
`;

const Body = styled(motion.div)`
  padding: 3px;
`;

const Button = styled(motion.button)`
  margin-top: 5px;
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
