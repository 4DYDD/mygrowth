import LoadingBurgerSatu from "../loadingBurger/LoadingBurgerSatu";
import burger from "../../assets/img/burger.png";
import kompor from "../../assets/img/kompor.png";
import pan from "../../assets/img/pan.png";

import burgerAnimation from "../../assets/gif/burger.gif";
import fire from "../../assets/gif/fire.gif";

const KomporMatang = ({ value }) => {
  return (
    <>
      <div id={value} className={`w-[6.5em] h-[10em] m-1 relative -rotate-90`}>
        <LoadingBurgerSatu
          id={value}
          className={`size-[11em] !scale-[0.15] transcenter !bottom-[105%] rounded-full bg-white scale-up-bottom`}
          duration={5}
        />
        <img
          className="w-[3em] transcenter !bottom-[20%]"
          src={kompor}
          alt="kompor"
        />
        <img
          className="w-[3em] transcenter !bottom-[35%]"
          src={fire}
          alt="fire"
        />
        <img
          className="w-[3em] transcenter !bottom-[35%] !right-[52%] -scale-x-100"
          src={fire}
          alt="fire"
        />
        <img
          className="w-[3em] transcenter !bottom-[35%] !right-[62%] -scale-x-100"
          src={fire}
          alt="fire"
        />
        <img
          className="w-[3em] transcenter !bottom-[35%] !right-[42%] -scale-x-100"
          src={fire}
          alt="fire"
        />
        <img
          className="w-[3.5em] transcenter !bottom-[35%]"
          src={pan}
          alt="pan"
        />
        <img
          className="w-[2.5em] transcenter !bottom-[35%]"
          src={burgerAnimation}
          alt="burgerAnimation"
        />
      </div>
    </>
  );
};

export default KomporMatang;
