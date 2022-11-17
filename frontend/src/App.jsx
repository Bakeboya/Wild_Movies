import React from "react";
import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import FicheFilm from "@components/fiche/FicheFilm";
import Discover from "@pages/Discover";
import DirectorPage from "@components/director/DirectorPage";
import Actorslist from "@components/actors/Actorslist";
import Footer from "@components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew/:id" element={<DirectorPage />} />
        <Route path="/actor/:id" element={<Actorslist />} />
        <Route path="/:type/:id" element={<FicheFilm />} />
        <Route path="/:type" element={<Discover />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
