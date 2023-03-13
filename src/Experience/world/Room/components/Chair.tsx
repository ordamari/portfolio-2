type privateProps = {
  nodes: any;
  materials: any;
};

export function Chair({ nodes, materials }: privateProps) {
  return (
    <>
      <mesh
        name="chairBottomPillow"
        castShadow
        receiveShadow
        geometry={nodes.chairBottomPillow.geometry}
        material={materials.mousePad}
        position={[-3.25, 4.36, 4.39]}
        rotation={[0, 0, -0.13]}
        scale={[0.17, 0.53, 0.76]}
      />

      <mesh
        name="chairLeg"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg.geometry}
        material={materials.chairPlastic}
        position={[-4.3, 1.54, 4.11]}
        scale={[0.05, 0.08, 0.08]}
      />

      <mesh
        name="chairSeat"
        castShadow
        receiveShadow
        geometry={nodes.chairSeat.geometry}
        material={materials.key}
        position={[-4.46, 3.61, 4.45]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.18, 0.08, 1]}
      />
      <mesh
        name="chairLeg002"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg002.geometry}
        material={materials.chairPlastic}
        position={[-4.58, 1.54, 4.58]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
        scale={[0.05, 0.08, 0.08]}
      />
      <mesh
        name="chairTopPillow"
        castShadow
        receiveShadow
        geometry={nodes.chairTopPillow.geometry}
        material={materials.mousePad}
        position={[-2.82, 7.07, 4.43]}
        rotation={[0, 0, -0.11]}
        scale={[0.2, 0.38, 0.62]}
      />
      <mesh
        name="chairBack"
        castShadow
        receiveShadow
        geometry={nodes.chairBack.geometry}
        material={materials.key}
        position={[-2.8, 5.46, 4.43]}
        rotation={[0, 0, 2.98]}
        scale={[-0.11, -1.9, -1]}
      />
      <mesh
        name="chairLeg005"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg005.geometry}
        material={materials.chairPlastic}
        position={[-4.03, 1.54, 4.27]}
        rotation={[0, -Math.PI / 3, 0]}
        scale={[0.05, 0.08, 0.08]}
      />
      <mesh
        name="chairLeg001"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg001.geometry}
        material={materials.chairPlastic}
        position={[-4.58, 1.54, 4.26]}
        rotation={[0, Math.PI / 3, 0]}
        scale={[0.05, 0.08, 0.08]}
      />
      <mesh
        name="chairHandle"
        castShadow
        receiveShadow
        geometry={nodes.chairHandle.geometry}
        material={materials.chairPlastic}
        position={[-4.49, 3.49, 5.59]}
        scale={[0.23, 0.04, 0.42]}
      />
      <mesh
        name="chairLeg003"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg003.geometry}
        material={materials.chairPlastic}
        position={[-4.31, 1.54, 4.74]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.05, 0.08, 0.08]}
      />
      <mesh
        name="chairLeg004"
        castShadow
        receiveShadow
        geometry={nodes.chairLeg004.geometry}
        material={materials.chairPlastic}
        position={[-4.03, 1.54, 4.58]}
        rotation={[Math.PI, -Math.PI / 3, Math.PI]}
        scale={[0.05, 0.08, 0.08]}
      />
      <mesh
        name="legsHolder001"
        castShadow
        receiveShadow
        geometry={nodes.legsHolder001.geometry}
        material={materials.chairPlastic}
        position={[-4.31, 1.82, 4.42]}
        scale={[0.24, 0.38, 0.24]}
      />
    </>
  );
}
