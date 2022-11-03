import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import FicheFilm from "@components/fiche/FicheFilm";
import Discover from "@pages/Discover";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FicheFilm />} />
        <Route path="/films/populaires" element={<Discover />} />
        <Route path="/films/meilleures-notes" element={<Discover />} />
        <Route path="/films/a-venir" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
