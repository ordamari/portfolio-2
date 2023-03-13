import { Suspense, useRef } from "react";
import { Group, OrthographicCamera, PerspectiveCamera } from "three";
import { useScrollControls } from "../hooks/useScrollControls";
import { Controls } from "./Controls";
import { Debug } from "./Debug";
import { Environment } from "./Environment";
import { Floor } from "./world/Floor";
import { Room } from "./world/Room/Room2";

type PrivateProps = {
  roomRef: React.RefObject<Group>;
  firstCircleRef: React.RefObject<THREE.Mesh>;
  secondCircleRef: React.RefObject<THREE.Mesh>;
  thirdCircleRef: React.RefObject<THREE.Mesh>;
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>;
  roomChildrenRefs: React.RefObject<{ [key: string]: THREE.Mesh }>;
};

export function Experience({
  roomRef,
  sectionsRefs,
  firstCircleRef,
  secondCircleRef,
  thirdCircleRef,
  roomChildrenRefs,
}: PrivateProps) {
  return (
    <>
      <Debug />
      <Room
        roomRef={roomRef}
        sectionsRefs={sectionsRefs}
        firstCircleRef={firstCircleRef}
        secondCircleRef={secondCircleRef}
        thirdCircleRef={thirdCircleRef}
        roomChildrenRefs={roomChildrenRefs}
      />
      <Environment />
      <Floor
        firstCircleRef={firstCircleRef}
        secondCircleRef={secondCircleRef}
        thirdCircleRef={thirdCircleRef}
      />
      <Controls />
    </>
  );
}
