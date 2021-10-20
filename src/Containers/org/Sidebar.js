import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMemberOrg,
  createTasklist,
  removeMemberOrg,
} from "../../services/organizations";
import {
  setMembers,
  setTasklists,
  tlSelector,
  removeMember,
} from "../../slices/orgsSlice";
import Tasklist from "../../Components/org/Tasklist";
import {
  Button,
  Container,
  ContainerCircle,
  Cover,
  Form,
  Header,
  HelperText,
  HoverBox,
  Hr,
  Image,
  Input,
  Subheader,
} from "../../Styles/org/sidebarStyles";
import Member from "../../Components/org/Member";
import { Icon } from "@iconify/react";
import {
  memberButtonSelector,
  removeMemberClick,
} from "../../slices/miscSlice";
import { tokenSelector } from "../../slices/userSlice";
import { AnimatePresence } from "framer-motion";

const Sidebar = ({ tasklists, orgData, members, tasks }) => {
  const [show, setShow] = useState(false);
  const [memberShow, setMemberShow] = useState(false);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [invalid, setInvalid] = useState(false);
  const tls = useSelector(tlSelector);
  const authToken = useSelector(tokenSelector);
  const memberClicked = useSelector(memberButtonSelector);
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
        const response = await createTasklist(
          {
            title: title,
            org_id: orgData._id,
          },
          authToken
        );
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
        const response = await addMemberOrg(
          {
            org_id: orgData._id,
            email: member,
          },
          authToken
        );
        setMemberShow(false);
        dispatch(setMembers(JSON.parse(response).data));
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  const handleRemoveMember = async () => {
    try {
      const response = await removeMemberOrg(
        {
          org_id: orgData._id,
          user_id: memberClicked._id,
        },
        authToken
      );
      dispatch(removeMemberClick());
      dispatch(removeMember(JSON.parse(response).data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Cover>
      <Header animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -80 }}>
        <Image
          src="/TaskStarLogo.png"
          alt="logo"
          animate={{ opacity: 1, rotateZ: 360, transition: { duration: 0.5 } }}
          initial={{ opacity: 0 }}
        />
        <span>Task Star</span>
      </Header>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
      <Subheader
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      >
        <span>Lists</span>
        {show && (
          <Icon
            icon="clarity:window-close-line"
            width="20"
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => setShow(false)}
          />
        )}
      </Subheader>
      <AnimatePresence>
        {!show && (
          <Button
            onClick={handleAddClick}
            exit={{ opacity: 0, x: -200 }}
            animate={{ x: 0 }}
            initial={{ x: -200 }}
          >
            Add Tasklist
          </Button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {show && (
          <Form
            onSubmit={handleCreateList}
            exit={{ opacity: 0, x: -200 }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button>Create</Button>
            {invalid && <HelperText>* Min 5 characters.</HelperText>}
          </Form>
        )}
      </AnimatePresence>
      <Container>
        {tasklists.map((tasklist, index) => (
          <Tasklist
            key={index}
            title={tasklist.title}
            tasks={tasks}
            id={tasklist._id}
          />
        ))}
      </Container>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
      <Subheader
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      >
        <span>Members</span>
        {memberShow && (
          <Icon
            icon="clarity:window-close-line"
            width="20"
            style={{
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => setMemberShow(false)}
          />
        )}
      </Subheader>
      <AnimatePresence>
        {!memberShow && (
          <Button
            exit={{ opacity: 0, x: -200 }}
            animate={{ x: 0 }}
            initial={{ x: -200 }}
            onClick={handleMemberClick}
          >
            Add Member
          </Button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {memberShow && (
          <Form
            onSubmit={handleMemberAdd}
            exit={{ opacity: 0, x: -200 }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Input
              type="email"
              placeholder="Member Email"
              onChange={(e) => setMember(e.target.value)}
            />
            <Button>Add</Button>
            {invalid && <HelperText>Email is required.</HelperText>}
          </Form>
        )}
      </AnimatePresence>
      <ContainerCircle>
        <AnimatePresence>
          {memberClicked && (
            <HoverBox
              exit={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
            >
              <Icon
                icon="clarity:window-close-line"
                width="20"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(removeMemberClick())}
              />
              <Icon
                icon="gg:remove"
                width="20"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={handleRemoveMember}
              />
              <span>{memberClicked.full_name}</span>
              <span>{memberClicked.email}</span>
            </HoverBox>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {Object.keys(members).map((id, index) => (
            <Member key={index} member={members[id]} id={id} />
          ))}
        </AnimatePresence>
      </ContainerCircle>
      <Hr
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -500 }}
      />
    </Cover>
  );
};

export default Sidebar;
