type privateProps = {
  geometries: [THREE.BufferGeometry, THREE.BufferGeometry];
  materials: [THREE.MeshStandardMaterial, THREE.MeshStandardMaterial];
};
export function Rug({ geometries, materials }: privateProps) {
  return (
    <group name="rug" position={[2.89, 1.06, 2.29]} scale={[6.33, 0.05, 6.33]}>
      <mesh
        name="Cylinder006_1"
        castShadow
        receiveShadow
        geometry={geometries[0]}
        material={materials[0]}
      />
      <mesh
        name="Cylinder006_2"
        castShadow
        receiveShadow
        geometry={geometries[1]}
        material={materials[1]}
      />
    </group>
  );
}
