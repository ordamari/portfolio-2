import { CurveModifier } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { FiberVector3 } from "../assets/types/fiberVector3";

export function Controls() {
  const handlePos = [
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 5),
    new THREE.Vector3(10, 0, 10),
  ];

  const curveRef = useRef<any>();
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3([...handlePos], true, "centripetal"),
    [handlePos]
  );

  return (
    <CurveModifier ref={curveRef} curve={curve}>
      <mesh>{/* <planeBufferGeometry args={[10, 10]} /> */}</mesh>
    </CurveModifier>
  );
}
