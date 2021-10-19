import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors } from "./Colors";

const Loading = ({ type }) => {
  return (
    <Container>
      <Loader2
        animate={{
          rotate: 405,
          scale: [1.1, 1],
          transition: {
            repeat: Infinity,
            reverse: "true",
            repeatDelay: 0.5,
            type: "spring",
            stiffness: 200,
          },
        }}
        initial={{ rotateZ: 45, scale: 1 }}
      />
      <Loader
        animate={{
          rotate: 360,
          scale: [1.1, 1],
          transition: {
            repeat: Infinity,
            repeatDelay: 0.8,
            type: "spring",
            stiffness: 200,
          },
        }}
        initial={{ rotateZ: 0, scale: 1 }}
      />
      <Head>{type}</Head>
    </Container>
  );
};

export default Loading;

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 300;
  background: ${colors.background};
`;

export const Loader = styled(motion.div)`
  background-color: ${colors.secondary};
  height: 200px;
  width: 200px;
  opacity: 0.5;
  position: absolute;
`;
export const Loader2 = styled(Loader)`
  background-color: ${colors.secondaryAccent};
`;
export const Head = styled(motion.span)`
  position: absolute;
  color: ${colors.primaryAccent};
`;
