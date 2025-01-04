import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// GAMBAR

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  //   if (remainingTime === 0) {
  //     return <div className="timer">Too late...</div>;
  //   }

  return (
    <div className="timer">
      <div className="font-bold !text-[5.5em] value">{remainingTime}</div>
    </div>
  );
};

const LoadingBurgerSatu = ({ duration, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={`
        p-0 
        flex justify-center items-center
        ${className}
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
