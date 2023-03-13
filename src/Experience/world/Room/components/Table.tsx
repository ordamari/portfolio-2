import { useState } from "react";
import assets from "../../../../assets/assets";

type privateProps = {
  geometries: {
    tableLegsGeometry: THREE.BufferGeometry;
    tableBoardGeometry: THREE.BufferGeometry;
    mousePadGeometry: THREE.BufferGeometry;
    mouseGeometry: THREE.BufferGeometry;
    screenFrameGeometry: THREE.BufferGeometry;
    screenPlanGeometry: THREE.BufferGeometry;
    screenHolderGeometry: THREE.BufferGeometry;
    keyboardKeyGeometry: THREE.BufferGeometry;
  };
  materials: {
    tableLegsMaterial: THREE.MeshStandardMaterial;
    tableBoardMaterial: THREE.MeshStandardMaterial;
    mousePadMaterial: THREE.MeshStandardMaterial;
    mouseMaterial: THREE.MeshStandardMaterial;
    screenFrameMaterial: THREE.MeshStandardMaterial;
    screenPlanMaterial: THREE.MeshStandardMaterial;
    screenHolderMaterial: THREE.MeshStandardMaterial;
    keyboardKeyMaterial: THREE.MeshStandardMaterial;
  };
};
export function Table({ geometries, materials }: privateProps) {
  const [videoTexture] = useState(() => {
    const vid = document.createElement("video");
    vid.src = assets[1].path;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  const {
    tableLegsGeometry,
    tableBoardGeometry,
    mousePadGeometry,
    mouseGeometry,
    screenFrameGeometry,
    screenPlanGeometry,
    screenHolderGeometry,
    keyboardKeyGeometry,
  } = geometries;
  const {
    tableLegsMaterial,
    tableBoardMaterial,
    mousePadMaterial,
    mouseMaterial,
    screenFrameMaterial,
    screenPlanMaterial,
    screenHolderMaterial,
    keyboardKeyMaterial,
  } = materials;

  return (
    <>
      <mesh
        name="tableLegs"
        castShadow
        receiveShadow
        geometry={tableLegsGeometry}
        material={tableLegsMaterial}
        position={[-9.92, 1.4, 7.91]}
        scale={[1.97, 0.15, 0.12]}
      />

      <mesh
        name="TableBoard"
        castShadow
        receiveShadow
        geometry={tableBoardGeometry}
        material={tableBoardMaterial}
        position={[-7.14, 4.93, 4.41]}
        rotation={[0, 0, -0.06]}
        scale={[2.09, 0.13, 1.69]}
      />

      <mesh
        name="mousePad"
        castShadow
        receiveShadow
        geometry={mousePadGeometry}
        material={mousePadMaterial}
        position={[-6.74, 5.08, 4.34]}
        rotation={[0, 0, -0.06]}
        scale={[1.22, 1, 3.46]}
      />

      <mesh
        name="mouse"
        castShadow
        receiveShadow
        geometry={mouseGeometry}
        material={mouseMaterial}
        position={[-6.65, 5.11, 2.23]}
        rotation={[Math.PI, -0.39, Math.PI]}
        scale={[-0.29, -0.11, -0.23]}
      />

      <mesh
        name="screen-frame"
        castShadow
        receiveShadow
        geometry={screenFrameGeometry}
        material={screenFrameMaterial}
        position={[-8.15, 6.37, 4.39]}
        scale={[0.02, 0.84, 3.01]}
      />

      <mesh
        name="screen-plan"
        castShadow
        receiveShadow
        geometry={screenPlanGeometry}
        material={screenPlanMaterial}
        position={[-8.15, 6.37, 4.39]}
        scale={[0.02, 0.84, 3.01]}
      >
        <meshStandardMaterial>
          <videoTexture attach="map" args={[videoTexture]} />
        </meshStandardMaterial>
      </mesh>

      <mesh
        name="screenHolder"
        castShadow
        receiveShadow
        geometry={screenHolderGeometry}
        material={screenHolderMaterial}
        position={[-8.55, 5.23, 4.4]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.26, -0.04, -1.06]}
      />

      {/* <group name="keyboard-keys">
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.54]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.17]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />

        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.57]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.14]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-8.45, 5.33, 5.62]}
          rotation={[0, 0, -0.06]}
          scale={[0.17, 0.02, 0.08]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.77]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.35]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-8.84, 5.35, 5.61]}
          rotation={[0, 0, -0.06]}
          scale={[0.17, 0.02, 0.08]}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube041"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.82]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.14]}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube055"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.28]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.1]}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube053"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube060"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube059"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube072"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube073"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={keyboardKeyGeometry}
          material={keyboardKeyMaterial}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
      </group> */}
    </>
  );
}
