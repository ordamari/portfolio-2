import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import { State } from "../store/reducers";
import GSAP from "gsap";

const lightModeColor = {
  r: 1,
  g: 1,
  b: 1,
};

const lightModeIntensity = 0.8;

const darkModeColor = {
  r: 0.1,
  g: 0.2,
  b: 0.6,
};
const darkModeIntensity = 0.76;

export function Environment() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);
  const mode = useSelector((state: State) => state.app.mode);

  useEffect(() => {
    if (!directionalLightRef.current || !ambientLightRef.current) return;
    if (mode === "dark") {
      GSAP.to(directionalLightRef.current.color, darkModeColor);
      GSAP.to(ambientLightRef.current.color, darkModeColor);
      GSAP.to(directionalLightRef.current, { intensity: darkModeIntensity });
      GSAP.to(ambientLightRef.current, { intensity: darkModeIntensity });
    } else {
      GSAP.to(directionalLightRef.current.color, lightModeColor);
      GSAP.to(ambientLightRef.current.color, lightModeColor);
      GSAP.to(directionalLightRef.current, { intensity: lightModeIntensity });
      GSAP.to(ambientLightRef.current, { intensity: lightModeIntensity });
    }
  }, [mode]);

  return (
    <>
      <ambientLight ref={ambientLightRef} args={["#ffffff"]} intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        args={["#ffffff", 1]}
        position={[0.6, 3.4, 1]}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-near={0.1}
        shadow-normalBias={0.05}
      />
    </>
  );
}
