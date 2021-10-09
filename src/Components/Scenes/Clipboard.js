import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/scene.gltf");
  let prevTime = 0;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    let deltaTime = elapsedTime - prevTime;
    prevTime = elapsedTime;
    if (group.current.rotation.x <= Math.PI / 3)
      group.current.rotation.x += deltaTime * 1.5;
    if (group.current.rotation.z <= Math.PI)
      group.current.rotation.z += deltaTime * 1.5;
    if (group.current.position.z > -85) group.current.position.z -= elapsedTime;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} position={[0, 0, -19]}>
        <group rotation={[0, 0, 0]}>
          <group position={[0, 2.8, 12.3]}>
            <mesh
              geometry={nodes.board_1_board_0.geometry}
              material={materials.board}
            />
            <mesh
              geometry={nodes.board_1_metal_0.geometry}
              material={materials.metal}
            />
          </group>
          <group position={[0, 5.21, 19.59]}>
            <mesh
              geometry={nodes.page_page_0.geometry}
              material={materials.page}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
