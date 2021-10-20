import React, { useEffect, useState } from "react";
import {
  Button,
  Choice,
  Container,
  Desc,
  Form,
  Head,
  Helper,
  Input,
} from "../../Styles/dashboard/BoxStyles";
import { Icon } from "@iconify/react";
import { colors } from "../../utils/Colors";
import { motion } from "framer-motion";
import {
  addMemberOrg,
  createOrg,
  getOrgData,
} from "../../services/organizations";
import { tokenSelector, userSelector } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAllData, setOrgData } from "../../slices/orgsSlice";
import { isLoading, openSnackbar } from "../../slices/miscSlice";
const JoinVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { y: 300, opacity: 0 },
};
const CreateVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Box = ({ type, setSelected, selected }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [validateName, setValidateName] = useState(false);
  const [validateDesc, setValidateDesc] = useState(false);
  const [validateId, setValidateId] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validDesc, setValidDesc] = useState(true);
  const [validId, setValidId] = useState(true);
  const [error, setError] = useState({ name: "", desc: "" });
  const [errorJoin, setErrorJoin] = useState("");
  const data = useSelector(userSelector);
  const authToken = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    let nameError = "";
    if (validateName) {
      if (name.length === 0) {
        nameError = "Please Enter a Name";
        setValidName(false);
      } else {
        setValidName(true);
      }
    }
    let descError = "";
    if (validateDesc) {
      if (desc.length === 0) {
        descError = "Please Enter a Description";
        setValidDesc(false);
      } else {
        setValidDesc(true);
      }
    }
    setError({ name: nameError, desc: descError });
  }, [name, desc, validateName, validateDesc]);

  useEffect(() => {
    let idError = "";
    if (validateId) {
      if (id.length === 0) {
        idError = "Please Enter the Organization ID.";
        setValidId(false);
      } else {
        setValidId(true);
      }
    }
    setErrorJoin(idError);
  }, [id, validateId]);

  const handleCreate = async (e) => {
    e.preventDefault();
    dispatch(isLoading(true));
    try {
      const response = await createOrg(
        {
          creator: data.id,
          name: name,
          desc: desc,
        },
        authToken
      );
      if (JSON.parse(response).type === "success") {
        dispatch(setAllData(JSON.parse(response).data.data));
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
      dispatch(isLoading(false));
    } catch (e) {
      dispatch(isLoading(false));
      return e.response;
    }
  };
  const handleJoin = async (e) => {
    e.preventDefault();
    dispatch(isLoading(true));
    try {
      const response = await addMemberOrg(
        {
          org_id: id,
          email: data.email,
        },
        authToken
      );
      if (JSON.parse(response).type === "success") {
        const res = await getOrgData({
          org_id: id,
        });
        if (JSON.parse(res).type === "success") {
          dispatch(setAllData(JSON.parse(res).data));
          dispatch(
            openSnackbar({ title: "Joined Successfully!", type: "success" })
          );
          dispatch(isLoading(false));
        } else {
          dispatch(
            openSnackbar({ title: JSON.parse(res).message, type: "error" })
          );
          dispatch(isLoading(false));
        }
      } else {
        dispatch(
          openSnackbar({ title: JSON.parse(response).message, type: "error" })
        );
        dispatch(isLoading(false));
      }
    } catch (e) {
      dispatch(isLoading(false));
      return e.response;
    }
  };

  return (
    <motion.div>
      {type === "join" ? (
        <Container
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", damping: 11 },
          }}
          whileHover={
            !selected
              ? {
                  rotateZ: [0, 0.8, -0.8, 0.8],
                  transition: { duration: 0.5, repeat: Infinity },
                }
              : {}
          }
        >
          {selected && (
            <Icon
              icon="clarity:window-close-line"
              width="20"
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                margin: "10px",
                cursor: "pointer",
              }}
            />
          )}

          <Choice onClick={() => setSelected("join")}>
            <Head>Join An Organisation</Head>
            <Icon
              icon="ant-design:plus-outlined"
              width="50"
              color={colors.primary}
            />
          </Choice>

          {selected === "join" && (
            <Form
              onSubmit={handleJoin}
              animate="visible"
              initial="hidden"
              variants={JoinVariants}
            >
              <label>ID of Organization</label>
              <label>TestID - 616954b92dd028e4fa5449f3</label>

              <Input
                type="text"
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
                onClick={() => setValidateId(true)}
              />
              {errorJoin && <Helper>{errorJoin}</Helper>}
              <Button disabled={!validId} onClick={() => setValidateId(true)}>
                Join
              </Button>
            </Form>
          )}
        </Container>
      ) : (
        <Container
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", damping: 11 },
          }}
          whileHover={
            !selected
              ? {
                  rotateZ: [0, 0.8, -0.8, 0.8],
                  transition: { duration: 0.5, repeat: Infinity },
                }
              : {}
          }
        >
          {selected && (
            <Icon
              icon="clarity:window-close-line"
              width="20"
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                margin: "10px",
                cursor: "pointer",
              }}
            />
          )}

          {selected === "create" && (
            <Form
              onSubmit={handleCreate}
              animate="visible"
              initial="hidden"
              variants={CreateVariants}
            >
              <label>Name of Organization</label>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                onClick={() => setValidateName(true)}
              />
              {error.name && <Helper>{error.name}</Helper>}
              <label>Description</label>
              <Desc
                onChange={(e) => setDesc(e.target.value)}
                onClick={() => setValidateDesc(true)}
              />
              {error.desc && <Helper>{error.desc}</Helper>}

              <Button
                disabled={!validName || !validDesc}
                onClick={() => {
                  setValidateName(true);
                  setValidateDesc(true);
                }}
              >
                Create
              </Button>
            </Form>
          )}
          <Choice onClick={() => setSelected("create")}>
            <Head>Create An Organisation</Head>
            <Icon
              icon="uit:create-dashboard"
              width="50"
              color={colors.primary}
            />
          </Choice>
        </Container>
      )}
    </motion.div>
  );
};

export default Box;
