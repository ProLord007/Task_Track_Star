import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  Head,
  Letter,
  LetterSmall,
  Word,
} from "../../Styles/Landing/TextStyles";
import {
  lineRevealVariant,
  revealVariant,
} from "../../variants/landingVariants";

const HeaderText = ({ body, type }) => {
  return (
    <Head variants={lineRevealVariant} type={type}>
      {body.split(/(\s+)/).map((word) => {
        return (
          <Word>
            {word.split("").map((char, index) => {
              return type !== "head" ? (
                <LetterSmall key={char + "-" + index} variants={revealVariant}>
                  {char}
                </LetterSmall>
              ) : (
                <Letter key={char + "-" + index} variants={revealVariant}>
                  {char}
                </Letter>
              );
            })}
          </Word>
        );
      })}
    </Head>
  );
};

export default HeaderText;
