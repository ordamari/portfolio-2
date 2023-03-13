import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/reducers";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { ToggleMode } from "./components/ToggleMode";
import { Loader } from "./components/Loader";
import { AnimatedText } from "./components/AnimatedText";
import { ExpandMore } from "../assets/svgs/ExpandMore";
import { Preloader } from "./components/Preloader";

type PrivateProps = {
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>;
};

export function Page({ sectionsRefs }: PrivateProps) {
  const isRoomLoad = useSelector((state: State) => state.app.isRoomLoad);
  const status = useSelector((state: State) => state.app.status);
  console.log(status);

  return (
    <div
      asscroll-container="true"
      className={`page ${status === "screen" ? "load" : ""}`}
    >
      <ToggleMode />
      {/* <Welcome /> */}
      <Preloader />
      <div
        // @ts-ignore
        asscroll="true"
        className="page-wrapper"
      >
        <Hero />
        <div className="first-move section-margin" />
        <About sectionsRefs={sectionsRefs} />
        <div className="second-move section-margin" />
        <Works sectionsRefs={sectionsRefs} />
        <div className="third-move section-margin" />
        <Contact sectionsRefs={sectionsRefs} />
      </div>
    </div>
  );
}
