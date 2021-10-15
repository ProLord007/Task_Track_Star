import React from "react";
import { useDispatch } from "react-redux";
import { setMemberClick } from "../../slices/miscSlice";
import { MemberContainer } from "../../Styles/org/sidebarStyles";

const Member = ({ member }) => {
  const dispatch = useDispatch();
  return (
    <>
      <MemberContainer onClick={() => dispatch(setMemberClick(member))}>
        <span>{member.full_name[0]}</span>
      </MemberContainer>
    </>
  );
};

export default Member;
