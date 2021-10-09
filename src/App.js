import React from "react";
import { Canvas } from "@react-three/fiber";
import Modal from "./Components/Scenes/Clipboard";
import HeaderText from "./Components/Landing/HeaderText";
import { useHistory } from "react-router-dom";
import {
  buttonVariant,
  containerVariant,
  imageVariant,
} from "./variants/landingVariants";
import {
  Button,
  Container,
  Image,
  Intro,
  ModelCover,
} from "./Styles/Landing/LandingStyles";

const heading = "Welcome to Task Manager!";
const body = "An App to help plan your day";
const body2 = "and";
const body3 = "keep track of your work efficiency. ";

function App() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

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
      <Intro animate="visible" initial="hidden" variants={containerVariant}>
        <HeaderText body={heading} type="head" />
        <HeaderText body={body} />
        <HeaderText body={body2} />
        <HeaderText body={body3} />
        <Image src="/intro.png" alt="" variants={imageVariant} />
        <Button
          variants={buttonVariant}
          whileHover={{
            scale: 1.1,
            borderColor: "#3d1d0a",
            background: "wheat",
            color: "#3d1d0a",
            fontWeight: 600,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transition: { ease: "easeInOut", duration: 0.5 },
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

export default App;
