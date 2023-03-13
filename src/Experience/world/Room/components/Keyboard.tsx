type privateProps = {
  nodes: any;
  materials: any;
};

export function Keyboard({ nodes, materials }: privateProps) {
  return (
    <>
      <mesh
        name="keyboardBoard"
        castShadow
        receiveShadow
        geometry={nodes.keyboardBoard.geometry}
        material={materials.earphones}
        position={[-6.61, 5.12, 4.34]}
        scale={[0.62, 0.05, 1.5]}
      />
      <group position={[0, 0, 0.06]} name="keys">
        <mesh
          name="Cube079"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials.key}
          position={[-7.33, 5.26, 5.61]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.54]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.17]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.57]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.14]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.key}
          position={[-8.45, 5.33, 5.62]}
          rotation={[0, 0, -0.06]}
          scale={[0.17, 0.02, 0.08]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.key}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.77]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.35]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.key}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.key}
          position={[-7.12, 5.24, 5.79]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.key}
          position={[-8.84, 5.35, 5.61]}
          rotation={[0, 0, -0.06]}
          scale={[0.17, 0.02, 0.08]}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.71]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube041"
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.82]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.14]}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.94]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.67]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube055"
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.28]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.1]}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube053"
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube060"
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube059"
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube072"
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube073"
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 6.08]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials.key}
          position={[-7.12, 5.18, 8.38]}
          rotation={[0, 0, -0.0]}
          scale={[0.08, 0.02, 0.19]}
        />
        <mesh
          name="Cube070"
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube075"
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
        <mesh
          name="Cube069"
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials.key}
          position={[-7.12, 5.25, 5.63]}
          rotation={[0, 0, -0.06]}
          scale={[0.08, 0.02, 0.08]}
        />
      </group>
    </>
  );
}
