import { motion } from "framer-motion";
import styled from "styled-components";

export const Head = styled(motion.div)`
  display: flex;
  flex: 1;
  ${({ type }) => type === "head" && "margin-bottom:40px"}
`;
export const Letter = styled(motion.h2)`
  ${({ size }) => size <= 786 && "font-size:21px"}
`;
export const LetterSmall = styled(motion.span)``;
export const Word = styled(motion.span)`
  margin-right: 3px;
  display: flex;
`;
