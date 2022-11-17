import React from "react";
import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import FicheFilm from "@components/fiche/FicheFilm";
import Discover from "@pages/Discover";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<FicheFilm />} />
        <Route path="/:type" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
