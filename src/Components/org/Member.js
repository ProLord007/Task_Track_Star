import React from "react";
import { useDispatch } from "react-redux";
import { setMemberClick } from "../../slices/miscSlice";
import { MemberContainer } from "../../Styles/org/sidebarStyles";

const Member = ({ member }) => {
  const dispatch = useDispatch();
  return (
    <>
      <MemberContainer
        animate={{
          opacity: 1,
          rotateZ: 360,
          x: 0,
          transition: { duration: 0.5 },
        }}
        initial={{ opacity: 0, x: -50 }}
        onClick={() => dispatch(setMemberClick(member))}
      >
        <span>{member.full_name[0]}</span>
      </MemberContainer>
    </>
  );
};

export default Member;
