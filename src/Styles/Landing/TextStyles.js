import { motion } from "framer-motion";
import styled from "styled-components";

export const Head = styled(motion.div)`
  display: flex;
  flex: 1;
  ${({ type }) => type === "head" && "margin-bottom:50px"}
`;
export const Letter = styled(motion.h2)``;
export const LetterSmall = styled(motion.span)``;
export const Word = styled(motion.span)`
  margin-right: 3px;
  display: flex;
`;
