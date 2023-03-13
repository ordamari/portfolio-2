export type Asset = {
  name: string;
  type: "glbModel" | "videoTexture" | "imageTexture";
  path: string;
};

export default [
  {
    name: "room",
    type: "glbModel",
    path: "./models/room.glb",
  },
  {
    name: "screen",
    type: "videoTexture",
    path: "/textures/coding.mp4",
  },
  {
    name: "screen",
    type: "imageTexture",
    path: "/textures/image.png",
  },
] as Asset[];
