import React, { useState, useRef, useEffect } from "react";

import "./App.css";

// LOADING BURGER
import LoadingBurgerSatu from "./components/loadingBurger/LoadingBurgerSatu";
import burger from "./assets/img/burger.png";
import kompor from "./assets/img/kompor.png";
import pan from "./assets/img/pan.png";

import burgerAnimation from "./assets/gif/burger.gif";
import fire from "./assets/gif/fire.gif";

// DAPUR
// import Dapur from "./Dapur.jsx";

// KOMPOR
// import KomporSatu from "./components/kompor/KomporSatu.jsx";

// MASAKAN
// import MasakanSatu from "./components/masakan/MasakanSatu.jsx";

// PELANGGAN
// import PelangganSatu from "./components/pelanggan/PelangganSatu.jsx";

// KASIR
// import Kasir from "./Kasir.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [idle, setIdle] = useState(true);

  return (
    <>
      <br />
      <div className="text-xl font-bold text-center">BURGER BONGOR</div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center w-full">
        {["baris1", "baris2", "baris3"].map((value, index) => (
          <React.Fragment key={value}>
            <div id={value} className="flex items-center justify-center">
              {["kompor1", "kompor2", "kompor3"].map((value, index) => (
                <React.Fragment key={value}>
                  {idle && (
                    <div
                      id={value}
                      className={`w-[6.5em] h-[10em] m-1 relative`}
                    >
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
                  )}

                  {/* {dimasak && (
                    <LoadingBurgerSatu
                      id={value}
                      className={`size-[7em]`}
                      duration={5}
                    />
                  )} */}

                  {/* {matang && (
                    <div id={value} className={`size-[7em]`}>
                      <img src={burger} alt="burger" />
                    </div>
                  )} */}

                  {/* {hangus && (
                    <div id={value} className={`size-[7em]`}>
                      <img src={burger} alt="burger" />
                    </div>
                  )} */}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* ==== DAPUR ==== */}
      {/* <Dapur>
        <KomporSatu>
          <MasakanSatu />
        </KomporSatu>
      </Dapur> */}
      {/* ==== DAPUR ==== */}
      {/* ==== KASIR ==== */}
      {/* <Kasir>
        <PelangganSatu />
      </Kasir> */}
      {/* ==== KASIR ==== */}
    </>
  );
}

export default App;
