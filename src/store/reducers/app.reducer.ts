import { Mode } from "../../assets/types/mode";
import { AppActions, AppActionTypes } from "../store-types/appActions";

export type appState = {
  mode: Mode;
  isRoomLoad: boolean;
  isEnableScroll: boolean;
  status: "suspense" | "first-intro" | "second-intro" | "screen";
};

const initialState: appState = {
  mode: "light",
  isRoomLoad: false,
  isEnableScroll: false,
  status: "suspense",
};

export const appReducer = (
  state: appState = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case AppActionTypes.toggleMode:
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    case AppActionTypes.toggleIsRoomLoad:
      return {
        ...state,
        isRoomLoad: true,
        status: "first-intro",
      };
    case AppActionTypes.toggleIsEnableScroll:
      return {
        ...state,
        isEnableScroll: true,
        status: "screen",
      };
    case AppActionTypes.finishFirstIntro:
      return {
        ...state,
        status: "second-intro",
      };
    default:
      return state;
  }
};
