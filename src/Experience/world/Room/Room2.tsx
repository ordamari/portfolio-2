import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useHelper } from "@react-three/drei";
import { Group, RectAreaLight, SpotLight } from "three";
import { useRoomRotation } from "../../../hooks/useRoomRotation";
import { useScrollControls } from "../../../hooks/useScrollControls";
import { useActions } from "../../../hooks/useActions";
import * as Three from "three";
import { usePreloader } from "../../../hooks/usePreloader";
import { useRect } from "../../../hooks/useRect";

type PrivateProps = {
  roomRef: React.RefObject<Group>;
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>;
  firstCircleRef: React.RefObject<THREE.Mesh>;
  secondCircleRef: React.RefObject<THREE.Mesh>;
  thirdCircleRef: React.RefObject<THREE.Mesh>;
  roomChildrenRefs: React.RefObject<{ [key: string]: any }>;
};

export function Room({
  roomRef,
  sectionsRefs,
  firstCircleRef,
  secondCircleRef,
  thirdCircleRef,
  roomChildrenRefs,
}: PrivateProps) {
  const group = useRef<Group>(null);
  //@ts-ignore
  const room = useGLTF("./models/room.glb");
  // const { actions } = useAnimations(animations, group);
  useRoomRotation(roomRef, -Math.PI / 4);
  useRoomRotation(roomRef, -Math.PI / 4);
  useScrollControls(
    roomRef,
    sectionsRefs,
    firstCircleRef,
    secondCircleRef,
    thirdCircleRef,
    roomChildrenRefs
  );
  usePreloader(roomChildrenRefs, roomRef);
  const AC = useActions();
  const rect = useRect(document.body);

  useEffect(() => {
    AC.toggleIsRoomLoad();
    if (roomRef.current) {
      // shadows
      roomRef?.current?.children.forEach((child) => {
        child.castShadow = true;
        child.receiveShadow = true;
        if (roomChildrenRefs.current)
          roomChildrenRefs.current[child.name.toLowerCase()] = child;

        // floor position for animation
        if (child.name === "floor") {
          child.position.z = 5;
        }
        // if (
        //   child.name === "pPlane5" ||
        //   child.name === "lamp" ||
        //   child.name === "lampInner" ||
        //   child.name.includes("minifloor")
        // ) {
        child.scale.set(0, 0, 0);
        // }
        if (child.name === "hiddenCube") {
          // child.scale.set(1, 1, 1);
          child.position.set(0, -1.5, 0);
        }
        if (child.name === "chair") {
          // child.scale.set(1, 1, 1);
          child.rotation.x = Math.PI;
        }
        if (child.name === "mouse") {
          child.rotation.y = Math.PI;
        }
      });
    }
  }, []);

  useEffect(() => {
    if (rect && rect.width < 960) {
      roomRef.current?.scale.set(0.07, 0.07, 0.07);
    } else {
      roomRef?.current?.scale.set(0.11, 0.11, 0.11);
    }
  }, [rect]);

  return <primitive ref={roomRef} object={room.scene} />;
}

useGLTF.preload("./models/room.glb");
