import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setMemberClick } from "../../slices/miscSlice";
import { MemberContainer } from "../../Styles/org/sidebarStyles";

const Member = ({ member, type, selectedMembers, setSelectedMembers }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  return (
    <MemberContainer
      animate={{
        opacity: 1,
        rotateZ: 360,
        x: 0,
        transition: { duration: 0.5 },
      }}
      initial={{ opacity: 0, x: -50 }}
      exit={{ opacity: 0, x: -50, rotateZ: -360 }}
      onClick={() => dispatch(setMemberClick(member))}
    >
      {type === "taskAdd" && (
        <Input
          type="checkbox"
          onClick={() => {
            setChecked(!checked);
            if (!checked) setSelectedMembers([...selectedMembers, member._id]);
            else
              setSelectedMembers(
                selectedMembers.filter((memberS) => memberS === member._id)
              );
          }}
        />
      )}
      <span>{member.full_name[0]}</span>
    </MemberContainer>
  );
};

export default Member;

const Input = styled(motion.input)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  border: none;
  outline: none;
`;
