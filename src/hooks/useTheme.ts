import { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/reducers";
import theme from "../assets/jsons/theme.json";

export function useTheme() {
  const mode = useSelector((state: State) => state.app.mode);

  useEffect(() => {
    const root = document.documentElement;
    Object.keys(theme[mode]).forEach((key: string) => {
      //@ts-ignore
      root.style.setProperty(key, theme[mode][key]);
    });
  }, [mode]);
}
