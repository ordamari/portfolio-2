import { ExpandMore } from "../../assets/svgs/ExpandMore";
import { AnimatedText } from "./AnimatedText";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-main">
          <h1 className="hero-main-title">
            <AnimatedText text="Or Damari" />
          </h1>
          <p className="hero-main-description">
            <AnimatedText text="FullStack Developer" />
          </p>
        </div>
        <div className="hero-second">
          <p className="hero-second-subheading first-sub">
            <AnimatedText text="Or Damari" />
          </p>
          <p className="hero-second-subheading second-sub">
            <AnimatedText text="Portfolio" />
          </p>
        </div>
      </div>
      <div className="arrow-svg-wrapper">
        <ExpandMore />
      </div>
    </section>
  );
}
