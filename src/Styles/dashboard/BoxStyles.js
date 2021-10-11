import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Container = styled(motion.div)`
  min-height: 50vh;
  margin: 50px;
  min-width: 300px;
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.headColor};
  font-size: 18px;
  position: relative;
  font-weight: 500;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Head = styled.div`
  margin: 10px;
`;
export const Choice = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin: 0 20px;
`;
export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: space-evenly;
  margin: 0 20px;
`;

export const Input = styled.input`
  min-width: 250px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid ${colors.primary};
  margin: 10px 10px 5px 5px;
  padding: 7px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Desc = styled.textarea`
  min-width: 250px;
  height: 100px;
  margin: 10px 10px 10px 5px;
  border: none;
  /* border: 1px solid ${colors.primary}; */
  padding: 7px;
  outline: none;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Button = styled.button`
  margin: 10px 10px 5px 5px;
  outline: none;
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  :hover {
    background-color: ${colors.primaryAccent};
    transition: all 0.5s;
  }
`;

export const Helper = styled.span`
  color: red;
  font-size: 8;
  font-weight: 400;
  margin-left: 5px;
  margin-bottom: 5px;
`;
