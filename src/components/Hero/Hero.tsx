import React from "react";
import heroImageM from "../../assets/images/image-hero-mobile.png";
import audiophile from "../../assets/images/client-audiophile.svg";
import databiz from "../../assets/images/client-databiz.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";
import { StyledButton } from "../Button/Button.style";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <div>
          <h1 className="hero__title">Make remote work</h1>
          <p className="hero__paragraph">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <StyledButton type="hero"> Learn More </StyledButton>
        </div>
        <div className="hero__clients">
          <img className="hero__client1" src={databiz} alt="databiz" />
          <img className="hero__client2" src={audiophile} alt="audiophile" />
          <img className="hero__client3" src={meet} alt="meet" />
          <img className="hero__client4" src={maker} alt="maker" />
        </div>
      </div>
      <img className="hero__img" src={heroImageM} alt="" />
    </div>
  );
};

export default Hero;
