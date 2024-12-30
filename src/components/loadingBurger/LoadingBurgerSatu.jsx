import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// GAMBAR
import burgerAnimation from "../../assets/gif/burger.gif";
import burger from "../../assets/img/burger.png";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  //   if (remainingTime === 0) {
  //     return <div className="timer">Too late...</div>;
  //   }

  return (
    <div className="timer">
      <img className="w-[70px]" src={burgerAnimation} alt="burgerAnimation" />
      <div className="value font-bold">{remainingTime}</div>
    </div>
  );
};

const LoadingBurgerSatu = ({ duration }) => {
  return (
    <>
      <div
        className={`
        p-0 
        w-52 h-52 
        flex justify-center items-center
        `}
      >
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          colors={["#FB4141", "#5CB338"]}
          colorsTime={[duration, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 0 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
};

export default LoadingBurgerSatu;
