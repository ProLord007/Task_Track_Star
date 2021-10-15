import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMemberOrg, createTasklist } from "../../services/organizations";
import {
  membersSelector,
  setMembers,
  setTasklists,
  tlSelector,
} from "../../slices/orgsSlice";
import { colors } from "../../utils/Colors";
import Tasklist from "../../Components/dashboard/Tasklist";

const Sidebar = ({ tasklists, orgData, members, tasks }) => {
  const [show, setShow] = useState(false);
  const [memberShow, setMemberShow] = useState(false);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [invalid, setInvalid] = useState(false);
  const tls = useSelector(tlSelector);
  const mms = useSelector(membersSelector);
  const dispatch = useDispatch();
  const handleAddClick = (e) => {
    setShow(true);
  };
  const handleMemberClick = (e) => {
    setMemberShow(true);
  };
  const handleCreateList = async (e) => {
    e.preventDefault();
    if (title && title.length >= 5)
      try {
        const response = await createTasklist({
          title: title,
          org_id: orgData._id,
        });
        setShow(false);
        dispatch(setTasklists([...tls, JSON.parse(response).data]));
      } catch (err) {
        console.log(err.response);
      }
    else setInvalid(true);
  };
  const handleMemberAdd = async (e) => {
    e.preventDefault();
    if (member) {
      try {
        const response = await addMemberOrg({
          org_id: orgData._id,
          email: member,
        });
        setMemberShow(false);
        dispatch(setMembers([...mms, JSON.parse(response).data]));
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <Cover>
      <Header animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }}>
        <Image
          src="/TaskStarLogo.png"
          alt=""
          animate={{ opacity: 1, rotateZ: 360, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
        />
        <span>Task Star</span>
      </Header>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
      <Subheader>Lists</Subheader>

      <Container>
        {!show && <Button onClick={handleAddClick}>Add Tasklist</Button>}
        {show && (
          <Form onSubmit={handleCreateList}>
            <Input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button>Create</Button>
            {invalid && <HelperText>* Min 5 characters.</HelperText>}
          </Form>
        )}
        {tasklists.map((tasklist, index) => (
          <Tasklist
            key={tasklist._id}
            title={tasklist.title}
            tasks={tasks}
            id={tasklist._id}
          />
        ))}
      </Container>

      <Subheader>Members</Subheader>
      <Container>
        {!memberShow && <Button onClick={handleMemberClick}>Add Member</Button>}
        {memberShow && (
          <Form onSubmit={handleMemberAdd}>
            <Input
              type="email"
              placeholder="Member Email"
              onChange={(e) => setMember(e.target.value)}
            />
            <Button>Add</Button>
            {invalid && <HelperText>Email is required.</HelperText>}
          </Form>
        )}
        {Object.keys(members).map((id, index) => (
          <List key={id}>{members[id].full_name}</List>
        ))}
      </Container>
    </Cover>
  );
};

export default Sidebar;

const Cover = styled(motion.div)`
  background-color: ${colors.secondary};
  width: 350px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 40%;
  padding: 0 25px;
  margin-top: 15px;
`;

const Header = styled(motion.h1)`
  color: ${colors.headColor};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
`;

const Image = styled(motion.img)`
  width: 50px;
  margin-right: 10px;
`;

const Hr = styled(motion.div)`
  border-bottom: 1px solid ${colors.contrast};
  width: 300px;
`;
const Subheader = styled(motion.h3)`
  font-weight: 500;
`;

const Button = styled(motion.button)``;
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;
const Input = styled(motion.input)``;

const List = styled(motion.span)`
  padding: 3px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondaryAccent};
    transition: all 0.3s ease;
  }
`;

const HelperText = styled(motion.span)`
  color: ${colors.error};
  font-weight: 400;
  font-size: 11px;
  text-align: center;
`;
