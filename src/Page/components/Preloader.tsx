import { ExpandMore } from "../../assets/svgs/ExpandMore";
import { AnimatedText } from "./AnimatedText";
import { Loader } from "./Loader";

export function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-wrapper">
        <Loader />
        <div className="welcome">
          <AnimatedText text="Welcome to my portfolio!" />
        </div>
      </div>
    </div>
  );
}
