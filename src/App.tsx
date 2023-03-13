import { useCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Group, OrthographicCamera, PerspectiveCamera } from "three";
import "./assets/styles/global.scss";
import { Experience } from "./Experience/Experience";
import { useScrollControls } from "./hooks/useScrollControls";
import { useTheme } from "./hooks/useTheme";
import { Page } from "./Page/Page";

const frustum = 3;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionsRefs = useRef<{ [key: string]: HTMLElement }>({});
  const roomRef = useRef<Group>(null);
  const roomChildrenRefs = useRef<{ [key: string]: THREE.Mesh }>({});
  const firstCircleRef = useRef<THREE.Mesh>(null);
  const secondCircleRef = useRef<THREE.Mesh>(null);
  const thirdCircleRef = useRef<THREE.Mesh>(null);
  useTheme();

  return (
    <div className="App">
      <div className="experience">
        <Suspense>
          <Canvas
            orthographic
            camera={{
              near: -50,
              far: 50,
              position: [0, 5.65, 10],
              top: frustum,
              bottom: -frustum,
              left: -frustum,
              right: frustum,
              zoom: 150,
            }}
            ref={canvasRef}
            shadows
          >
            <Experience
              firstCircleRef={firstCircleRef}
              secondCircleRef={secondCircleRef}
              thirdCircleRef={thirdCircleRef}
              roomRef={roomRef}
              sectionsRefs={sectionsRefs}
              roomChildrenRefs={roomChildrenRefs}
            />
          </Canvas>
        </Suspense>
      </div>
      <Page sectionsRefs={sectionsRefs} />
    </div>
  );
}

export default App;
