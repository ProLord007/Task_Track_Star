import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Cover = styled(motion.div)`
  background-color: ${colors.secondary};
  width: 350px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${colors.primary};
`;
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  overflow-x: hidden;
  width: 100%;
  height: 40%;
  padding: 0 25px;
  margin: 15px 0;
`;

export const Header = styled(motion.h1)`
  color: ${colors.headColor};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
`;

export const Image = styled(motion.img)`
  width: 50px;
  margin-right: 10px;
`;

export const Hr = styled(motion.div)`
  border-bottom: 1px solid ${colors.contrast};
  width: 300px;
  margin-bottom: 10px;
`;
export const Subheader = styled(motion.h3)`
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const Button = styled(motion.button)`
  padding: 7px;
  cursor: pointer;
  background-color: ${colors.primary};
  border: none;
  outline: none;
  color: ${colors.primaryAccent};
  font-weight: 500;
  font-size: 15px;
  margin: 5px 10px;
  width: 300px;
  transition: all 0.3s;
  :hover {
    background-color: ${colors.secondaryAccent};
  }
`;
export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;
export const Input = styled(motion.input)`
  margin: 5px 10px;
  padding: 8px;
  width: 300px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: ${colors.primary};
`;

export const List = styled(motion.span)`
  padding: 3px;
  font-size: 15px;
  cursor: pointer;
  color: ${colors.primaryAccent};

  :hover {
    background-color: ${colors.secondaryAccent};
    transition: all 0.3s ease;
  }
`;

export const HelperText = styled(motion.span)`
  color: ${colors.error};
  font-weight: 400;
  font-size: 11px;
  text-align: center;
`;

export const MemberContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  margin: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondaryAccent};
  }
`;
export const ContainerCircle = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HoverBox = styled(motion.div)`
  position: absolute;
  margin-top: -105px;
  width: 300px;
  color: ${colors.primaryAccent};
  background-color: ${colors.secondaryAccent};
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;
