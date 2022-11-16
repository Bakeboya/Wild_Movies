import React from "react";
import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import FicheFilm from "@components/fiche/FicheFilm";
import Discover from "@pages/Discover";
import Search from "@pages/Search";
import Results from "@pages/Results";
import Filtered from "@pages/Filtered";
import Actorslist from "@components/actors/Actorslist";
import DirectorPage from "@components/director/DirectorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew/:id" element={<DirectorPage />} />
        <Route path="/actor/:id" element={<Actorslist />} />
        <Route path="/:type/:id" element={<FicheFilm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/filtered" element={<Filtered />} />
        <Route path="/films/populaires" element={<Discover />} />
        <Route path="/films/meilleures-notes" element={<Discover />} />
        <Route path="/films/a-venir" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
