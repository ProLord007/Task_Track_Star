import styled from "styled-components";
import { colors } from "../../utils/Colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  background: ${colors.background};
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Head = styled.h1`
  font-weight: 500;
  color: ${colors.secondary};
`;

export const Cover = styled(motion.div)`
  display: flex;
  overflow: hidden;
`;
export const Vr = styled(motion.div)`
  border-right: 1px solid ${colors.contrast};
`;
