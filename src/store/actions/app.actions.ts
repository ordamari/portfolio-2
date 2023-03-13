import { Dispatch } from "react";
import {
  AppActionTypes,
  FinishFirstIntro,
  ToggleIsEnableScroll,
  ToggleIsRoomLoad,
  ToggleMode,
} from "../store-types/appActions";

export function toggleIsRoomLoad() {
  return async (dispatch: Dispatch<ToggleIsRoomLoad>) => {
    try {
      dispatch({ type: AppActionTypes.toggleIsRoomLoad, payload: null });
    } catch (err) {
      console.log("AppActions: err in update progress", err);
    }
  };
}

export function toggleIsEnableScroll() {
  return async (dispatch: Dispatch<ToggleIsEnableScroll>) => {
    try {
      dispatch({ type: AppActionTypes.toggleIsEnableScroll, payload: null });
    } catch (err) {
      console.log("AppActions: err in update progress", err);
    }
  };
}

export function toggleMode() {
  return async (dispatch: Dispatch<ToggleMode>) => {
    try {
      dispatch({ type: AppActionTypes.toggleMode, payload: null });
    } catch (err) {
      console.log("AppActions: err in toggle mode", err);
    }
  };
}

export function finishFirstIntro() {
  return async (dispatch: Dispatch<FinishFirstIntro>) => {
    try {
      dispatch({ type: AppActionTypes.finishFirstIntro, payload: null });
    } catch (err) {
      console.log("AppActions: err in finish first intro", err);
    }
  };
}
