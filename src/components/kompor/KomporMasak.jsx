import LoadingBurgerSatu from "../loadingBurger/LoadingBurgerSatu";
import burger from "../../assets/img/burger.png";
import kompor from "../../assets/img/kompor.png";
import pan from "../../assets/img/pan.png";

import burgerAnimation from "../../assets/gif/burger.gif";
import fire from "../../assets/gif/fire.gif";

const KomporMasak = ({ value, handleStatus }) => {
  return (
    <>
      <div
        id={value}
        className={`w-[6.5em] h-[9.5em] m-1 relative flex justify-center items-end`}
      >
        <LoadingBurgerSatu
          id={value}
          className={`size-[11em] !scale-[0.15] transcenter !bottom-[105%] rounded-full bg-white scale-up-bottom`}
          duration={5}
        />
        <button
          onClick={() => {
            setTimeout(() => {
              handleStatus();
            }, 100);
          }}
          className="w-[4em] h-[4em] relative active:scale-90 transall"
        >
          <img
            className="w-[3em] transcenter !bottom-[25%]"
            src={kompor}
            alt="kompor"
          />
          <img
            className="w-[3em] transcenter !bottom-[63%]"
            src={fire}
            alt="fire"
          />
          <img
            className="w-[3em] transcenter !bottom-[63%] !right-[52%] -scale-x-100"
            src={fire}
            alt="fire"
          />
          <img
            className="w-[3em] transcenter !bottom-[63%] !right-[62%] -scale-x-100"
            src={fire}
            alt="fire"
          />
          <img
            className="w-[3em] transcenter !bottom-[63%] !right-[42%] -scale-x-100"
            src={fire}
            alt="fire"
          />
          <img
            className="w-[3.5em] transcenter !bottom-[63%]"
            src={pan}
            alt="pan"
          />
          <img
            className="w-[2.5em] transcenter !bottom-[63%]"
            src={burgerAnimation}
            alt="burgerAnimation"
          />
        </button>
      </div>
    </>
  );
};

export default KomporMasak;
