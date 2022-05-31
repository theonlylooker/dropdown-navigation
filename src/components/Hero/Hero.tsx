import React from "react";
import heroImageM from "../../assets/images/image-hero-mobile.png";
import heroImageD from "../../assets/images/image-hero-desktop.png";
import audiophile from "../../assets/images/client-audiophile.svg";
import databiz from "../../assets/images/client-databiz.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Make remote work</h1>
        <p className="hero__paragraph">
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and watch productivity
          soar.
        </p>
        <button>sere un styled component</button>
        <div className="hero__clients">
          <img src={audiophile} alt="audiophile" />
          <img src={databiz} alt="databiz" />
          <img src={maker} alt="maker" />
          <img src={meet} alt="meet" />
        </div>
      </div>
      <picture className="hero__image">
        <source srcSet={heroImageD} media="(min-width: 1800px)" />
        <img src={heroImageM} alt="man writing in a laptop" />
      </picture>
    </div>
  );
};

export default Hero;
