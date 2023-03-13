type privateProps = {
  wallGeometry: THREE.BufferGeometry;
  wallMaterial: THREE.MeshStandardMaterial;
  windowGeometry: THREE.BufferGeometry;
  windowMaterial: THREE.MeshStandardMaterial;
};

export function Walls({
  wallGeometry,
  wallMaterial,
  windowGeometry,
  windowMaterial,
}: privateProps) {
  return (
    <>
      <mesh
        position={[0.34, 10.73, 0.45]}
        scale={10.61}
        name="walls"
        castShadow
        receiveShadow
        geometry={wallGeometry}
        material={wallMaterial}
      />
    </>
  );
}
