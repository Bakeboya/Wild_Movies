
import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import FicheFilm from "@components/fiche/FicheFilm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<FicheFilm />} />
      </Routes>
    </div>
  );
}

export default App;
