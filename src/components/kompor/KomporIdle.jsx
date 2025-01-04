import LoadingBurgerSatu from "../loadingBurger/LoadingBurgerSatu";
import burger from "../../assets/img/burger.png";
import kompor from "../../assets/img/kompor.png";
import pan from "../../assets/img/pan.png";

import burgerAnimation from "../../assets/gif/burger.gif";
import fire from "../../assets/gif/fire.gif";

const KomporIdle = ({ value, handleStatus }) => {
  return (
    <>
      <div
        id={value}
        className={`w-[6.5em] h-[9.5em] m-1 relative flex justify-center items-end`}
      >
        <button
          onClick={() => {
            handleStatus();
          }}
          className="w-[4em] h-[4em] relative active:scale-90 transall"
        >
          <img
            className="w-[3em] transcenter !bottom-[25%]"
            src={kompor}
            alt="kompor"
          />

          <img
            className="w-[3.5em] transcenter !bottom-[63%]"
            src={pan}
            alt="pan"
          />
        </button>
      </div>
    </>
  );
};

export default KomporIdle;
