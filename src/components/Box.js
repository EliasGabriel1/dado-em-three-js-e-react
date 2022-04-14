import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture1 from "../images/dice1side.jpeg";
import texture2 from "../images/dice2side.jpeg";
import texture3 from "../images/dice3side.jpeg";
import texture4 from "../images/dice4side.jpeg";
import texture5 from "../images/dice5side.jpeg";
import texture6 from "../images/dice6side.jpeg";



export default function Box() {
  const texture_1 = useLoader(TextureLoader, texture1);
  const texture_2 = useLoader(TextureLoader, texture2);
  const texture_3 = useLoader(TextureLoader, texture3);
  const texture_4 = useLoader(TextureLoader, texture4);
  const texture_5 = useLoader(TextureLoader, texture5);
  const texture_6 = useLoader(TextureLoader, texture6);

  
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3,3,3,3]} />
      <meshStandardMaterial attach="material" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  );
}
