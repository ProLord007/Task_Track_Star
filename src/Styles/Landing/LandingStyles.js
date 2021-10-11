import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../utils/Colors";
export const Container = styled(motion.div)`
  display: flex;
  background: ${colors.background};
  height: 100vh;
`;
export const ModelCover = styled.div`
  height: 100%;
  flex: 1;
`;
export const Intro = styled(motion.div)`
  height: max-content;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${({ size }) => (size > 786 ? "top: 20vh;" : "top:12vh;padding:10px;")}
`;
export const Image = styled(motion.img)``;
export const Button = styled(motion.button)`
  padding: 10px 13px;
  border-radius: 5px;
  border: 2px solid ${colors.secondary};
  cursor: pointer;
  background: radial-gradient(
    circle farthest-corner at center top,
    #3d1d0a,
    ${colors.primary}
  );
  color: ${colors.secondary};
`;
