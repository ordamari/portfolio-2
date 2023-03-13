export enum AppActionTypes {
  toggleMode = "toggleMode",
  toggleIsRoomLoad = "toggleIsRoomLoad",
  toggleIsEnableScroll = "toggleIsEnableScroll",
  finishFirstIntro = "finishFirstIntro",
}

export type ToggleMode = {
  type: AppActionTypes.toggleMode;
  payload: null;
};
export type ToggleIsRoomLoad = {
  type: AppActionTypes.toggleIsRoomLoad;
  payload: null;
};

export type ToggleIsEnableScroll = {
  type: AppActionTypes.toggleIsEnableScroll;
  payload: null;
};

export type FinishFirstIntro = {
  type: AppActionTypes.finishFirstIntro;
  payload: null;
};

export type AppActions =
  | ToggleMode
  | ToggleIsRoomLoad
  | ToggleIsEnableScroll
  | FinishFirstIntro;
