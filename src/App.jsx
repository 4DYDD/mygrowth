import { useState, useRef, useEffect } from "react";

import "./App.css";

// LOADING BURGER
import LoadingBurgerSatu from "./components/loadingBurger/LoadingBurgerSatu";

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

  return (
    <>
      <div>halo gais</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-[800px] justify-center items-center gap-20 flex">
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
        </div>
        <div className="w-[800px] justify-center items-center gap-20 flex">
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
        </div>
        <div className="w-[800px] justify-center items-center gap-20 flex">
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
          <LoadingBurgerSatu duration={5} />
        </div>
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
