import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const FicheFilm = lazy(() => import("@components/fiche/FicheFilm"));
const Discover = lazy(() => import("@pages/Discover"));
const DirectorPage = lazy(() => import("@components/director/DirectorPage"));
const Actorslist = lazy(() => import("@components/actors/Actorslist"));
const Footer = lazy(() => import("@components/footer/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner" />
            <p>Chargement</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew/:id" element={<DirectorPage />} />
          <Route path="/actor/:id" element={<Actorslist />} />
          <Route path="/:type/:id" element={<FicheFilm />} />
          <Route path="/:type" element={<Discover />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
