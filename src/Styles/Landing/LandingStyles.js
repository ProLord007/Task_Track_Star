import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export const ModelCover = styled.div`
  height: 100%;
  flex: 1;
`;
export const Intro = styled(motion.div)`
  height: max-content;
  width: 100vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 20vh;
`;
export const Image = styled(motion.img)``;
export const Button = styled(motion.button)`
  padding: 10px 13px;
  border-radius: 5px;
  border: 2px solid wheat;
  cursor: pointer;
  background: radial-gradient(
    circle farthest-corner at center top,
    #3d1d0a,
    #6e4529
  );
  color: wheat;
`;
