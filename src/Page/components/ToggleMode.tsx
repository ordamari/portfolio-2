import { useSelector } from "react-redux";
import { Moon } from "../../assets/svgs/Moon";
import { Sun } from "../../assets/svgs/Sun";
import { useActions } from "../../hooks/useActions";
import { State } from "../../store/reducers";

export function ToggleMode() {
  const mode = useSelector((state: State) => state.app.mode);
  const AC = useActions();

  return (
    <div className="toggle-bar">
      <div className="sun-wrapper">
        <Sun />
      </div>
      <button onClick={AC.toggleMode} className="toggle-button">
        <div className={`toggle-circle ${mode}`}></div>
      </button>
      <div className="moon-wrapper">
        <Moon />
      </div>
    </div>
  );
}
