import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useHelper } from "@react-three/drei";
import { Group, RectAreaLight, SpotLight } from "three";
import { Walls } from "./components/Walls";
import { Table } from "./components/Table";
import { Rug } from "./components/Rug";
import { Keyboard } from "./components/Keyboard";
import { Chair } from "./components/Chair";
import { useControls } from "leva";
import { useRoomRotation } from "../../../hooks/useRoomRotation";
import { useScrollControls } from "../../../hooks/useScrollControls";
import { useActions } from "../../../hooks/useActions";
// import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

type PrivateProps = {
  roomRef: React.RefObject<Group>;
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>;
};

export function Room({ roomRef, sectionsRefs }: PrivateProps) {
  const group = useRef<Group>(null);
  //@ts-ignore
  const { nodes, materials, animations } = useGLTF("./models/room.glb");
  const { actions } = useAnimations(animations, group);
  const spotLightRef = useRef<SpotLight>(null);
  const rectAreaLightRef = useRef<RectAreaLight>(null);
  useRoomRotation(roomRef, -Math.PI / 4);
  // useScrollControls(roomRef, sectionsRefs);
  const AC = useActions();

  useEffect(() => {
    AC.toggleIsRoomLoad();
  }, []);

  return (
    <group scale={0.11} ref={roomRef}>
      {/* <spotLight ref={spotLightRef} args={["#ffffff"]} position={[-1, -1, 2]} /> */}
      {/* <rectAreaLight
        rotation-x={-Math.PI / 2}
        position={[1.25, 21.6, 1.25]}
        ref={rectAreaLightRef}
        args={["#ffffff", 0.3, 2.2, 2.2]}
        castShadow
      /> */}

      <group name="Scene">
        <Walls
          wallGeometry={nodes.Cube004_1.geometry}
          wallMaterial={materials.wall}
          windowGeometry={nodes.window.geometry}
          windowMaterial={materials.earphones}
        />
        <mesh
          name="window"
          castShadow
          receiveShadow
          geometry={nodes.window.geometry}
          material={materials.earphones}
          position={[-9.28, 11.01, -4.59]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[4.04, 1, 3.41]}
        />

        <mesh
          name="airCondation"
          castShadow
          receiveShadow
          geometry={nodes.airCondation.geometry}
          material={materials.earphones}
          position={[-8.7, 14.72, 5.63]}
          scale={[0.55, 0.79, 4.06]}
        />
        <mesh
          name="picture"
          castShadow
          receiveShadow
          geometry={nodes.picture.geometry}
          material={nodes.picture.material}
          position={[-3.7, 14.29, -9.04]}
          scale={[4.36, 2.19, 0.2]}
        />

        <mesh
          name="earphones"
          castShadow
          receiveShadow
          geometry={nodes.earphones.geometry}
          material={materials.earphones}
          position={[-7.35, 6.45, 8.4]}
          rotation={[-1.56, -0.02, -1.13]}
          scale={[0.53, 1.04, 0.53]}
        />

        <Rug
          geometries={[
            nodes.Cylinder006_1.geometry,
            nodes.Cylinder006_2.geometry,
          ]}
          materials={[materials.key, materials.earphones]}
        />

        <Table
          geometries={{
            tableLegsGeometry: nodes.tableLegs.geometry,
            tableBoardGeometry: nodes.TableBoard.geometry,
            mousePadGeometry: nodes.mousePad.geometry,
            mouseGeometry: nodes.mouse.geometry,
            screenFrameGeometry: nodes.screen.geometry,
            screenPlanGeometry: nodes["screen-plan"].geometry,
            screenHolderGeometry: nodes.screenHolder.geometry,
            keyboardKeyGeometry: nodes.Cube.geometry,
          }}
          materials={{
            tableLegsMaterial: materials.tableLeg,
            tableBoardMaterial: materials.tableBoard,
            mousePadMaterial: materials.mousePad,
            mouseMaterial: materials.key,
            screenFrameMaterial: materials.screenFrame,
            screenPlanMaterial: materials.screen,
            screenHolderMaterial: materials.screenHolder,
            keyboardKeyMaterial: materials.key,
          }}
        />

        <Keyboard materials={materials} nodes={nodes} />

        <Chair materials={materials} nodes={nodes} />

        <mesh
          name="television"
          castShadow
          receiveShadow
          geometry={nodes.television.geometry}
          material={materials.screenFrame}
          position={[2.98, 7.34, -8.98]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.02, 2.59, 5.32]}
        />
        <group name="speakers" position={[9.36, 3.73, -8.54]} scale={0.62}>
          <mesh
            name="Cube100"
            castShadow
            receiveShadow
            geometry={nodes.Cube100.geometry}
            material={materials.screenFrame}
          />
          <mesh
            name="Cube100_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube100_1.geometry}
            material={materials.key}
          />
          <mesh
            name="Cube100_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube100_2.geometry}
            material={materials.earphones}
          />
        </group>
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.tableBoard}
          position={[3.02, 3.26, -8.03]}
          scale={[5, 0.08, 1]}
        />
        <group name="smallSpeaker" position={[4.23, 3.69, -8.19]} scale={0.3}>
          <mesh
            name="Cube112"
            castShadow
            receiveShadow
            geometry={nodes.Cube112.geometry}
            material={materials.screenFrame}
          />
          <mesh
            name="Cube112_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube112_1.geometry}
            material={materials.earphones}
          />
          <mesh
            name="Cube112_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube112_2.geometry}
            material={materials.key}
          />
        </group>
        <group
          name="Plane"
          position={[-1, 2.42, -7.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.79, 0.75, 0.74]}
        >
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials.key}
          />
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.tableBoard}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.key}
          position={[-1.85, 1.19, -8.89]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.08, 0.34, 0.08]}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|"].geometry}
          material={materials.Inner}
          position={[5.15, 2.23, -7.4]}
          rotation={[Math.PI / 2, 0.21, -Math.PI / 2]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|1"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|1"].geometry}
          material={materials.Inner}
          position={[5.62, 2.23, -7.73]}
          rotation={[1.37, -0.06, 0.31]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|2"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|2"].geometry}
          material={materials.Inner}
          position={[5.79, 2.23, -7.19]}
          rotation={[1.69, -0.17, 2.21]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|3"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|3"].geometry}
          material={materials.Inner}
          position={[5.22, 2.23, -7.19]}
          rotation={[1.69, 0.17, -2.21]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|4"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|4"].geometry}
          material={materials.Inner}
          position={[5.4, 2.23, -7.73]}
          rotation={[1.37, 0.06, -0.31]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|5"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|5"].geometry}
          material={materials.Inner}
          position={[5.86, 2.23, -7.4]}
          rotation={[Math.PI / 2, -0.21, Math.PI / 2]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|6"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|6"].geometry}
          material={materials.Inner}
          position={[5.4, 2.23, -7.06]}
          rotation={[1.77, 0.06, -2.83]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|7"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|7"].geometry}
          material={materials.Inner}
          position={[5.22, 2.23, -7.6]}
          rotation={[1.45, 0.17, -0.93]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|8"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|8"].geometry}
          material={materials.Inner}
          position={[5.79, 2.23, -7.6]}
          rotation={[1.45, -0.17, 0.93]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|9"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|9"].geometry}
          material={materials.Inner}
          position={[5.62, 2.23, -7.06]}
          rotation={[1.77, -0.06, 2.83]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|10"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|10"].geometry}
          material={materials.Inner}
          position={[5.65, 2.37, -7.19]}
          rotation={[1.49, 0.05, 2.54]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|11"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|11"].geometry}
          material={materials.Inner}
          position={[5.3, 2.37, -7.25]}
          rotation={[1.52, -0.08, -2.18]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|12"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|12"].geometry}
          material={materials.Inner}
          position={[5.36, 2.37, -7.6]}
          rotation={[1.65, -0.05, -0.61]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|13"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|13"].geometry}
          material={materials.Inner}
          position={[5.55, 2.37, -7.64]}
          rotation={[1.67, 0.02, 0.18]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|14"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|14"].geometry}
          material={materials.Inner}
          position={[5.75, 2.37, -7.35]}
          rotation={[1.55, 0.09, 1.75]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|15"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|15"].geometry}
          material={materials.Inner}
          position={[5.46, 2.37, -7.15]}
          rotation={[1.48, -0.02, -2.96]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|16"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|16"].geometry}
          material={materials.Inner}
          position={[5.26, 2.37, -7.44]}
          rotation={[1.59, -0.09, -1.39]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|17"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|17"].geometry}
          material={materials.Inner}
          position={[5.71, 2.37, -7.54]}
          rotation={[1.63, 0.08, 0.96]}
          scale={0.25}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|18"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|18"].geometry}
          material={materials.Inner}
          position={[5.76, 2.01, -7.13]}
          rotation={[2.23, -0.52, 2.57]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|19"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|19"].geometry}
          material={materials.Inner}
          position={[5.24, 2.01, -7.15]}
          rotation={[2.2, 0.56, -2.51]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|20"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|20"].geometry}
          material={materials.Inner}
          position={[5.26, 2.01, -7.66]}
          rotation={[0.91, 0.52, -0.58]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|21"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|21"].geometry}
          material={materials.Inner}
          position={[5.52, 2.01, -7.76]}
          rotation={[0.76, -0.02, 0.02]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|22"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|22"].geometry}
          material={materials.Inner}
          position={[5.87, 2.01, -7.39]}
          rotation={[1.6, -0.82, 1.61]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|23"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|23"].geometry}
          material={materials.Inner}
          position={[5.5, 2.01, -7.04]}
          rotation={[2.39, 0.02, -3.12]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|24"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|24"].geometry}
          material={materials.Inner}
          position={[5.14, 2.01, -7.41]}
          rotation={[1.54, 0.82, -1.53]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|25"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|25"].geometry}
          material={materials.Inner}
          position={[5.77, 2.01, -7.65]}
          rotation={[0.94, -0.56, 0.63]}
          scale={0.3}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|26"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|26"].geometry}
          material={materials.Inner}
          position={[5.64, 2.5, -7.4]}
          rotation={[Math.PI / 2, 0.44, Math.PI / 2]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|27"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|27"].geometry}
          material={materials.Inner}
          position={[5.44, 2.5, -7.28]}
          rotation={[1.18, -0.21, -2.66]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|28"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|28"].geometry}
          material={materials.Inner}
          position={[5.44, 2.5, -7.51]}
          rotation={[1.96, -0.21, -0.48]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|29"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|29"].geometry}
          material={materials.Inner}
          position={[5.57, 2.5, -7.51]}
          rotation={[1.96, 0.21, 0.48]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|30"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|30"].geometry}
          material={materials.Inner}
          position={[5.57, 2.5, -7.28]}
          rotation={[1.18, 0.21, 2.66]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|31"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|31"].geometry}
          material={materials.Inner}
          position={[5.38, 2.5, -7.4]}
          rotation={[Math.PI / 2, -0.44, -Math.PI / 2]}
          scale={0.17}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|32"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|32"].geometry}
          material={materials.Inner}
          position={[5.83, 1.85, -7.4]}
          rotation={[Math.PI / 2, -0.95, Math.PI / 2]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|33"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|33"].geometry}
          material={materials.Inner}
          position={[5.35, 1.85, -7.12]}
          rotation={[2.45, 0.42, -2.82]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|34"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|34"].geometry}
          material={materials.Inner}
          position={[5.35, 1.85, -7.67]}
          rotation={[0.69, 0.42, -0.32]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|35"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|35"].geometry}
          material={materials.Inner}
          position={[5.67, 1.85, -7.67]}
          rotation={[0.69, -0.42, 0.32]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|36"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|36"].geometry}
          material={materials.Inner}
          position={[5.67, 1.85, -7.12]}
          rotation={[2.45, -0.42, 2.82]}
          scale={0.23}
        />
        <mesh
          name="Fruit_Instancer|Fruit_FireLP001|Dupli|37"
          castShadow
          receiveShadow
          geometry={nodes["Fruit_Instancer|Fruit_FireLP001|Dupli|37"].geometry}
          material={materials.Inner}
          position={[5.19, 1.85, -7.4]}
          rotation={[Math.PI / 2, 0.95, -Math.PI / 2]}
          scale={0.23}
        />
        <mesh
          name="Fruit_INner"
          castShadow
          receiveShadow
          geometry={nodes.Fruit_INner.geometry}
          material={materials.Inner}
          position={[5.51, 2.06, -7.4]}
          scale={[0.34, 0.39, 0.34]}
        />
        <mesh
          name="01001"
          castShadow
          receiveShadow
          geometry={nodes["01001"].geometry}
          material={materials["Material.017"]}
          position={[1.65, 2.43, -7.3]}
          scale={0.01}
        />
        <mesh
          name="01"
          castShadow
          receiveShadow
          geometry={nodes["01"].geometry}
          material={materials["Material.015"]}
          position={[2.82, 2.11, -7.41]}
          scale={0}
        />
        <mesh
          name="earphonesHolder"
          castShadow
          receiveShadow
          geometry={nodes.earphonesHolder.geometry}
          material={materials.key}
          position={[-7.32, 5.07, 8.4]}
          rotation={[0, 0.45, 0]}
          scale={[0.34, 0.06, 0.34]}
        />
        <mesh
          name="02"
          castShadow
          receiveShadow
          geometry={nodes["02"].geometry}
          material={materials["Material.014"]}
          position={[2.82, 2.11, -7.41]}
          scale={0}
        />
        <mesh
          name="01002"
          castShadow
          receiveShadow
          geometry={nodes["01002"].geometry}
          material={materials["Material.019"]}
          position={[0.32, 2.13, -7.38]}
          scale={0}
        />
        <mesh
          name="ps4"
          castShadow
          receiveShadow
          geometry={nodes.ps4.geometry}
          material={materials["Material.004"]}
          position={[-0.99, 3.49, -8.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.79}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.001"]}
          position={[0.01, 3.86, -7.79]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={0.02}
        />
        <mesh
          name="Cube078"
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={materials["Material.001"]}
          position={[0.96, 3.66, -8.37]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={0.02}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.004"]}
          position={[-0.17, 3.76, -8.39]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.06, 0.05, 0.14]}
        />
        <mesh
          name="Cube081"
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={materials["Material.004"]}
          position={[1.48, 3.49, -8.04]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.06, 0.05, 0.14]}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["Material.006"]}
          position={[0.03, 3.82, -8.01]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.03, 0.01, 0.01]}
        />
        <mesh
          name="Cube082"
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={materials["Material.006"]}
          position={[1.1, 3.64, -8.2]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.03, 0.01, 0.01]}
        />
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials["Material.009"]}
          position={[-0.14, 3.82, -8.4]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.05, 0.05, 0.03]}
        />
        <mesh
          name="Cube083"
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={materials["Material.009"]}
          position={[1.48, 3.55, -8.04]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.05, 0.05, 0.03]}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.008"]}
          position={[0.08, 3.73, -8.1]}
          rotation={[1.61, 0.92, -1.64]}
          scale={0.03}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.008"]}
          position={[1.11, 3.59, -8.07]}
          rotation={[0.1, -0.71, 0.02]}
          scale={0.03}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.007"]}
          position={[0.04, 3.78, -8.32]}
          rotation={[-0.02, 0.04, -0.65]}
          scale={0.03}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.007"]}
          position={[1.31, 3.61, -7.97]}
          rotation={[-3.08, -0.86, 3.12]}
          scale={0.03}
        />
        <mesh
          name="Cube071"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials["Material.012"]}
          position={[0.01, 3.86, -7.79]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={0.02}
        />
        <mesh
          name="Cube084"
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={materials["Material.012"]}
          position={[0.96, 3.66, -8.37]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={0.02}
        />
        <mesh
          name="Cube058"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials["Material.011"]}
          position={[-0.17, 3.76, -8.39]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.06, 0.05, 0.14]}
        />
        <mesh
          name="Cube085"
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={materials["Material.011"]}
          position={[1.48, 3.49, -8.04]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.06, 0.05, 0.14]}
        />
        <mesh
          name="Cube054"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["Material.010"]}
          position={[0.03, 3.82, -8.01]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.03, 0.01, 0.01]}
        />
        <mesh
          name="Cube086"
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={materials["Material.010"]}
          position={[1.1, 3.64, -8.2]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.03, 0.01, 0.01]}
        />
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials["Material.002"]}
          position={[-0.14, 3.82, -8.4]}
          rotation={[-1.62, 0.65, 1.63]}
          scale={[0.05, 0.05, 0.03]}
        />
        <mesh
          name="Cube087"
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={materials["Material.002"]}
          position={[1.48, 3.55, -8.04]}
          rotation={[-1.49, -0.02, -0.71]}
          scale={[0.05, 0.05, 0.03]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.003"]}
          position={[0.08, 3.73, -8.1]}
          rotation={[1.61, 0.92, -1.64]}
          scale={0.03}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.003"]}
          position={[1.11, 3.59, -8.07]}
          rotation={[0.1, -0.71, 0.02]}
          scale={0.03}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.005"]}
          position={[0.04, 3.78, -8.32]}
          rotation={[-0.02, 0.04, -0.65]}
          scale={0.03}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.005"]}
          position={[1.31, 3.61, -7.97]}
          rotation={[-3.08, -0.86, 3.12]}
          scale={0.03}
        />
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.wall}
          position={[3.96, 0.46, 14.1]}
          scale={[5.09, 4.56, 5.09]}
        />
        <mesh
          name="lamp"
          castShadow
          receiveShadow
          geometry={nodes.lamp.geometry}
          material={materials.earphones}
          position={[0.86, 0.74, 13.02]}
          scale={0.71}
        />
        <mesh
          name="lampInner"
          castShadow
          receiveShadow
          geometry={nodes.lampInner.geometry}
          material={nodes.lampInner.material}
          position={[0.86, 0.74, 13.02]}
          scale={0.71}
        />
        <group
          name="pPlane5"
          position={[8.14, 3.59, 14.09]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.1}
        >
          <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials.key}
          />
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.earphones}
          />
        </group>
        <mesh
          name="02001"
          castShadow
          receiveShadow
          geometry={nodes["02001"].geometry}
          material={materials["Material.016"]}
          position={[1.65, 2.43, -7.3]}
          scale={0.01}
        />
        <mesh
          name="02002"
          castShadow
          receiveShadow
          geometry={nodes["02002"].geometry}
          material={materials["Material.018"]}
          position={[0.32, 2.13, -7.38]}
          scale={0}
        />
        <mesh
          name="shell"
          castShadow
          receiveShadow
          geometry={nodes.shell.geometry}
          material={materials.sunny}
          position={[7.56, 3.76, -8.04]}
          scale={0.27}
        />
        <mesh
          name="01-gomu_gomu"
          castShadow
          receiveShadow
          geometry={nodes["01-gomu_gomu"].geometry}
          material={materials.sunny}
          position={[4.1, 2.37, -7.35]}
          scale={0.01}
        />
        <mesh
          name="masts"
          castShadow
          receiveShadow
          geometry={nodes.masts.geometry}
          material={materials.sunny_masts}
          position={[7.56, 3.71, -7.93]}
          scale={0.2}
        />
        <mesh
          name="masts001"
          castShadow
          receiveShadow
          geometry={nodes.masts001.geometry}
          material={materials.sunny_masts}
          position={[7.56, 4.2, -8.43]}
          rotation={[0, -0.68, 0]}
          scale={0.2}
        />
        <mesh
          name="shell001"
          castShadow
          receiveShadow
          geometry={nodes.shell001.geometry}
          material={materials.sunny_masts}
          position={[7.56, 3.76, -8.04]}
          scale={0.27}
        />
        <mesh
          name="stairs"
          castShadow
          receiveShadow
          geometry={nodes.stairs.geometry}
          material={materials.sunny_masts}
          position={[7.56, 3.76, -8.04]}
          scale={0.11}
        />
        <mesh
          name="trees"
          castShadow
          receiveShadow
          geometry={nodes.trees.geometry}
          material={materials.sunny_masts}
          position={[7.56, 3.76, -8.04]}
          scale={0.11}
        />
        <mesh
          name="pictureImage"
          castShadow
          receiveShadow
          geometry={nodes.pictureImage.geometry}
          material={materials.picture}
          position={[-3.7, 14.29, -9.04]}
          scale={[4.36, 2.19, 0.2]}
        />
        <mesh
          name="Fruit_Tp"
          castShadow
          receiveShadow
          geometry={nodes.Fruit_Tp.geometry}
          material={materials["Fruit_Tip.001"]}
          position={[5.51, 2.65, -7.4]}
          scale={0.29}
        />
        <mesh
          name="02-gomu-gomu"
          castShadow
          receiveShadow
          geometry={nodes["02-gomu-gomu"].geometry}
          material={materials["Material.013"]}
          position={[4.1, 2.07, -7.35]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/room.glb");
