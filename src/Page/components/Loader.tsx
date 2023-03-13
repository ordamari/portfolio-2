import { useSelector } from "react-redux";
import { State } from "../../store/reducers";

export function Loader() {
  const isRoomLoad = useSelector((state: State) => state.app.isRoomLoad);
  return (
    <div className={`loader ${isRoomLoad ? "load" : ""}`}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
