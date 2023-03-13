import { useFrame } from "@react-three/fiber";
import GSAP from "gsap";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

export function useRoomRotation(
  roomRef: React.RefObject<Group>,
  baseRotation: number
) {
  const lerpRef = useRef({
    current: 0,
    target: baseRotation,
    ease: 0.1,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      let addedRotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      addedRotation *= 0.1;
      lerpRef.current.target = addedRotation + baseRotation;
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {};
  }, []);

  useFrame(() => {
    if (roomRef.current) {
      lerpRef.current.current = GSAP.utils.interpolate(
        lerpRef.current.current,
        lerpRef.current.target,
        lerpRef.current.ease
      );
      roomRef.current.rotation.y = lerpRef.current.current;
    }
  });
}
