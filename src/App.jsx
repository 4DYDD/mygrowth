import React, { useState, useRef, useEffect } from "react";

import "./App.css";

// LOADING BURGER

import Kompor from "./components/kompor/Kompor";

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
  // const [idle, setIdle] = useState(false);
  // const [masak, setMasak] = useState(false);
  // const [matang, setMatang] = useState(false);
  // const [hangus, setHangus] = useState(false);

  return (
    <>
      <br />
      <div className="text-xl font-bold text-center">BURGER BONGOR</div>
      {/* <button
        onClick={() => {
          setIdle(!idle);
        }}
        className="p-3 m-3 font-bold bg-blue-500 rounded shadow"
      >
        idle
      </button>
      <button
        onClick={() => {
          setMasak(!masak);
        }}
        className="p-3 m-3 font-bold bg-blue-500 rounded shadow"
      >
        masak
      </button>
      <button
        onClick={() => {
          setMatang(!matang);
        }}
        className="p-3 m-3 font-bold bg-blue-500 rounded shadow"
      >
        matang
      </button>
      <button
        onClick={() => {
          setHangus(!hangus);
        }}
        className="p-3 m-3 font-bold bg-blue-500 rounded shadow"
      >
        hangus
      </button> */}
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center w-full">
        {["baris1", "baris2", "baris3"].map((value, index) => (
          <React.Fragment key={value}>
            <div id={value} className="flex items-center justify-center">
              {[
                {
                  text: "kompor1",
                  state: useState({
                    masak: false,
                    idle: true,
                    hangus: false,
                    matang: false,
                  }),
                },
                {
                  text: "kompor2",
                  state: useState({
                    masak: false,
                    idle: true,
                    hangus: false,
                    matang: false,
                  }),
                },
                {
                  text: "kompor3",
                  state: useState({
                    masak: false,
                    idle: true,
                    hangus: false,
                    matang: false,
                  }),
                },
              ].map((value, index) => (
                <Kompor key={value.text} value={value} />
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
