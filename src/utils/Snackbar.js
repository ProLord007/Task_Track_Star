import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeSnackbar } from "../slices/miscSlice";
import { colors } from "./Colors";

const Snackbar = ({ type, title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(closeSnackbar()), 2500);
  }, [dispatch]);

  return (
    <Container
      type={type}
      initial={{ x: 1000, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1 },
      }}
      exit={{
        x: 500,
        opacity: 0,
        transition: { type: "spring", duration: 1 },
      }}
    >
      <Icon
        icon={
          type === "success"
            ? "clarity:success-standard-solid"
            : type === "inform"
            ? "carbon:information-filled"
            : "bx:bxs-error-circle"
        }
        width="40"
        style={{ flex: 0.3, color: colors.backgroundAccent }}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default Snackbar;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  min-width: 250px;
  position: absolute;
  color: ${colors.backgroundAccent};
  height: 60px;
  right: 1vh;
  top: 8vh;
  border-radius: 5px;
  border: 1px solid ${colors.secondaryAccent};
  z-index: 101;
  ${({ type }) =>
    type === "success"
      ? `background-color: ${colors.success};`
      : type === "inform"
      ? `background-color: ${colors.inform};`
      : `background-color: ${colors.error};`};
`;

export const Title = styled(motion.div)`
  flex: 0.7;
  font-size: 18px;
  padding-right: 10px;
  flex-wrap: wrap;
`;
