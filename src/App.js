import { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import Box from "./components/Box";


export default function App() {
  return (
    <Wrapper className="App">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  canvas {
    height: 100vh;
  }
`;
