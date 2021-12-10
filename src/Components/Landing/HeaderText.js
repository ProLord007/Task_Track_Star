import React from "react";
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

const HeaderText = ({ body, type, size }) => {
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
                <Letter
                  key={char + "-" + index}
                  variants={revealVariant}
                  size={size}
                >
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
