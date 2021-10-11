import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Modal from "../Components/Scenes/Clipboard";
import HeaderText from "../Components/Landing/HeaderText";
import { useHistory } from "react-router-dom";

import {
  buttonVariant,
  containerVariant,
  imageVariant,
} from "../variants/landingVariants";
import {
  Button,
  Container,
  Image,
  Intro,
  ModelCover,
} from "../Styles/Landing/LandingStyles";
import { colors } from "../utils/Colors";

const heading = "Welcome to Task Star!";
const body = "An App to help plan your day";
const body2 = "and";
const body3 = "keep track of your work efficiency. ";

function Landing() {
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);

  const history = useHistory();
  const handleClick = () => {
    history.push("/auth/login");
  };
  window.addEventListener("resize", () => {
    setWindowSize(window.screen.availWidth);
  });

  return (
    <Container>
      <ModelCover>
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, -235] }}
        >
          <Modal />
          <ambientLight args={["#fafafa", 0.8, 30, 1]} />
        </Canvas>
      </ModelCover>
      <Intro
        animate="visible"
        initial="hidden"
        variants={containerVariant}
        size={windowSize}
      >
        <HeaderText body={heading} type="head" size={windowSize} />
        <HeaderText body={body} />
        <HeaderText body={body2} />
        <HeaderText body={body3} />
        <Image src="/intro.png" alt="" variants={imageVariant} />
        <Button
          variants={buttonVariant}
          whileHover={{
            scale: 1.1,
            borderColor: "#3d1d0a",
            background: `${colors.secondary}`,
            color: "#3d1d0a",
            fontWeight: 600,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transition: { ease: "easeInOut" },
          }}
          onClick={handleClick}
          type="button"
        >
          Continue
        </Button>
      </Intro>
    </Container>
  );
}

export default Landing;
