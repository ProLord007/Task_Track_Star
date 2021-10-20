import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addAssignee, changeStatus } from "../../services/organizations";
import { membersSelector } from "../../slices/orgsSlice";
import { tokenSelector, userSelector } from "../../slices/userSlice";
import { openSnackbar } from "../../slices/miscSlice";
import { colors } from "../../utils/Colors";
import Member from "./Member";

const TaskCard = ({ task, index }) => {
  const members = useSelector(membersSelector);
  const user = useSelector(userSelector);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [assignees, setAssignees] = useState(task.assignees);
  const [add, setAdd] = useState(false);
  const [status, setStatus] = useState(task.status);
  const authToken = useSelector(tokenSelector);
  const dispatch = useDispatch();

  const handleAddAssignee = async () => {
    if (selectedMembers.length > 0)
      try {
        const response = await addAssignee(
          {
            task_id: task._id,
            userArray: selectedMembers,
          },
          authToken
        );
        if (JSON.parse(response).type === "success") {
          setAssignees([...assignees, ...JSON.parse(response).data.data]);
          setAdd(false);
          dispatch(
            openSnackbar({
              title: JSON.parse(response).data.message,
              type: "success",
            })
          );
        } else {
          dispatch(
            openSnackbar({ title: JSON.parse(response).message, type: "error" })
          );
        }
      } catch (err) {
        console.log(err);
      }
  };
  const change = (status) => {
    if (status === "pending") {
      return "progress";
    } else if (status === "progress") {
      return "completed";
    } else if (status === "completed") {
      return "pending";
    }
  };
  const handleStatusChange = async () => {
    try {
      const response = await changeStatus(
        {
          task_id: task._id,
          user_id: user.id,
          status: change(status),
        },
        authToken
      );
      if (JSON.parse(response).type === "success") {
        setStatus(JSON.parse(response).data.data);
        dispatch(
          openSnackbar({
            title: JSON.parse(response).data.message,
            type: "success",
          })
        );
      } else {
        dispatch(
          openSnackbar({
            title: JSON.parse(response).message,
            type: "error",
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <CardHead>
        <span>{index + 1})</span>
        <span> {task.title}</span>
        <Status type={status} onClick={handleStatusChange} />
      </CardHead>
      <CardBody>
        <span>{task.desc}</span>
        <TaskMembers>
          {add && (
            <MembersCard>
              <Button onClick={handleAddAssignee}>
                <Icon icon="carbon:add" />
              </Button>
              {Object.keys(members).map((id, index) => {
                if (!task.assignees.includes(id))
                  return (
                    <Member
                      key={index}
                      member={members[id]}
                      id={id}
                      type="taskAdd"
                      selectedMembers={selectedMembers}
                      setSelectedMembers={setSelectedMembers}
                    />
                  );
                return (
                  <Member
                    key={index}
                    member={members[id]}
                    id={id}
                    type="taskAddDone"
                    selectedMembers={selectedMembers}
                    setSelectedMembers={setSelectedMembers}
                  />
                );
              })}
            </MembersCard>
          )}

          <TaskHead>
            <span>Assignees</span>
            <Icon
              icon="ant-design:user-add-outlined"
              style={{ cursor: "pointer" }}
              width="20"
              onClick={() => setAdd(!add)}
            />
          </TaskHead>

          {assignees.length > 0 ? (
            assignees.map((member, index) => (
              <Assigned key={index}>
                <span>{members[member]?.full_name}</span>
                <span>
                  <Icon
                    icon="clarity:remove-solid"
                    style={{ cursor: "pointer" }}
                  />
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
  ${({ type }) => {
    if (type === "progress") {
      return `background-color:${colors.progress};`;
    } else if (type === "pending") {
      return `background-color:${colors.error};`;
    } else if (type === "completed") {
      return `background-color:${colors.completed};`;
    }
  }}
  cursor:pointer;
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
  padding: 10px 20px;
  margin-bottom: 5px;
  border-bottom: 2px dashed ${colors.backgroundAccent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MembersCard = styled(motion.div)`
  margin-top: -50px;
  width: 200px;
  padding: 5px;
  background-color: ${colors.secondary};
  overflow-x: scroll;
  display: flex;
  position: relative;
`;

const Button = styled(motion.button)`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border: none;
  outline: none;
  padding: 5px;
`;
