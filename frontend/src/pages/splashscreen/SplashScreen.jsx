import React from 'react';
import "./SplashScreen.scss";
import Groupbackground from "../../components/SVG/Groupbackground.svg";
import TokTokLogo from "../../components/SVG/TokTokLogo.svg";
import Loading from "../../components/SVG/Loading.svg";

const SplashScreen = () => {
  return (
    <section className="page-container">
      <div className='Groupbackground'>
        <img src={Groupbackground} alt="" />
      </div>
      <div className='Logo'>
        <img src={TokTokLogo} alt="Logo" />
      </div>
      <div className='load-icon'>
        <img src={Loading} alt="" className="loading-icon" />
      </div>
    </section>
  );
};

export default SplashScreen;
