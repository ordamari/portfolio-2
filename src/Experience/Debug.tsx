import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export function Debug() {
  // const { prep, orbitControl, gridHelper, axesHelper, orbitControlZoom } =
  //   useControls("debug", {
  //     prep: { value: true },
  //     orbitControl: { value: false },
  //     orbitControlZoom: { value: false },
  //     gridHelper: { value: false },
  //     axesHelper: { value: false },
  //   });
  return (
    <>
      {/* {prep && <Perf position="top-left" />}
      {orbitControl && <OrbitControls enableZoom={orbitControlZoom} />}
      {gridHelper && <gridHelper args={[20, 20, 0xff0000, "teal"]} />}
      {axesHelper && <axesHelper args={[20]} />} */}
    </>
  );
}
